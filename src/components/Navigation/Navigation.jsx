/* eslint-disable no-unused-vars */
import { Box, Grid, GridItem, Link } from "@chakra-ui/react";
import { Home } from "../../assets/logos";
import { Search } from "../../assets/logos";
import { Create } from "../../assets/logos";
import { Activity } from "../../assets/logos";
import { Profile } from "../../assets/logos";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import FeedPostFormModal from "../FeedPosts/FeedPostFormModal";
import useAuthStore from "../../store/authStore";
import { useContext } from "react";
import { ContentContext } from "../../contexts/contentContext";

const Navigation = () => {
  const hoverBgColor = useColorModeValue("#0000000a", "#ffffff0d");
  const { onOpen, isOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const { setContent } = useContext(ContentContext);

  const handleNavClick = (e) => {
    let value = e.target?.closest("svg")?.ariaLabel || e.target.title;
    switch (value) {
      case "home":
        navigate("/");
        setContent(value);
        return;
      case "search":
      case "activity":
        navigate(value);
        setContent(value);
        return;
      case "create":
        setContent(value);
        return;
      case "profile":
        navigate("@" + user.username);
        setContent(value);
        return;
    }
  };

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
          <Link>
            <Profile />
          </Link>
        </GridItem>
      </Grid>
    </nav>
  );
};

export default Navigation;
