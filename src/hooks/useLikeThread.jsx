import { useState } from "react";
import useAuthStore from "../store/authStore";
import useShowToast from "./useShowToast";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const useLikeThread = (thread) => {
  const { user } = useAuthStore();
  const [isUpdating, setIsUpdating] = useState(false);
  const [likes, setLikes] = useState(thread?.likedBy?.length || 0);
  const [isLiked, setIsLiked] = useState(
    thread?.likedBy?.includes(user?.uid) || false
  );

  const showToast = useShowToast();

  const handleLikeThread = async () => {
    if (isUpdating) return;
    if (!user)
      return showToast("Error", "Please login to like a post", "error");

    setIsUpdating(true);

    try {
      // update data
      const threadRef = doc(firestore, "threads", thread.id);
      await updateDoc(threadRef, {
        likedBy: isLiked ? arrayRemove(user.uid) : arrayUnion(user.uid),
      });
      // update ui
      setIsLiked(!isLiked);
      isLiked ? setLikes(likes - 1) : setLikes(likes + 1);
    } catch (error) {
      showToast("Error", error.message, "error");
    } finally {
      setIsUpdating(false);
    }
  };

  return { isUpdating, isLiked, likes, handleLikeThread };
};

export default useLikeThread;
