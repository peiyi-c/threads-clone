import { useState } from "react";
import useShowToast from "./useShowToast";
import { query, collection, where, getDocs, or } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const useSearchUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState();
  const showToast = useShowToast();

  const getUserProfile = async (username) => {
    setIsLoading(true);
    setUsers(null);

    try {
      const q = query(
        collection(firestore, "users"),
        or(
          where("username", "==", username),
          where("displayName", "==", username)
        )
      );
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        showToast("Error", "No matched user found..", "error");
      }
      querySnapshot.forEach((doc) => {
        setUsers([{ ...doc.data() }]);
      });
    } catch (error) {
      showToast("Error", error.message, "error");
      setUsers(null);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, users, getUserProfile };
};

export default useSearchUser;
