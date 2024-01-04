import { Box, Grid, GridItem } from "@chakra-ui/react";
import { Threads } from "../../assets/logos";
import Navigation from "../Navigation/Navigation";
import HeaderMenu from "./HeaderMenu";
const Header = () => {
  return (
    <header
      style={{
        width: "100%",
        position: "sticky",
        top: 0,
        background: "#ffffffd9",
      }}
    >
      <Box h={{ base: "60px", md: "74px" }}>
        <Grid
          templateColumns={"1fr 50vw 1fr"}
          h={"full"}
          w={"full"}
          alignContent={"stretch"}
        >
          <GridItem
            colStart={{ base: 2, md: 1 }}
            colEnd={{ base: 3, md: 2 }}
            alignSelf={"center"}
            justifySelf={{ base: "center", md: "start" }}
            pl={{ md: "24px" }}
          >
            <Threads />
          </GridItem>
          <GridItem
            display={{ base: "none", md: "block" }}
            colStart={{ md: 2 }}
            colEnd={{ md: 3 }}
            justifySelf={"stretch"}
            // px={"70px"}
          >
            <Navigation />
          </GridItem>
          <GridItem
            colStart={3}
            colEnd={4}
            justifySelf={"end"}
            alignSelf={"center"}
            pe={"24px"}
          >
            {/* when authUser */}
            <HeaderMenu />
            {/* when !authUser */}
            {/* <Button
            size={"sm"}
            color={"white"}
            bg="blackAlpha.900"
            _hover={{
              bg: "blackAlpha.900",
            }}
          >
            Log in
          </Button> */}
          </GridItem>
        </Grid>
      </Box>
    </header>
  );
};

export default Header;
