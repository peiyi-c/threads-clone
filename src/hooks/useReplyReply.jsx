import { useState } from "react";
import useAuthStore from "../store/authStore";
import useUserProfileStore from "../store/userProfileStore";
import useShowToast from "./useShowToast";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  updateDoc,
} from "firebase/firestore";
import { firestore, storage } from "../firebase/firebase";
import { ref } from "firebase/storage";
import { uploadStrings } from "../utils/uploadStrings";
import { downloadImageURLs } from "../utils/downloadURLs";

const useReplyReply = () => {
  const [isCommenting, setIsCommenting] = useState(false);
  const { user } = useAuthStore();
  const { userProfile, createReply } = useUserProfileStore();
  const showToast = useShowToast();

  const handleReplyReply = async (replyId, text, images) => {
    if (isCommenting) return;
    if (!user) return showToast("Error", "You must login to comment!", "error");

    setIsCommenting(true);
    const subReply = {
      // id: "",
      createdAt: Date.now(),
      createdBy: user.uid,
      replyId,
      text,
      mediaURLs: [],
      // mentioned: [],
      // isPoll: false,
      // pollOptions: [],
      // PollEndsAt: "",
      // whoCanReply: "",
      // likedBy: [],
      // repliedBy: [],
      // replies: [],
      // hideLikes: false,
    };
    try {
      // update firebase
      // ** create subreply (shares the same collection with replies) //
      const subreplyRef = await addDoc(
        collection(firestore, "replies"),
        subReply
      );

      // ** update user //
      const userDocRef = doc(firestore, "users", user.uid);
      await updateDoc(userDocRef, { replies: arrayUnion(subreplyRef.id) });

      // ** update main reply //
      const replyRef = doc(firestore, "replies", replyId);
      await updateDoc(replyRef, {
        repliedBy: user.uid,
        replies: arrayUnion(subreplyRef.id),
      });

      // upload image strings, download image urls
      const imageRefs = images.map((image) =>
        ref(storage, `replies/${replyId}/${image.id}`)
      );
      const selectedFiles = images.map((image) => image.path);
      await uploadStrings(imageRefs, selectedFiles);
      const downloadURLs = await downloadImageURLs(imageRefs);

      // ** update subreply //
      await updateDoc(subreplyRef, {
        id: subreplyRef.id,
        mediaURLs: downloadURLs,
      });

      // update store
      if (userProfile) {
        createReply(replyId);
      }
    } catch (error) {
      showToast("Error", error.message, "error");
    } finally {
      setIsCommenting(false);
    }
  };

  return { isCommenting, handleReplyReply };
};

export default useReplyReply;
