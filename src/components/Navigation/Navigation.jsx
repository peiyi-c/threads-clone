/* eslint-disable no-unused-vars */
import { Box, Grid, GridItem, Link } from "@chakra-ui/react";
import { Home } from "../../assets/logos";
import { Search } from "../../assets/logos";
import { Create } from "../../assets/logos";
import { Activity } from "../../assets/logos";
import { Profile } from "../../assets/logos";
import { Link as RouterLink, useLocation } from "react-router-dom";
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
  const location = useLocation();

  const handleNavClick = (e) => {
    let value = e.target?.closest("svg")?.ariaLabel || e.target.title;
    setContent((prevValue) => value);
  };
  useEffect(() => {
    let redirect;
    switch (content) {
      case "home":
        redirect = "/";
        break;
      case "search":
      case "activity":
        redirect = content;
        break;
      case "create":
        break;
      case "profile":
        redirect = "@username";
        break;
      default:
        redirect = location;
    }
    navigate(redirect);
  }, [content, navigate, location]);

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
          title="home"
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
          title="search"
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
          title="create"
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
          title="activity"
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
          title="profile"
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
