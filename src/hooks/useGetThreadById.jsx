import { useEffect, useState } from "react";
import useShowToast from "./useShowToast";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const useGetThreadById = (threadId) => {
  const [isLoading, setIsLoading] = useState(true);
  const [thread, setThread] = useState(null);

  const showToast = useShowToast();

  useEffect(() => {
    const getThread = async () => {
      setIsLoading(true);
      setThread(null);
      try {
        const threadRef = await getDoc(doc(firestore, "threads", threadId));
        if (threadRef.exists())
          setThread({ ...threadRef.data(), id: threadId });
      } catch (error) {
        showToast("Error", error.message, "error");
      } finally {
        setIsLoading(false);
      }
    };
    getThread();
  }, [showToast, threadId]);
  return { isLoading, thread };
};

export default useGetThreadById;
