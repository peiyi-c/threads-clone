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
      setIsLoading(true);

      try {
        const q = userProfile?.reposts.length
          ? query(
              collection(firestore, "threads"),
              where("id", "in", [...userProfile.reposts])
            )
          : null;

        if (q) {
          const querySnapshot = await getDocs(q);
          // if no repost exists
          if (querySnapshot.empty) {
            setReposts(null);
            return;
          }
          // if any repost exist
          const reposts = [];
          querySnapshot.forEach((doc) =>
            reposts.push({ ...doc.data(), id: doc.id })
          );

          setReposts(reposts);
        } else {
          setReposts(null);
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
