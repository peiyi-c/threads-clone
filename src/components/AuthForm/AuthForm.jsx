/* eslint-disable react/prop-types */
import {
  Button,
  Container,
  Heading,
  Input,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const AuthForm = () => {
  const location = useLocation();
  return (
    <Container maxW={"md"}>
      <form>
        <Heading fontSize={"18px"} textAlign={"center"} mb={"16px"}>
          {location === "login" ? "Log In" : "Sign Up"}
        </Heading>
        <Input
          my={"6px"}
          type="email"
          variant={"login"}
          placeholder="* E-Mail Adresse"
        />
        <Input
          my={"6px"}
          type="password"
          variant={"login"}
          placeholder="* Password"
        />
        <MainButton ButtonText={location === "login" ? "Log In" : "Sign Up"} />
        <Text textAlign={"center"} my={"12px"}>
          or
        </Text>
        <SubButton ButtonText={location === "login" ? "Sign Up" : "Log In"} />
      </form>
    </Container>
  );
};

export default AuthForm;

const MainButton = ({ ButtonText }) => {
  return (
    <Button
      mt={"6px"}
      h={"full"}
      w={"full"}
      size={"lg"}
      variant={"login"}
      fontSize={"15px"}
      isDisabled
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

const SubButton = ({ ButtonText }) => {
  return (
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
  );
};
