import { useEffect, useState } from "react";
import useThreadStore from "../store/threadStore";
import useUserProfile from "../store/userProfileStore";
import useShowToast from "./useShowToast";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const useGetUserThreads = () => {
  const [isLoading, setIsLoading] = useState();
  const { threads, setThreads } = useThreadStore();
  const { userProfile } = useUserProfile();
  const showToast = useShowToast();

  useEffect(() => {
    const getThreads = async () => {
      if (!userProfile) return;
      setIsLoading(true);
      setThreads([]);

      try {
        const q = query(
          collection(firestore, "threads"),
          where("createdBy", "==", userProfile.uid)
        );
        const querySnapshot = await getDocs(q);

        const threads = [];
        querySnapshot.forEach((doc) =>
          threads.push({ ...doc.data(), id: doc.id })
        );

        threads.sort((a, b) => b.createdAt - a.createdAt);
        setThreads(threads);
      } catch (error) {
        showToast("Error", error.messagem, "error");
        setThreads([]);
      } finally {
        setIsLoading(false);
      }
    };
    getThreads();
  }, [setThreads, userProfile, showToast]);

  return { isLoading, threads };
};

export default useGetUserThreads;
