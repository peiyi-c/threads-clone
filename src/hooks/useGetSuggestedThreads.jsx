import { useEffect, useState } from "react";
import useAuthStore from "../store/authStore";
import useShowToast from "./useShowToast";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const useGetSuggestedThreads = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [suggestedThreads, setSuggestedThreads] = useState([]);
  const { user } = useAuthStore();
  const showToast = useShowToast();

  useEffect(() => {
    const getSuggestedThreads = async () => {
      setIsLoading(true);

      try {
        // find threads of unfollowed users
        const threadRef = collection(firestore, "threads");
        const q = query(
          threadRef,
          where("createdBy", "not-in", [user.uid, ...user.followings])
        );
        const querySnap = await getDocs(q);
        const threads = [];
        querySnap.forEach((doc) => {
          threads.push({ ...doc.data(), id: doc.id });
        });

        setSuggestedThreads(threads);
      } catch (error) {
        showToast("Error", error.message, "error");
      } finally {
        setIsLoading(false);
      }
    };
    if (user) getSuggestedThreads();
  }, [user, showToast]);
  return { isLoading, suggestedThreads };
};

export default useGetSuggestedThreads;
