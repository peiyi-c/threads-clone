import { Input, Button, useColorModeValue } from "@chakra-ui/react";

import { useEffect, useState } from "react";

const LogIn = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (inputs.email.trim(" ") && inputs.password.trim(" ")) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [inputs.email, inputs.password]);

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
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
        Log In
      </Button>
    </>
  );
};

export default LogIn;
