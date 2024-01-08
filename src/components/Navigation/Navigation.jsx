/* eslint-disable no-unused-vars */
import { Box, Grid, GridItem, Link } from "@chakra-ui/react";
import { Home } from "../../assets/logos";
import { Search } from "../../assets/logos";
import { Create } from "../../assets/logos";
import { Activity } from "../../assets/logos";
import { Profile } from "../../assets/logos";
import { Link as RouterLink } from "react-router-dom";
import { useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { useContext, useEffect, useMemo } from "react";
import { ContentContext } from "../../contexts/contentContext";
import { useNavigate } from "react-router-dom";
import FeedPostFormModal from "../FeedPosts/FeedPostFormModal";

const Navigation = () => {
  const hoverBgColor = useColorModeValue("#0000000a", "#ffffff0d");
  const { content, setContent } = useContext(ContentContext);
  const { onOpen, isOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const handleNavClick = (e) => {
    let value = e.target?.closest("svg")?.ariaLabel || e.target.title;
    setContent((prevValue) => value);
  };
  useEffect(() => {
    let redirect;
    switch (content) {
      case "Home":
        redirect = "/";
        break;
      case "Search":
      case "Activity":
        redirect = content;
        break;
      case "Create":
        break;
      case "Profile":
        redirect = "@username";
        break;
      default:
        redirect = "/";
    }
    navigate(redirect);
  }, [content, navigate]);

  return (
    <nav
      onClick={handleNavClick}
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
          title="/"
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
          onClick={onOpen}
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
        {isOpen ? (
          <FeedPostFormModal onClosePost={onClose} isOpenPost={isOpen} />
        ) : null}
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
          <Link to="/profile" as={RouterLink}>
            <Profile />
          </Link>
        </GridItem>
      </Grid>
    </nav>
  );
};

export default Navigation;
