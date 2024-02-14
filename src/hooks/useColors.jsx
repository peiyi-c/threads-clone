import { useColorModeValue } from "@chakra-ui/react";

const useColors = () => {
  const whiteBlack = useColorModeValue("#FFFFFF", "#000000");
  const blackWhite = useColorModeValue("#000000", "#FFFFFF");
  const logo = useColorModeValue("#000000", "#F3F5F7");

  return { whiteBlack, blackWhite, logo };
};

export default useColors;
