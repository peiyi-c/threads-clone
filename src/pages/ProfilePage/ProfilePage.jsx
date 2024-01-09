import { Box, Button } from "@chakra-ui/react";
import ProfileCard from "../../components/Profile/ProfileCard";
import ProfileTabs from "../../components/Profile/ProfileTabs";

const ProfilePage = () => {
  return (
    <>
      {/* Profile Card */}
      <ProfileCard />

      {/* Button */}
      <Box my={"12px"}>
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

        {/* <Flex justifyContent={"center"} gap={"4px"}>
        <Button
          w={"full"}
          variant={"squareOutline"}
          _active={{
            transform: "scale(0.9)",
            transition: "transform 0.11s ease-in-out",
          }}
          fontSize={"15px"}
        >
          Following
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
      </Flex> */}
      </Box>

      {/* Tabs */}
      <ProfileTabs />
    </>
  );
};

export default ProfilePage;
