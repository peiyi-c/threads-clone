import { useEffect, useState } from "react";
import useAuthStore from "../store/authStore";
import useUserProfileStore from "../store/userProfileStore";
import useShowToast from "./useShowToast";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const useFollowUser = (profileUserId) => {
  const [isUpdating, setIsUpdating] = useState();
  const [isFollowing, setIsFollowing] = useState(false);
  const { user, setUser } = useAuthStore();
  const { userProfile, setUserProfile } = useUserProfileStore();
  const showToast = useShowToast();

  useEffect(() => {
    if (user) setIsFollowing(user?.followings?.includes(profileUserId));
  }, [user, profileUserId]);

  const handleFollowUser = async () => {
    if (profileUserId === user.uid) return;
    setIsUpdating(true);
    try {
      // update data
      const userRef = doc(firestore, "users", user.uid);
      await updateDoc(userRef, {
        followings: isFollowing
          ? arrayRemove(profileUserId)
          : arrayUnion(profileUserId),
      });

      const profileUserRef = doc(firestore, "users", profileUserId);
      await updateDoc(profileUserRef, {
        followers: isFollowing ? arrayRemove(user.uid) : arrayUnion(user.uid),
      });

      // update ui
      if (isFollowing) {
        //unfollow
        setUser({
          ...user,
          followings: user.followings.filter((uid) => uid !== profileUserId),
        });
        if (userProfile && userProfile.uid === profileUserId) {
          setUserProfile({
            ...userProfile,
            followers: userProfile.followers.filter((uid) => uid !== user.uid),
          });
        }
        localStorage.setItem(
          "user-info",
          JSON.stringify({
            ...user,
            followings: user.followings.filter((uid) => uid !== profileUserId),
          })
        );
        showToast("Success", "Unfollowed", "success");
      } else {
        // follow
        setUser({
          ...user,
          followings: [...user.followings, profileUserId],
        });
        if (userProfile && userProfile.uid === profileUserId) {
          setUserProfile({
            ...userProfile,
            followers: [...userProfile.followers, user.uid],
          });
        }
        localStorage.setItem(
          "user-info",
          JSON.stringify({
            ...user,
            followings: [...user.followings, profileUserId],
          })
        );
        setIsFollowing(true);
        showToast("Success", "Following!", "success");
      }
    } catch (error) {
      showToast("Error", error.message, "error");
    } finally {
      setIsUpdating(false);
    }
  };
  return { handleFollowUser, isUpdating, isFollowing };
};

export default useFollowUser;
