import { useState } from "react";
import useAuthStore from "../store/authStore";
import usePostStore from "../store/postStore";
import useUserProfileStore from "../store/userProfileStore";
import useShowToast from "./useShowToast";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  updateDoc,
} from "firebase/firestore";
import { firestore, storage } from "../firebase/firebase";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
// import { addHours } from "../utils/addHours";

const useCreateThread = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuthStore();
  const { createPost } = usePostStore();
  const { userProfile, addPost } = useUserProfileStore();
  const showToast = useShowToast();

  const handleCreatePost = async (text, images) => {
    if (isLoading) return;
    if (!text && !images) {
      showToast("Error", "Please add text or image.", "error");
      return;
    }

    setIsLoading(true);

    const newThread = {
      id: "", // will get from postDocRef later
      createdBy: user.uid,
      createdAt: Date.now(),
      text,
      mediaURLs: [],
      //   isPoll: false,
      //   pollOptions: [],
      //   PollEndsAt: addHours(24),
      //   mentions: [],
      //   likedBy: [],
      //   repliedBy: [],
      //   replies: [],
      //   hideLikes: false,
    };

    try {
      // upload thread
      const postDocRef = await addDoc(
        collection(firestore, "threads"),
        newThread
      );
      const userDocRef = doc(firestore, "users", user.uid);
      await updateDoc(userDocRef, { threads: arrayUnion(postDocRef.id) });

      // upload image strings, download image urls
      const imageRefs = images.map((image) =>
        ref(storage, `threads/${postDocRef.id}/${image.id}`)
      );
      const selectedFiles = images.map((image) => image.path);

      const uploadStrings = async (imageRefs, selectedFiles) => {
        for (let i = 0; i < imageRefs.length; i++) {
          for (let j = 0; j < selectedFiles.length; j++) {
            await uploadString(imageRefs[i], selectedFiles[j], "data_url");
          }
        }
      };
      await uploadStrings(imageRefs, selectedFiles);

      const downloadImageURLs = async (imageRefs) => {
        let URLs = [];
        for (let i = 0; i < imageRefs.length; i++) {
          const downloadURL = await getDownloadURL(imageRefs[i]);
          URLs.push(downloadURL);
        }
        return URLs;
      };
      const downloadURLs = await downloadImageURLs(imageRefs);
      await updateDoc(postDocRef, { mediaURLs: downloadURLs });

      // update store
      newThread.mediaURLs = downloadURLs;
      if (userProfile) {
        createPost({ ...newThread, id: postDocRef.id });
        addPost({ ...newThread, id: postDocRef.id });
      }

      showToast("Success", "Posted!", "success");
    } catch (error) {
      showToast("Error", error.message, "error");
    } finally {
      setIsLoading(false);
    }
  };
  return { handleCreatePost, isLoading };
};

export default useCreateThread;
