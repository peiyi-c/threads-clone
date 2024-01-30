/* eslint-disable react/prop-types */
import { Avatar, useColorModeValue } from "@chakra-ui/react";
import useGetProfileById from "../../hooks/useGetProfileById";
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
  const borderOne = useColorModeValue("#00000026", "#f3f5f726");
  const borderTwo = useColorModeValue("transparent", "#101010");
  repliedBy = repliedBy.reverse();
  return (
    <>
      <Avatar
        size="2xs"
        src={useGetProfileById(repliedBy[0]).userProfile?.profilePicURL}
        position={"relative"}
        left={"3px"}
        border={`1.5px solid ${borderOne}`}
        outline={`0.5px solid ${borderTwo}`}
      />
      <Avatar
        size="xs"
        src={useGetProfileById(repliedBy[1]).userProfile?.profilePicURL}
        position={"relative"}
        right={"3px"}
        border={`1.5px solid ${borderOne}`}
        outline={`0.5px solid ${borderTwo}`}
      />
    </>
  );
};

export const AvatarGroup3 = ({ repliedBy }) => {
  const borderOne = useColorModeValue("#00000026", "#f3f5f726");
  const borderTwo = useColorModeValue("transparent", "#101010");
  repliedBy = repliedBy.reverse();
  return (
    <>
      <Avatar
        size="2xs"
        src={useGetProfileById(repliedBy[0]).userProfile?.profilePicURL}
        position={"relative"}
        left={"9px"}
        bottom={"3px"}
        border={`1.5px solid ${borderOne}`}
        outline={`0.5px solid ${borderTwo}`}
      />
      <Avatar
        w={3}
        h={3}
        src={useGetProfileById(repliedBy[1]).userProfile?.profilePicURL}
        position={"relative"}
        top={"14px"}
        left={"5px"}
        border={`1.5px solid ${borderOne}`}
        outline={`0.5px solid ${borderTwo}`}
      />
      <Avatar
        size="xs"
        src={useGetProfileById(repliedBy[2]).userProfile?.profilePicURL}
        bottom={"13px"}
        right={0}
        position={"relative"}
        border={`1.5px solid ${borderOne}`}
        outline={`0.5px solid ${borderTwo}`}
      />
    </>
  );
};
