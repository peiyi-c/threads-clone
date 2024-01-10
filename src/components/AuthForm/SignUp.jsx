import { Flex, Input } from "@chakra-ui/react";
import { SubmitButton } from "./AuthForm";
import { useState } from "react";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    username: "",
    displayName: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
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
      <SubmitButton ButtonText={"Sign Up"} />
    </>
  );
};

export default SignUp;
