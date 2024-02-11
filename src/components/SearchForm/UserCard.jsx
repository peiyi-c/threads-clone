/* eslint-disable react/prop-types */
import {
  Avatar,
  Button,
  Divider,
  HStack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import useFollowUser from "../../hooks/useFollowUser";

const UserCard = ({ user }) => {
  const { handleFollowUser, isFollowing } = useFollowUser(user.uid);

  const borderColor = useColorModeValue("#f5f5f5", "#101010");
  const buttonColor = useColorModeValue("#999999", "#777777");
  const buttonBg = useColorModeValue("#ffffff", "#000000");

  return (
    <>
      <HStack my={5} alignItems={"flex-start"}>
        {/* user image */}
        <Avatar
          w={"36px"}
          h={"36px"}
          src={user.profilePicURL}
          outline={`0.25px solid ${borderColor}`}
        />
        <VStack ml={2} flex={1}>
          <HStack w={"full"} mb={1}>
            <VStack flex={1} alignItems={"flex-start"} gap={0}>
              {/* user display name */}
              <Text as={"span"} fontSize={"15px"} fontWeight={"bold"}>
                {user.displayName}
              </Text>
              {/* user username */}
              <Text fontSize={"15px"} opacity={0.5}>
                {user.username}
              </Text>
              {/* user follower count */}
              {user.followers && (
                <Text
                  mt={2}
                  display={user?.followers?.length === 0 ? "none" : "inline"}
                >
                  {user?.followers?.length > 1
                    ? `${user?.followers?.length} followers`
                    : user?.followers?.length === 1
                    ? `1 follower`
                    : ""}
                </Text>
              )}
            </VStack>
            {/* follow button */}
            {
              <Button
                onClick={handleFollowUser}
                variant={"squareOutline"}
                minW={"6.5rem"}
                isDisabled={isFollowing}
                _disabled={{
                  color: buttonColor,
                  bg: buttonBg,
                }}
                _hover={{
                  color: buttonColor,
                  bg: buttonBg,
                }}
              >
                <Text p={"0 4px"} as={"span"} fontSize={"15px"}>
                  {isFollowing ? "Following" : "Follow"}
                </Text>
              </Button>
            }
          </HStack>
          <Divider orientation="horizontal" />
        </VStack>
      </HStack>
    </>
  );
};

export default UserCard;
