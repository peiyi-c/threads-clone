import { Input, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useLoginWithEmailAndPassword from "../../hooks/useLoginWithEmailAndPassword";
import useColors from "../../hooks/useColors";

const UserLogin = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const { loading, signin } = useLoginWithEmailAndPassword();
  const { whiteBlack, blackWhite } = useColors();

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

  const handleClick = () => {
    signin(inputs);
    setIsDisabled(true);
  };

  return (
    <>
      <Input
        onChange={handleChange}
        my={2}
        name="email"
        type="email"
        variant={"auth"}
        placeholder="* E-Mail Adresse"
        color={blackWhite}
      />
      <Input
        onChange={handleChange}
        my={2}
        name="password"
        type="password"
        variant={"auth"}
        placeholder="* Password"
        color={blackWhite}
      />
      <Button
        onClick={handleClick}
        isLoading={loading}
        mt={2}
        h={"full"}
        w={"full"}
        size={"lg"}
        variant={"auth"}
        fontSize={"15px"}
        isDisabled={isDisabled}
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
        Log In
      </Button>
    </>
  );
};

export default UserLogin;
