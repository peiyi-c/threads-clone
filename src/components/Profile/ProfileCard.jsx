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

const ProfileCard = ({ user, isLoading }) => {
  const { subText } = useColors();
  const showDot = user?.followers?.length > 1 && user?.bioLink;
  const { userProfile } = useGetProfileById(
    user.followers[user.followers.length - 1]
  );
  if (isLoading) return <ProfileCardSkeleton />;

  return (
    !isLoading &&
    user && (
      <VStack p={"16px 12px"} alignItems={"flex-start"}>
        <Flex
          w={"full"}
          flexDir={"row"}
          justifyContent={"space-around"}
          gap={0}
        >
          <Box>
            <Heading fontSize={"21px"} lineHeight={9}>
              {user.displayName}
            </Heading>
            <Text lineHeight={5}>{user.username}</Text>
          </Box>
          <Box ml={"auto"}>
            <Avatar size={"lg"} src={user.profilePicURL} />
          </Box>
        </Flex>
        <Text lineHeight={5}>{user.bioDescription}</Text>
        <HStack mt={3} color={subText}>
          <Avatar
            size={"xs"}
            src={userProfile ? userProfile?.profilePicURL : ""}
          />
          <Text as={"span"}>
            {user?.followers?.length}{" "}
            {user?.followers?.length > 1 ? "Followers" : "Follower"}
            {showDot && <Text as={"span"}> · </Text>}
            <Link target="_blank" to={user.bioLink}>
              {user.bioLink
                .replace("https://www.", "")
                .replace("http://www.", "")
                .replace("www.", "")}
            </Link>
          </Text>
        </HStack>
      </VStack>
    )
  );
};

export default ProfileCard;

ProfileCard.propTypes = {
  user: PropTypes.object,
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
