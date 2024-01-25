import { useEffect, useState } from "react";
import useShowToast from "./useShowToast";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const useGetThreadReplies = (threadId) => {
  const [isLoading, setIsLoading] = useState();
  const [replies, setReplies] = useState();
  const showToast = useShowToast();

  useEffect(() => {
    const getReplies = async () => {
      setIsLoading(true);

      try {
        const q = query(
          collection(firestore, "replies"),
          where("threadId", "==", threadId)
        );

        const querySnapshot = await getDocs(q);
        const replies = [];
        querySnapshot.forEach((doc) =>
          replies.push({ ...doc.data(), id: doc.id })
        );
        replies.sort((a, b) => b.createdAt - a.createdAt);
        setReplies(replies);
      } catch (error) {
        showToast("Error", error.message, "error");
      } finally {
        setIsLoading(false);
      }
    };

    getReplies();
  }, [showToast, threadId]);

  return { isLoading, replies };
};

export default useGetThreadReplies;
