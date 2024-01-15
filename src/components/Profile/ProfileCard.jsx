/* eslint-disable react/prop-types */
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

const ProfileCard = ({ user, isLoading }) => {
  if (isLoading) return <ProfileCardSkeleton />;
  return (
    !isLoading && (
      <VStack p={"16px 12px"} alignItems={"flex-start"}>
        <Flex
          w={"full"}
          flexDir={"row"}
          justifyContent={"space-around"}
          gap={0}
        >
          <Box>
            <Heading fontSize={"21px"} lineHeight={"30px"}>
              {user.displayName}
            </Heading>
            <Text lineHeight={"21px"}>{user.username}</Text>
          </Box>
          <Box ml={"auto"}>
            <Avatar size={"lg"} />
          </Box>
        </Flex>
        <Text lineHeight={"21px"}>{user.bioDescription}</Text>
        <HStack mt={"10px"}>
          <Avatar size={"xs"} />
          <Text as={"span"}>
            {user.followers.length}{" "}
            {user.followers.length > 1 ? "followers" : "follower"}
          </Text>
        </HStack>
      </VStack>
    )
  );
};

export default ProfileCard;

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
                displayName displayName
              </Heading>
            </Skeleton>
            <Skeleton>
              <Text lineHeight={"21px"}>username</Text>
            </Skeleton>
          </Box>
          <Box ml={"auto"}>
            <SkeletonCircle size={"64px"} />
          </Box>
        </Flex>
        <Skeleton>
          <Text lineHeight={"21px"}>bioDescription</Text>
        </Skeleton>
        <HStack mt={"10px"}>
          <SkeletonCircle size="10" />
          <Skeleton>
            <Text as={"span"}>followers</Text>
          </Skeleton>
        </HStack>
      </VStack>
    </>
  );
};
