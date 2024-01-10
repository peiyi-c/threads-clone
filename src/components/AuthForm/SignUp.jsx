import {
  Flex,
  Input,
  Alert,
  AlertIcon,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import useSignupWithEmailAndPassword from "../../hooks/useSignupWithEmailAndPassword";

const SignUp = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [inputs, setInputs] = useState({
    username: "",
    displayName: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (
      inputs.username.trim(" ") &&
      inputs.displayName.trim(" ") &&
      inputs.email.trim(" ") &&
      inputs.password.trim(" ")
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [inputs.username, inputs.displayName, inputs.email, inputs.password]);

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const { loading, error, signup } = useSignupWithEmailAndPassword();
  return (
    <>
      <Flex w={"full"} flexDir={{ base: "column", md: "row" }}>
        <Input
          onChange={handleChange}
          my={"6px"}
          name="username"
          type="text"
          variant={"auth"}
          placeholder="* Username"
        />
        <Input
          onChange={handleChange}
          my={"6px"}
          name="displayName"
          type="text"
          variant={"auth"}
          placeholder="* Display Name"
          ml={{ base: 0, md: "6px" }}
        />
      </Flex>

      <Input
        onChange={handleChange}
        my={"6px"}
        name="email"
        type="email"
        variant={"auth"}
        placeholder="* E-Mail Adresse"
      />
      <Input
        onChange={handleChange}
        my={"6px"}
        name="password"
        type="password"
        variant={"auth"}
        placeholder="* Password"
      />
      <Button
        onClick={() => signup(inputs)}
        isLoading={loading}
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
        Sign Up
      </Button>
      {error && (
        <Alert status="error" fontSize={13} p={2} mt={2} borderRadius={4}>
          <AlertIcon fontSize={12} />
          {error.message}
        </Alert>
      )}
    </>
  );
};

export default SignUp;
