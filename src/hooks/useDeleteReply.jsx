import { arrayRemove, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { firestore, storage } from "../firebase/firebase";
import { useState } from "react";
import useAuthStore from "../store/authStore";
import useThreadStore from "../store/threadStore";
import useUserProfileStore from "../store/userProfileStore";
import useShowToast from "./useShowToast";

const useDeleteReply = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const { user } = useAuthStore();
  const { deleteReply } = useThreadStore();
  const { removeReply } = useUserProfileStore();

  const showToast = useShowToast();

  const handleDeleteReply = async (reply) => {
    if (isDeleting) return;

    try {
      setIsDeleting(true);

      //  user
      const userRef = doc(firestore, "users", user.uid);

      // delete selected reply
      await deleteDoc(doc(firestore, "replies", reply.id));
      // * when deleting reply under thread
      if (reply?.threadId) {
        // delete images in reply
        if (reply.mediaURLs.length) {
          for (let i = 0; i < reply.mediaURLs.length; i++) {
            const imageRef = ref(
              storage,
              `threads/${reply.threadId}/${reply.id}/${reply.mediaURLs[i].id}`
            );
            await deleteObject(imageRef);
          }
        }
        // update mother thread
        const threadRef = doc(firestore, "threads", reply.threadId);
        await updateDoc(threadRef, {
          replies: arrayRemove(reply.id),
          repliedBy: arrayRemove(reply.createdBy),
        });
        // update user
        await updateDoc(userRef, {
          replies: arrayRemove(reply.threadId),
        });
      }

      // * when deleting reply under reply
      if (reply?.replyId) {
        // delete images in mother reply
        if (reply.mediaURLs.length) {
          for (let i = 0; i < reply.mediaURLs.length; i++) {
            const imageRef = ref(
              storage,
              `replies/${reply.replyId}/${reply.mediaURLs[i].id}`
            );
            await deleteObject(imageRef);
          }
        }
        // update mother reply
        const replyRef = doc(firestore, "replies", reply.replyId);
        await updateDoc(replyRef, {
          replies: arrayRemove(reply.id),
          repliedBy: arrayRemove(reply.createdBy),
        });
        // update user
        await updateDoc(userRef, {
          replies: arrayRemove(reply.replyId),
        });
      }

      // update store
      if (reply?.threadId) {
        deleteReply(reply.threadId, reply.id);
      }
      removeReply(reply.id);

      showToast("Success", "Deleted!", "success");
    } catch (error) {
      showToast("Error", error.message, "error");
    } finally {
      setIsDeleting(false);
    }
  };
  return { isDeleting, handleDeleteReply };
};

export default useDeleteReply;
