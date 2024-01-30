import { arrayRemove, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { firestore, storage } from "../firebase/firebase";
import { useState } from "react";
import useAuthStore from "../store/authStore";
import useThreadStore from "../store/threadStore";
import useUserProfileStore from "../store/userProfileStore";
import useShowToast from "./useShowToast";

const useDeleteThread = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const { user } = useAuthStore();
  const { deleteThread } = useThreadStore();
  const { removeThread } = useUserProfileStore();

  const showToast = useShowToast();

  const handleDeleteThread = async (thread) => {
    if (isDeleting) return;

    try {
      setIsDeleting(true);

      // delete images
      if (thread.mediaURLs.length) {
        for (let i = 0; i < thread.mediaURLs.length; i++) {
          const imageRef = ref(
            storage,
            `threads/${thread.id}/${thread.mediaURLs[i].id}`
          );
          await deleteObject(imageRef);
        }
      }
      // delete thread
      await deleteDoc(doc(firestore, "threads", thread.id));

      // update user
      const userRef = doc(firestore, "users", user.uid);
      await updateDoc(userRef, {
        threads: arrayRemove(thread.id),
      });

      // update store
      deleteThread(thread.id);
      removeThread(thread.id);

      showToast("Success", "Deleted!", "success");
    } catch (error) {
      showToast("Error", error.message, "error");
    } finally {
      setIsDeleting(false);
    }
  };
  return { isDeleting, handleDeleteThread };
};

export default useDeleteThread;
