import { Input } from "@chakra-ui/react";
import { SubmitButton } from "./AuthForm";
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
      <SubmitButton ButtonText={"Log In"} isDisabled={isDisabled} />
    </>
  );
};

export default LogIn;
