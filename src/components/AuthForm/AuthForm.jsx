import { Button, Container, Heading, Text, Flex, Box } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import UserLogin from "./UserLogin";
import UserSignup from "./UserSignup";
import useColors from "../../hooks/useColors";
import PropTypes from "prop-types";

const AuthForm = () => {
  const { pathname } = useLocation();

  return (
    <Container maxW={"md"}>
      <form>
        {/* headline */}
        <Heading fontSize={"18px"} textAlign={"center"} mb={4}>
          {pathname === "/login" ? "Log In" : "Sign Up"}
        </Heading>
        {/* input fields */}
        {pathname === "/login" ? <UserLogin /> : <UserSignup />}
        {/* switch button */}
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          w={"full"}
          my={4}
          gap={1}
        >
          <Box flex={2} h={"1px"} bg={"gray.100"} />
          <Text mx={1} my={3} color={"blackAlpha.600"}>
            OR
          </Text>
          <Box flex={2} h={"1px"} bg={"gray.100"} />
        </Flex>
        <SwitchButton
          ButtonText={pathname === "/login" ? "Sign Up" : "Log In"}
        />
      </form>
    </Container>
  );
};

export default AuthForm;

const SwitchButton = ({ ButtonText }) => {
  const { pathname } = useLocation();
  const { whiteBlack, blackWhite } = useColors();
  return (
    <Link to={pathname === "/login" ? "/signup" : "/login"}>
      <Button
        h={"full"}
        w={"full"}
        p={3.5}
        size={"lg"}
        variant={"outline"}
        borderRadius={"10px"}
        fontSize={"15px"}
        colorScheme="blackAlpha.500"
        _hover={{
          color: whiteBlack,
          bg: blackWhite,
        }}
      >
        {ButtonText}
      </Button>
    </Link>
  );
};

SwitchButton.propTypes = {
  ButtonText: PropTypes.string.isRequired,
};
