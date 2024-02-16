import { useEffect, useState } from "react";
import useThreadStore from "../store/threadStore";
import useAuthStore from "../store/authStore";
import useUserProfileStore from "../store/userProfileStore";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import useShowToast from "./useShowToast";

const useGetFeedThreads = () => {
  const [isLoading, setIsLoading] = useState();
  const { threads, setThreads } = useThreadStore();
  const { user } = useAuthStore();
  const { setUserProfile } = useUserProfileStore();
  const showToast = useShowToast();

  useEffect(() => {
    const getFeedThreads = async () => {
      setIsLoading(true);

      try {
        if (user.followings.length) {
          const q = query(
            collection(firestore, "threads"),
            where("createdBy", "in", [...user.followings])
          );
          const querySnapshot = await getDocs(q);
          const feedThreads = [];
          querySnapshot.forEach((doc) =>
            feedThreads.push({
              id: doc.id,
              ...doc.data(),
            })
          );
          feedThreads.sort((a, b) => b.createdAt - a.createdAt);
          setThreads(feedThreads);
        }
      } catch (error) {
        showToast("Error", error.message, "error");
      } finally {
        setIsLoading(false);
      }
    };

    if (user) getFeedThreads();
  }, [user.uid, showToast, setThreads, setUserProfile]);

  return { isLoading, threads };
};

export default useGetFeedThreads;
