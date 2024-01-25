import { useState } from "react";
import useAuthStore from "../store/authStore";
import useShowToast from "./useShowToast";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const useLikeReply = (reply) => {
  const { user } = useAuthStore();
  const [isUpdating, setIsUpdating] = useState(false);
  const [likes, setLikes] = useState(reply.likedBy?.length || 0);
  const [isLiked, setIsLiked] = useState(
    reply.likedBy?.includes(user?.uid) || false
  );
  const showToast = useShowToast();

  const handleLikeReply = async () => {
    if (isUpdating) return;
    if (!user)
      return showToast("Error", "Please login to like a post", "error");

    setIsUpdating(true);

    try {
      // update data
      const replyRef = doc(firestore, "replies", reply.id);
      await updateDoc(replyRef, {
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
  return { isUpdating, isLiked, likes, handleLikeReply };
};

export default useLikeReply;
