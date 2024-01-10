/* eslint-disable react/prop-types */
import {
  Button,
  Container,
  Heading,
  useColorModeValue,
  Text,
  Flex,
  Box,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import LogIn from "./Login";
import SignUp from "./SignUp";

const AuthForm = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <Container maxW={"md"}>
      <form>
        {/* headline */}
        <Heading fontSize={"18px"} textAlign={"center"} mb={"16px"}>
          {pathname === "/login" ? "Log In" : "Sign Up"}
        </Heading>
        {/* input fields */}
        {pathname === "/login" ? <LogIn /> : <SignUp />}
        {/* switch button */}
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          w={"full"}
          my={4}
          gap={1}
        >
          <Box flex={2} h={"1px"} bg={"gray.100"} />
          <Text mx={"4px"} my={"12px"} color={"blackAlpha.600"}>
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

export const SubmitButton = ({ ButtonText, isDisabled }) => {
  return (
    <Button
      mt={"6px"}
      h={"full"}
      w={"full"}
      size={"lg"}
      variant={"auth"}
      fontSize={"15px"}
      isDisabled={isDisabled}
      _disabled={{
        bg: useColorModeValue("#000000", "#FFFFFF"),
        color: useColorModeValue("#FFFFFF", "#000000"),
        opacity: 0.8,
        _hover: {
          bg: useColorModeValue("#000000", "#FFFFFF"),
          color: useColorModeValue("#FFFFFF", "#000000"),
          opacity: 0.8,
        },
      }}
    >
      {ButtonText}
    </Button>
  );
};

const SwitchButton = ({ ButtonText }) => {
  const { pathname } = useLocation();
  return (
    <Link to={pathname === "/login" ? "/signup" : "/login"}>
      <Button
        h={"full"}
        w={"full"}
        p={"15px"}
        size={"lg"}
        variant={"outline"}
        borderRadius={"10px"}
        fontSize={"15px"}
        colorScheme="blackAlpha.500"
        _hover={{
          color: useColorModeValue("#FFFFFF", "#000000"),
          bg: useColorModeValue("#000000", "#FFFFFF"),
        }}
      >
        {ButtonText}
      </Button>
    </Link>
  );
};
