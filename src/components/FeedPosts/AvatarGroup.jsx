import { Avatar, useColorModeValue } from "@chakra-ui/react";
// Avatar groups used in thread and reply

export const AvatarGroup2 = () => {
  const borderOne = useColorModeValue("#00000026", "#f3f5f726");
  const borderTwo = useColorModeValue("transparent", "#101010");
  return (
    <>
      <Avatar
        size="2xs"
        src=""
        position={"relative"}
        left={"3px"}
        border={`1.5px solid ${borderOne}`}
        outline={`0.5px solid ${borderTwo}`}
      />
      <Avatar
        size="xs"
        src=""
        position={"relative"}
        right={"3px"}
        border={`1.5px solid ${borderOne}`}
        outline={`0.5px solid ${borderTwo}`}
      />
    </>
  );
};

export const AvatarGroup3 = () => {
  const borderOne = useColorModeValue("#00000026", "#f3f5f726");
  const borderTwo = useColorModeValue("transparent", "#101010");
  return (
    <>
      <Avatar
        size="2xs"
        src=""
        position={"relative"}
        left={"9px"}
        bottom={"3px"}
        border={`1.5px solid ${borderOne}`}
        outline={`0.5px solid ${borderTwo}`}
      />
      <Avatar
        w={3}
        h={3}
        src=""
        position={"relative"}
        top={"14px"}
        left={"5px"}
        border={`1.5px solid ${borderOne}`}
        outline={`0.5px solid ${borderTwo}`}
      />
      <Avatar
        size="xs"
        src=""
        bottom={"13px"}
        right={0}
        position={"relative"}
        border={`1.5px solid ${borderOne}`}
        outline={`0.5px solid ${borderTwo}`}
      />
    </>
  );
};
