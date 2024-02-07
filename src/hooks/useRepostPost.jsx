import { useState } from "react";
import useAuthStore from "../store/authStore";
import useShowToast from "./useShowToast";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import useUserProfileStore from "../store/userProfileStore";

const useRepostPost = (post, type) => {
  const { user } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);
  const [isReposted, setIsReposted] = useState(
    post.repostedBy?.includes(user?.uid) || false
  );

  const { userProfile, addRepost, removeRepost } = useUserProfileStore();
  const showToast = useShowToast();

  const handleRepostPost = async () => {
    if (isLoading) return;
    if (!user) return showToast("Error", "Please login to repost", "error");

    setIsLoading(true);

    try {
      // update user: toggle postId in user's reposts property
      const userDocRef = doc(firestore, "users", user.uid);
      await updateDoc(userDocRef, {
        reposts: isReposted ? arrayRemove(post.id) : arrayUnion(post.id),
      });

      // update post (thread or reply)
      if (type === "thread") {
        const threadRef = doc(firestore, "threads", post.id);
        await updateDoc(threadRef, {
          repostedBy: isReposted ? arrayRemove(user.uid) : arrayUnion(user.uid),
        });
      } else if (type === "reply") {
        const replyRef = doc(firestore, "replies", post.id);
        await updateDoc(replyRef, {
          repostedBy: isReposted ? arrayRemove(user.uid) : arrayUnion(user.uid),
        });
      }
      // update ui and store
      if (isReposted) {
        // unrepost
        setIsReposted(false);
        showToast("Success", "Removed!", "success");

        if (user.uid === userProfile.uid) {
          removeRepost(post);
        }
      } else {
        // repost
        setIsReposted(true);
        showToast("Success", "Reposted!", "success");
        if (user.uid === userProfile.uid) {
          addRepost(post);
        }
      }
    } catch (error) {
      showToast("Error", error.message, "error");
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return { handleRepostPost, isLoading, isReposted };
};

export default useRepostPost;
