import PropTypes from "prop-types";
import ActivityCard from "./ActivityCard";
import { Text } from "@chakra-ui/react";
import useColors from "../../hooks/useColors";

const Activities = ({ notifications, select }) => {
  const { subText } = useColors();
  if (notifications && select != "All") {
    notifications = notifications.filter((noti) => noti.type === select);
  }
  if (!notifications.length)
    return (
      <Text
        h={"60svh"}
        textAlign={"center"}
        color={subText}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        No activities yet.
      </Text>
    );
  return notifications.map((notification) => (
    <ActivityCard key={notification.createdAt} notification={notification} />
  ));
};

export default Activities;

Activities.propTypes = {
  notifications: PropTypes.array,
  select: PropTypes.string,
};
