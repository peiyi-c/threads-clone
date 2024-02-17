import { useEffect, useState } from "react";
import useShowToast from "./useShowToast";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const useGetReplyById = (replyId) => {
  const [isLoading, setIsLoading] = useState(true);
  const [reply, setReply] = useState(null);

  const showToast = useShowToast();

  useEffect(() => {
    const getThread = async () => {
      setIsLoading(true);
      setReply(null);
      try {
        const replyRef = await getDoc(doc(firestore, "replies", replyId));
        if (replyRef.exists()) setReply({ ...replyRef.data(), id: replyId });
      } catch (error) {
        showToast("Error", error.message, "error");
      } finally {
        setIsLoading(false);
      }
    };
    getThread();
  }, [showToast, replyId]);
  return { isLoading, reply };
};

export default useGetReplyById;
