import { useEffect, useState } from "react";
import useAuthStore from "../store/authStore";
import useShowToast from "./useShowToast";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const useGetSuggestedUsers = () => {
  const [isLoadingInitial, setIsLoadingInit] = useState(true);
  const [suggestedUsers, setSuggestedUsers] = useState([]);
  const { user } = useAuthStore();
  const showToast = useShowToast();

  useEffect(() => {
    const getSuggestedUsers = async () => {
      setIsLoadingInit(true);

      try {
        // find unfollowed users
        if (user.followings) {
          const threadRef = collection(firestore, "users");
          const q = query(
            threadRef,
            where("uid", "not-in", [user.uid, ...user.followings.slice(-9)])
          );
          const querySnap = await getDocs(q);
          const users = [];
          querySnap.forEach((doc) => {
            users.push({ ...doc.data(), id: doc.id });
          });
          users.sort((a, b) => b.createdAt - a.createdAt);
          setSuggestedUsers(users);
        }
      } catch (error) {
        showToast("Error", error.message, "error");
      } finally {
        setIsLoadingInit(false);
      }
    };
    if (user) getSuggestedUsers();
  }, [user.uid, showToast]);

  return { isLoadingInitial, suggestedUsers };
};

export default useGetSuggestedUsers;
