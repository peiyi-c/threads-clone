import { Flex, Input, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import useSignupWithEmailAndPassword from "../../hooks/useSignupWithEmailAndPassword";
import useColors from "../../hooks/useColors";

const UserSignup = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [inputs, setInputs] = useState({
    username: "",
    displayName: "",
    email: "",
    password: "",
  });
  const { loading, signup } = useSignupWithEmailAndPassword();
  const { whiteBlack, blackWhite } = useColors();

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
          my={1}
          name="username"
          type="text"
          variant={"auth"}
          placeholder="* Username"
          color={blackWhite}
        />
        <Input
          onChange={handleChange}
          my={1}
          name="displayName"
          type="text"
          variant={"auth"}
          placeholder="* Display Name"
          ml={{ base: 0, md: "6px" }}
          color={blackWhite}
        />
      </Flex>

      <Input
        onChange={handleChange}
        my={1}
        name="email"
        type="email"
        variant={"auth"}
        placeholder="* E-Mail Adresse"
        color={whiteBlack}
      />
      <Input
        onChange={handleChange}
        my={1}
        name="password"
        type="password"
        variant={"auth"}
        placeholder="* Password"
        color={blackWhite}
      />
      <Button
        onClick={handleClick}
        isDisabled={isDisabled}
        isLoading={loading}
        mt={2}
        h={"full"}
        w={"full"}
        size={"lg"}
        variant={"auth"}
        fontSize={"15px"}
        _disabled={{
          bg: blackWhite,
          color: whiteBlack,
          opacity: 0.8,
          _hover: {
            bg: blackWhite,
            color: whiteBlack,
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

export default UserSignup;
