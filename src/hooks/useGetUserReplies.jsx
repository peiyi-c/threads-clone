import { useEffect, useState } from "react";
import useUserProfileStore from "../store/userProfileStore";
import useShowToast from "./useShowToast";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const useGetUserReplies = () => {
  const [isLoading, setIsLoading] = useState();
  const [replied, setReplied] = useState();
  const { userProfile } = useUserProfileStore();
  const showToast = useShowToast();

  useEffect(() => {
    const getReplies = async () => {
      if (!userProfile) return;
      setIsLoading(true);

      try {
        const threadRef = collection(firestore, "threads");
        const q = query(threadRef, where("id", "in", [...userProfile.replies]));
        const querySnapshot = await getDocs(q);
        const threads = [];
        querySnapshot.forEach((doc) => {
          threads.push({ ...doc.data(), id: doc.id });
        });

        threads.sort((a, b) => b.createdAt - a.createdAt);
        setReplied(threads);
      } catch (error) {
        showToast("Error", error.message, "error");
      } finally {
        setIsLoading(false);
      }
    };

    getReplies();
  }, [userProfile.uid, showToast]);

  return { isLoading, replied };
};

export default useGetUserReplies;
