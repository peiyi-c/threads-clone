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
import useColors from "../../hooks/useColors";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const UserCard = ({ profile }) => {
  const { handleFollowUser, isFollowing } = useFollowUser(profile.uid);
  const { whiteBlack, subText } = useColors();
  const borderColor = useColorModeValue("#f5f5f5", "#101010");
  const followeLength = profile?.followers?.length;
  const navigate = useNavigate();

  const handleForward = () => {
    navigate(`/@${profile?.username}`);
  };

  return (
    <HStack my={5} alignItems={"flex-start"}>
      {/* user image */}
      <Avatar
        onClick={handleForward}
        w={"36px"}
        h={"36px"}
        src={profile.profilePicURL}
        outline={`0.25px solid ${borderColor}`}
      />
      <VStack ml={2} flex={1}>
        <HStack w={"full"} mb={1}>
          <VStack
            flex={1}
            alignItems={"flex-start"}
            gap={0}
            onClick={handleForward}
          >
            {/* user display name */}
            <Text as={"span"} fontSize={"15px"} fontWeight={"bold"}>
              {profile.displayName}
            </Text>
            {/* user username */}
            <Text fontSize={"15px"} opacity={0.5}>
              {profile.username}
            </Text>
            {/* user follower count */}
            {profile.followers && (
              <Text mt={2} display={followeLength === 0 ? "none" : "inline"}>
                {followeLength > 1
                  ? `${followeLength} followers`
                  : followeLength === 1
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
              color={isFollowing ? subText : "inherit"}
              bg={isFollowing ? whiteBlack : "inherit"}
              _hover={{
                bg: whiteBlack,
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
  );
};

export default UserCard;

UserCard.propTypes = {
  profile: PropTypes.object.isRequired,
};
