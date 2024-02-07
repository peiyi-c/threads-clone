import { useEffect, useState } from "react";
import useAuthStore from "../store/authStore";
import useShowToast from "./useShowToast";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const useRepostPost = (post) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isReposted, setIsReposted] = useState(false);
  const { user } = useAuthStore();
  const showToast = useShowToast();

  useEffect(() => {
    if (user) setIsReposted(user.reposts?.includes(post.id));
  }, [user.uid, post.id]);

  const handleRepostPost = async () => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      // update user: toggle postId in user's reposts property
      const userDocRef = doc(firestore, "users", user.uid);
      await updateDoc(userDocRef, {
        reposts: isReposted ? arrayRemove(post.id) : arrayUnion(post.id),
      });

      if (isReposted) {
        setIsReposted(false);
        showToast("Success", "Removed!", "success");
      } else {
        setIsReposted(true);
        showToast("Success", "Reposted!", "success");
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
