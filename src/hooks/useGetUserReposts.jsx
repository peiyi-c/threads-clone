import { useEffect, useState } from "react";
import useShowToast from "./useShowToast";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import useUserProfileStore from "../store/userProfileStore";

const useGetUserReposts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [reposts, setReposts] = useState();
  const { userProfile } = useUserProfileStore();
  const showToast = useShowToast();

  useEffect(() => {
    const getReposts = async () => {
      if (!userProfile) return;
      setIsLoading(true);

      try {
        if (userProfile.reposts.length) {
          const threadRef = collection(firestore, "threads");
          // if any repost of thread exist
          const q = query(
            threadRef,
            where("id", "in", [...userProfile.reposts])
          );
          const reposts = [];
          if (q) {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
              reposts.push({ ...doc.data(), id: doc.id });
            });
            setReposts(reposts);
          }
          // if any repost of reply exist
          const replyRef = collection(firestore, "replies");
          const qu = query(
            replyRef,
            where("id", "in", [...userProfile.reposts])
          );
          if (qu) {
            const querySnap = await getDocs(qu);
            querySnap.forEach((doc) =>
              reposts.push({ ...doc.data(), id: doc.id })
            );
            setReposts(reposts);
          }
        }
      } catch (error) {
        showToast("Error", error.message, "error");
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getReposts();
  }, [userProfile, showToast]);

  return { isLoading, reposts };
};

export default useGetUserReposts;
