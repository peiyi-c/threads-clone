import {
  VStack,
  Flex,
  Box,
  Text,
  Avatar,
  HStack,
  Heading,
  Skeleton,
  SkeletonCircle,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useColors from "../../hooks/useColors";
import useGetProfileById from "../../hooks/useGetProfileById";
import PropTypes from "prop-types";
import ProfileFollowerModal from "./ProfileFollowerModal";

const ProfileCard = ({ userProfile, isLoading }) => {
  const { subText } = useColors();
  const { userProfile: user } = useGetProfileById(
    userProfile?.followers[userProfile?.followers.length - 1] || "no-follower"
  );
  if (isLoading) return <ProfileCardSkeleton />;
  return (
    !isLoading &&
    userProfile && (
      <VStack p={"16px 12px"} alignItems={"flex-start"}>
        <Flex
          w={"full"}
          flexDir={"row"}
          justifyContent={"space-around"}
          gap={0}
        >
          <Box>
            <Heading fontSize={"21px"} lineHeight={9}>
              {userProfile.displayName}
            </Heading>
            <Text lineHeight={5}>{userProfile.username}</Text>
          </Box>
          <Box ml={"auto"}>
            <Avatar size={"lg"} src={userProfile.profilePicURL} />
          </Box>
        </Flex>
        <Text lineHeight={5}>{userProfile.bioDescription}</Text>
        <HStack mt={3} color={subText}>
          {user && <Avatar size={"xs"} src={user?.profilePicURL} />}
          <ProfileFollowerModal userProfile={userProfile} />
          <Link target="_blank" to={userProfile.bioLink}>
            {userProfile.bioLink
              .replace("https://www.", "")
              .replace("http://www.", "")
              .replace("www.", "")}
          </Link>
        </HStack>
      </VStack>
    )
  );
};

export default ProfileCard;

ProfileCard.propTypes = {
  userProfile: PropTypes.object,
  isLoading: PropTypes.bool,
};

// Profile Card Skeleton
const ProfileCardSkeleton = () => {
  return (
    <>
      <VStack p={"16px 12px"} alignItems={"flex-start"}>
        <Flex
          w={"full"}
          flexDir={"row"}
          justifyContent={"space-around"}
          gap={0}
        >
          <Box>
            <Skeleton>
              <Heading height={"21px"} w={"full"}>
                display name
              </Heading>
            </Skeleton>
            <Skeleton mt={2}>
              <Text>username</Text>
            </Skeleton>
          </Box>
          <Box ml={"auto"}>
            <SkeletonCircle size={"64px"} />
          </Box>
        </Flex>
        <Skeleton>
          <Text lineHeight={"21px"} w={"full"}>
            biography description in text and biography description link
          </Text>
        </Skeleton>
        <HStack mt={"10px"}>
          <SkeletonCircle size="10" />
          <Skeleton>
            <Text as={"span"}>followers count</Text>
          </Skeleton>
        </HStack>
      </VStack>
    </>
  );
};
