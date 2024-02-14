import { useColorModeValue } from "@chakra-ui/react";

const Colors = () => {
  const whiteBlack = useColorModeValue("#FFFFFF", "#000000");
  const blackWhite = useColorModeValue("#000000", "#FFFFFF");
  return { whiteBlack, blackWhite };
};

export default Colors;
