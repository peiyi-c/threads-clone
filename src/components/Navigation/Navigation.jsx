/* eslint-disable no-unused-vars */
import { Box, Grid, GridItem, Link } from "@chakra-ui/react";
import { Home } from "../../assets/logos";
import { Search } from "../../assets/logos";
import { Create } from "../../assets/logos";
import { Activity } from "../../assets/logos";
import { Profile } from "../../assets/logos";
import { Link as RouterLink } from "react-router-dom";
import { useColorModeValue } from "@chakra-ui/react";
import { useContext } from "react";
import { ContentContext } from "../../contexts/contentContext";

const Navigation = () => {
  const hoverBgColor = useColorModeValue("#0000000a", "#ffffff0d");
  const { content, setContent } = useContext(ContentContext);

  const handleClick = (e) => {
    setContent(
      (content) => e.target?.closest("svg")?.ariaLabel || e.target.title
    );
  };

  return (
    <nav
      onClick={handleClick}
      style={{
        width: "100%",
        height: "100%",
        margin: "auto",
        maxWidth: "620px",
      }}
    >
      <Grid
        templateColumns={"repeat(5,20%)"}
        templateRows={"1fr"}
        w={"full"}
        h={"full"}
        cursor={"pointer"}
      >
        <GridItem
          title="Home"
          _hover={{ bg: `${hoverBgColor}`, borderRadius: "8px" }}
          _active={{
            transform: "scale(0.9)",
            transition: "transform 0.11s ease-in-out",
          }}
          m={"2px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Link to="/" as={RouterLink}>
            <Home />
          </Link>
        </GridItem>

        <GridItem
          title="Search"
          _hover={{ bg: `${hoverBgColor}`, borderRadius: "8px" }}
          _active={{
            transform: "scale(0.9)",
            transition: "transform 0.11s ease-in-out",
          }}
          m={"2px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Link to="/search" as={RouterLink}>
            <Search />
          </Link>
        </GridItem>

        <GridItem
          title="Create"
          _hover={{ bg: `${hoverBgColor}`, borderRadius: "8px" }}
          _active={{
            transform: "scale(0.9)",
            transition: "transform 0.11s ease-in-out",
          }}
          m={"2px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box>
            <Create />
          </Box>
        </GridItem>

        <GridItem
          title="Activity"
          _hover={{ bg: `${hoverBgColor}`, borderRadius: "8px" }}
          _active={{
            transform: "scale(0.9)",
            transition: "transform 0.11s ease-in-out",
          }}
          m={"2px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Link to="/activity" as={RouterLink}>
            <Activity />
          </Link>
        </GridItem>

        <GridItem
          title="Profile"
          _hover={{ bg: `${hoverBgColor}`, borderRadius: "8px" }}
          _active={{
            transform: "scale(0.9)",
            transition: "transform 0.11s ease-in-out",
          }}
          m={"2px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Link to="/@username" as={RouterLink}>
            <Profile />
          </Link>
        </GridItem>
      </Grid>
    </nav>
  );
};

export default Navigation;
