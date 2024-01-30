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

const useReplyThread = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  const { user } = useAuthStore();
  const { addReply } = useThreadStore();
  const { userProfile, createReply } = useUserProfileStore();
  const showToast = useShowToast();

  const handleThreadReply = async (threadId, text, images) => {
    if (isUpdating) return;
    if (!user) return showToast("Error", "You must login to comment!", "error");

    setIsUpdating(true);
    showToast("Loading", "Posting...", "loading");

    const newReply = {
      // id: "",
      createdAt: Date.now(),
      createdBy: user.uid,
      threadId,
      text,
      mediaURLs: [],
      // mentioned: [],
      // isPoll: false,
      // pollOptions: [],
      // PollEndsAt: "",
      // whoCanReply: "",
      // likedBy: [],
      // repliedBy: [],
      // replies: [],
      // hideLikes: false,
    };
    try {
      // update firebase
      // ** create reply //
      const replyDocRef = await addDoc(
        collection(firestore, "replies"),
        newReply
      );
      // ** update user //
      const userDocRef = doc(firestore, "users", user.uid);
      await updateDoc(userDocRef, { replies: arrayUnion(threadId) });

      // ** update thread //
      const threadDocRef = doc(firestore, "threads", threadId);
      await updateDoc(threadDocRef, {
        repliedBy: arrayUnion(user.uid),
        replies: arrayUnion(replyDocRef.id),
      });

      // upload image strings, download image urls
      const imageRefs = images.map((image) =>
        ref(storage, `threads/${threadId}/${replyDocRef.id}/${image.id}`)
      );
      await uploadStrings(imageRefs, images);

      const downloadURLs = await downloadImageURLs(imageRefs, images);
      // ** update reply //
      await updateDoc(replyDocRef, {
        id: replyDocRef.id,
        mediaURLs: downloadURLs,
      });

      // update store
      if (userProfile) {
        addReply(threadId, replyDocRef.id);
        createReply(threadId);
      }
      showToast("Success", "Posted!", "success");
    } catch (error) {
      showToast("Error", error.message, "error");
    } finally {
      setIsUpdating(false);
    }
  };

  return { isUpdating, handleThreadReply };
};

export default useReplyThread;
