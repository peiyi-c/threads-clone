import { Box, Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import ProfileCard from "../../components/Profile/ProfileCard";
import ProfileTabs from "../../components/Profile/ProfileTabs";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import useAuthStore from "../../store/authStore";
import { useParams } from "react-router-dom";
import useGetProfileByUsername from "../../hooks/useGetProfileByUsername";
import ProfileEditModal from "../../components/Profile/ProfileEditModal";
import useFollowUser from "../../hooks/useFollowUser";
import useColors from "../../hooks/useColors";

const ProfilePage = () => {
  const { user } = useAuthStore();
  const { ausername } = useParams();
  const username = ausername.slice(1);
  const { isLoading, userProfile } = useGetProfileByUsername(username);
  const { onOpen, isOpen, onClose } = useDisclosure();
  const { handleFollowUser, isFollowing } = useFollowUser(userProfile?.uid);

  const viewOwnProfileAndAuth = user?.username === username;
  const viewOthersProfileAndAuth = user?.username !== userProfile?.username;
  const viewProfileAndUnauth = !user;
  const displayProfileTab =
    viewOwnProfileAndAuth ||
    !userProfile?.isPrivate ||
    (viewOthersProfileAndAuth &&
      userProfile?.isPrivate &&
      user?.followings.includes(userProfile.uid));

  const displayProfilePrivate =
    viewOthersProfileAndAuth &&
    userProfile?.isPrivate &&
    !user?.followings.includes(userProfile.uid);

  const userNotFound = !isLoading && !userProfile;

  const { logo } = useColors();
  if (userNotFound && !viewOwnProfileAndAuth) return <NotFoundPage />;

  return (
    <>
      {/* Profile Card */}
      {<ProfileCard userProfile={userProfile} isLoading={isLoading} />}

      {/* Button */}
      {!viewProfileAndUnauth && (
        <Box my={"12px"}>
          {viewOwnProfileAndAuth && (
            <Button
              onClick={onOpen}
              w={"full"}
              variant={"squareOutline"}
              _active={{
                transform: "scale(0.95)",
                transition: "transform 0.11s ease-in-out",
              }}
              fontSize={"15px"}
            >
              Edit Profile
            </Button>
          )}

          {!isLoading && viewOthersProfileAndAuth && (
            <Flex justifyContent={"center"} gap={"4px"}>
              <Button
                onClick={handleFollowUser}
                w={"full"}
                variant={"squareOutline"}
                _active={{
                  transform: "scale(0.9)",
                  transition: "transform 0.11s ease-in-out",
                }}
                fontSize={"15px"}
              >
                {isFollowing ? "Unfollow" : "Follow"}
              </Button>
              <Button
                w={"full"}
                variant={"squareOutline"}
                _active={{
                  transform: "scale(0.9)",
                  transition: "transform 0.11s ease-in-out",
                }}
                fontSize={"15px"}
                isDisabled
              >
                Mention
              </Button>
            </Flex>
          )}
          {/* {viewProfileAndUnauth && <></>} */}
        </Box>
      )}

      {/* Tabs */}
      {!isLoading && displayProfileTab && <ProfileTabs />}
      {!isLoading && displayProfilePrivate && (
        <Text textAlign={"center"} mt={5} color={logo}>
          This Profile is private.
        </Text>
      )}
      {/* Edit Profile Modal */}
      {viewOwnProfileAndAuth && isOpen && (
        <ProfileEditModal
          onCloseEdit={onClose}
          isOpenEdit={isOpen}
          user={user}
        />
      )}
    </>
  );
};

export default ProfilePage;
