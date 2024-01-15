import { Box, Button, Flex } from "@chakra-ui/react";
import ProfileCard from "../../components/Profile/ProfileCard";
import ProfileTabs from "../../components/Profile/ProfileTabs";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import useAuthStore from "../../store/authStore";
import { useParams } from "react-router-dom";
import useGetProfileByUsername from "../../hooks/useGetProfileByUsername";

const ProfilePage = () => {
  const { user } = useAuthStore();
  const { ausername } = useParams();
  const username = ausername.slice(1);
  const { isLoading, userProfile } = useGetProfileByUsername(username);

  const viewOwnProfileAndAuth = user?.username === username;
  const viewOthersProfileAndAuth = user?.username !== userProfile?.username;
  // const viewProfileAndUnauth = !user;
  const userNotFound = !isLoading && !userProfile;

  if (userNotFound && !viewOwnProfileAndAuth) return <NotFoundPage />;
  return (
    <>
      {/* Profile Card */}
      {<ProfileCard user={userProfile} isLoading={isLoading} />}

      {/* Button */}
      <Box my={"12px"}>
        {viewOwnProfileAndAuth && (
          <Button
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
              w={"full"}
              variant={"squareOutline"}
              _active={{
                transform: "scale(0.9)",
                transition: "transform 0.11s ease-in-out",
              }}
              fontSize={"15px"}
            >
              Follow
            </Button>
            <Button
              w={"full"}
              variant={"squareOutline"}
              _active={{
                transform: "scale(0.9)",
                transition: "transform 0.11s ease-in-out",
              }}
              fontSize={"15px"}
            >
              Mention
            </Button>
          </Flex>
        )}
        {/* {viewProfileAndUnauth && <></>} */}
      </Box>

      {/* Tabs */}
      {!isLoading && <ProfileTabs user={userProfile} />}
    </>
  );
};

export default ProfilePage;
