/* eslint-disable react/prop-types */
import {
  VStack,
  Flex,
  Box,
  Text,
  Avatar,
  HStack,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ProfileCardSkeleton from "./ProfileCardSkeleton";

const ProfileCard = ({ user, isLoading }) => {
  const subColor = useColorModeValue("#999999", "#777777");

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
            <Avatar size={"lg"} src={user.profilePicURL} />
          </Box>
        </Flex>
        <Text lineHeight={"21px"}>{user.bioDescription}</Text>
        <HStack mt={"10px"} color={subColor}>
          <Avatar size={"xs"} />
          <Text as={"span"}>
            {user.followers.length}{" "}
            {user.followers.length > 1 ? "Followers" : "Follower"}
            <Text as={"span"}> · </Text>
            <Link to={user.bioLink}>
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
