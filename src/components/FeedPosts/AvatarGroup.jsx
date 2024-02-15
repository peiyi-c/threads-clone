import { Avatar } from "@chakra-ui/react";
import useGetProfileById from "../../hooks/useGetProfileById";
import useColors from "../../hooks/useColors";
import PropTypes from "prop-types";

// Avatar groups used in thread and reply

export const AvatarGroup1 = ({ repliedBy }) => {
  return (
    <Avatar
      size="xs"
      src={useGetProfileById(repliedBy[0]).userProfile?.profilePicURL}
    />
  );
};

export const AvatarGroup2 = ({ repliedBy }) => {
  const { avatarBorder1, avatarBorder2 } = useColors();
  return (
    <>
      <Avatar
        size="2xs"
        src={useGetProfileById(repliedBy[0]).userProfile?.profilePicURL}
        position={"relative"}
        left={"3px"}
        border={`1.5px solid ${avatarBorder1}`}
        outline={`0.5px solid ${avatarBorder2}`}
      />
      <Avatar
        size="xs"
        src={useGetProfileById(repliedBy[1]).userProfile?.profilePicURL}
        position={"relative"}
        right={"3px"}
        border={`1.5px solid ${avatarBorder1}`}
        outline={`0.5px solid ${avatarBorder2}`}
      />
    </>
  );
};

export const AvatarGroup3 = ({ repliedBy }) => {
  const { avatarBorder1, avatarBorder2 } = useColors();
  return (
    <>
      <Avatar
        size="2xs"
        src={useGetProfileById(repliedBy[0]).userProfile?.profilePicURL}
        position={"relative"}
        left={"9px"}
        bottom={"3px"}
        border={`1.5px solid ${avatarBorder1}`}
        outline={`0.5px solid ${avatarBorder2}`}
      />
      <Avatar
        w={3}
        h={3}
        src={useGetProfileById(repliedBy[1]).userProfile?.profilePicURL}
        position={"relative"}
        top={"14px"}
        left={"5px"}
        border={`1.5px solid ${avatarBorder1}`}
        outline={`0.5px solid ${avatarBorder2}`}
      />
      <Avatar
        size="xs"
        src={useGetProfileById(repliedBy[2]).userProfile?.profilePicURL}
        bottom={"13px"}
        right={0}
        position={"relative"}
        border={`1.5px solid ${avatarBorder1}`}
        outline={`0.5px solid ${avatarBorder2}`}
      />
    </>
  );
};

AvatarGroup1.propTypes = {
  repliedBy: PropTypes.array.isRequired,
};
AvatarGroup2.propTypes = {
  repliedBy: PropTypes.array.isRequired,
};
AvatarGroup3.propTypes = {
  repliedBy: PropTypes.array.isRequired,
};
