import {
  Avatar,
  Divider,
  HStack,
  VStack,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import useGetProfileById from "../../hooks/useGetProfileById";
import { timeAgo } from "../../utils/timeAgo";
import PropTypes from "prop-types";

const ActivityCard = ({ notification }) => {
  const { userId, createdAt, type } = notification;
  const { isLoading, userProfile } = useGetProfileById(userId);
  const navigate = useNavigate();

  const borderColor = useColorModeValue("#f5f5f5", "#101010");
  const style = {
    avatar: {
      outline: `0.25px solid ${borderColor}`,
      cursor: "pointer",
    },
    card: {
      flex: 1,
      alignItems: "flex-start",
      gap: 3,
      cursor: "pointer",
    },
    displayName: {
      fontSize: "15px",
      fontWeight: "bold",
    },
    subText: {
      fontWeight: "normal",
      opacity: 0.5,
    },
  };

  const handleForward = () => {
    navigate(`/@${userProfile?.username}`);
  };

  const displayTypeText = () => {
    switch (type[1]) {
      case "JOIN":
        return "You joined threads";
      default:
        return "";
    }
  };

  if (!isLoading && userProfile)
    return (
      <HStack mx={5} mt={6} alignItems={"flex-start"}>
        {/* user image */}
        <Avatar
          onClick={handleForward}
          size={"md"}
          src={userProfile?.profilePicURL}
          style={style.avatar}
        />
        <VStack ml={2} flex={1}>
          <HStack w={"full"} mb={1}>
            <VStack onClick={handleForward} style={style.card}>
              {/* user display name */}
              <HStack justifyContent={"space-between"}>
                <Text as={"span"} style={style.displayName}>
                  {userProfile.displayName}
                </Text>
                <Text as={"span"} style={style.subText}>
                  {timeAgo(createdAt)}
                </Text>
              </HStack>
              {/* user activity type */}
              <Text as={"span"} style={style.subText}>
                {displayTypeText()}
              </Text>
            </VStack>
          </HStack>
          <Divider orientation="horizontal" />
        </VStack>
      </HStack>
    );
};

export default ActivityCard;

ActivityCard.propTypes = {
  notification: PropTypes.object.isRequired,
};
