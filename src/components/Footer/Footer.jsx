import { Box } from "@chakra-ui/react";
import Navigation from "../Navigation/Navigation";

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        position: "fixed",
        bottom: 0,
      }}
    >
      <Box h={{ base: "60px", md: "74px" }}>
        <Box display={{ base: "flex", md: "none" }} h={"full"}>
          <Navigation />
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
