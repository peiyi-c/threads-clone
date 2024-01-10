import { Flex, Input } from "@chakra-ui/react";
import { SubmitButton } from "./AuthForm";
import { useState, useEffect } from "react";

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
      <SubmitButton ButtonText={"Sign Up"} isDisabled={isDisabled} />
    </>
  );
};

export default SignUp;
