import { useState } from "react";
import useAuthStore from "../store/authStore";
import useUserProfileStore from "../store/userProfileStore";
import useShowToast from "./useShowToast";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { firestore, storage } from "../firebase/firebase";
import { doc, updateDoc } from "firebase/firestore";

const useEditProfile = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  const { user, setUser } = useAuthStore();
  const { setUserProfile } = useUserProfileStore();
  const showToast = useShowToast();

  const editProfile = async (inputs, selectedFile) => {
    if (isUpdating || !user) return;

    setIsUpdating(true);
    const storageRef = ref(storage, `profilePics/${user.uid}`);
    const userDocRef = doc(firestore, "users", user.uid);

    let URL = "";
    try {
      if (selectedFile) {
        await uploadString(storageRef, selectedFile, "data_url");
        URL = await getDownloadURL(storageRef);
      }
      const updatedUser = {
        ...user,
        displayName: inputs.displayName || user.displayName,
        bioDescription: inputs.bioDescription || user.bioDescription,
        bioLink: inputs.bioLink || user.bioLink,
        profilePicURL: URL || user.profilePicURL,
        isPrivate: inputs.isPrivate,
      };

      await updateDoc(userDocRef, updatedUser);
      localStorage.setItem("user-info", JSON.stringify(updatedUser));
      setUser(updatedUser);
      setUserProfile(updatedUser);
    } catch (error) {
      showToast("Error", error.message, "error");
    } finally {
      setIsUpdating(false);
    }
  };

  return { editProfile, isUpdating };
};

export default useEditProfile;
