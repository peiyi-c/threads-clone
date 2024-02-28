import { useState } from "react";
import useAuthStore from "../store/authStore";
import useThreadStore from "../store/threadStore";
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
import { ref } from "firebase/storage";
import { uploadStrings } from "../utils/uploadStrings";
import { downloadImageURLs } from "../utils/downloadURLs";
// import { addHours } from "../utils/addHours";

const useCreateThread = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuthStore();
  const { createThread } = useThreadStore();
  const { userProfile, addThread } = useUserProfileStore();
  const showToast = useShowToast();

  const handleCreatePost = async (text, images, quote, type) => {
    if (isLoading) return;
    if (!text && !images) {
      showToast("Error", "Please add text or image.", "error");
      return;
    }

    setIsLoading(true);

    const newThread = {
      // id: "", // will get from postDocRef later
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
    // if quoting, add quoting content
    if (quote && quote.id && quote.createdBy) {
      newThread.quoting = { postId: quote.id, createdBy: quote.createdBy };
    }

    try {
      // upload thread
      const postDocRef = await addDoc(
        collection(firestore, "threads"),
        newThread
      );
      // upload user
      const userDocRef = doc(firestore, "users", user.uid);
      await updateDoc(userDocRef, { threads: arrayUnion(postDocRef.id) });

      // upload image strings, download image urls
      const imageRefs = images.map((image) =>
        ref(storage, `threads/${postDocRef.id}/${image.id}`)
      );
      await uploadStrings(imageRefs, images);

      const downloadURLs = await downloadImageURLs(imageRefs, images);
      await updateDoc(postDocRef, {
        id: postDocRef.id,
        mediaURLs: downloadURLs,
      });

      // if quoting, update post got quoted
      if (quote && quote.id) {
        const quoteDocRef = doc(firestore, type, quote.id);
        await updateDoc(quoteDocRef, { quotedBy: arrayUnion(user.uid) });
      }

      // update store
      newThread.mediaURLs = downloadURLs;
      if (userProfile) {
        createThread({ ...newThread, id: postDocRef.id });
        addThread({ ...newThread, id: postDocRef.id });
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
