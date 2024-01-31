import { Box, Grid, GridItem, Button } from "@chakra-ui/react";
import { Back, Threads } from "../../assets/logos";
import Navigation from "../Navigation/Navigation";
import HeaderMenu from "./HeaderMenu";
import useAuthStore from "../../store/authStore";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ContentContext } from "../../contexts/contentContext";

const Header = () => {
  const { user } = useAuthStore();
  const { setContent, content } = useContext(ContentContext);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <header
      style={{
        width: "100%",
        position: "sticky",
        top: 0,
      }}
    >
      <Box h={{ base: "60px", md: "74px" }}>
        <Grid
          templateColumns={"1fr  50vw 1fr"}
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
            onClick={() => setContent("home")}
          >
            <Threads />
          </GridItem>

          <GridItem
            display={{ base: "none", md: "block" }}
            colStart={{ md: 2 }}
            colEnd={{ md: 3 }}
            justifySelf={"stretch"}
          >
            {/* Previous Page Button */}
            {content !== null && (
              <Button
                onClick={goBack}
                display={{ base: "none", md: "block" }}
                variant={"ghost"}
                size={"md"}
                position={"absolute"}
                left={"20%"}
                top={4}
              >
                <Back />
              </Button>
            )}
            {/* Navigation */}
            <Navigation />
          </GridItem>

          {/* Menu or Login Button */}
          <GridItem
            colStart={3}
            colEnd={4}
            justifySelf={"end"}
            alignSelf={"center"}
            pe={"24px"}
          >
            {/* when authUser */}
            {user && <HeaderMenu />}

            {/* when !authUser */}
            {!user && (
              <Link to="/login">
                <Button
                  size={"sm"}
                  color={"white"}
                  bg="blackAlpha.900"
                  _hover={{
                    bg: "blackAlpha.900",
                  }}
                >
                  Log in
                </Button>
              </Link>
            )}
          </GridItem>
        </Grid>
      </Box>
    </header>
  );
};

export default Header;
