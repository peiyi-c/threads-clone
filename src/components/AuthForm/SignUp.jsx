import { Flex, Input, Button, useColorModeValue } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import useSignupWithEmailAndPassword from "../../hooks/useSignupWithEmailAndPassword";

const Signup = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [inputs, setInputs] = useState({
    username: "",
    displayName: "",
    email: "",
    password: "",
  });
  const { loading, signup } = useSignupWithEmailAndPassword();

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
  const handleClick = () => {
    signup(inputs);
    setIsDisabled(true);
  };
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
        onClick={handleClick}
        isDisabled={isDisabled}
        isLoading={loading}
        mt={"6px"}
        h={"full"}
        w={"full"}
        size={"lg"}
        variant={"auth"}
        fontSize={"15px"}
        _disabled={{
          bg: useColorModeValue("#000000", "#FFFFFF"),
          color: useColorModeValue("#FFFFFF", "#000000"),
          opacity: 0.8,
          _hover: {
            bg: useColorModeValue("#000000", "#FFFFFF"),
            color: useColorModeValue("#FFFFFF", "#000000"),
            opacity: 0.8,
            cursor: "not-allowed",
          },
        }}
      >
        Sign Up
      </Button>
    </>
  );
};

export default Signup;
