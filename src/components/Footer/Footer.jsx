import { Box } from "@chakra-ui/react";
import Navigation from "../Navigation/Navigation";

const Footer = () => {
  return (
    <Box
      w={"full"}
      h={{ base: "60px", md: "74px" }}
      position={"fixed"}
      bottom={0}
      display={{ base: "flex", md: "none" }}
      bg={"inherit"}
    >
      <Navigation />
    </Box>
  );
};

export default Footer;
