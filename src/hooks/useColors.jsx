import { useColorModeValue } from "@chakra-ui/react";

const useColors = () => {
  const whiteBlack = useColorModeValue("#FFFFFF", "#000000");
  const blackWhite = useColorModeValue("#000000", "#FFFFFF");
  const logo = useColorModeValue("#000000", "#F3F5F7");
  const logoSub = useColorModeValue("#B8B8B8", "#4D4D4D");
  const subText = useColorModeValue("#999999", "#777777");
  const avatarBorder1 = useColorModeValue("#00000026", "#f3f5f726");
  const avatarBorder2 = useColorModeValue("transparent", "#101010");

  return {
    whiteBlack,
    blackWhite,
    logo,
    logoSub,
    subText,
    avatarBorder1,
    avatarBorder2,
  };
};

export default useColors;
