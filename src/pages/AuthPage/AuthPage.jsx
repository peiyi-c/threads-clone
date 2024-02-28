import { Flex, Image } from "@chakra-ui/react";
import AuthForm from "../../components/AuthForm/AuthForm";
import bgImage from "../../assets/login-bg.png";
import { Threads } from "../../assets/logos";

const AuthPage = () => {
  return (
    <>
      <Image
        src={bgImage}
        alt="background image"
        position={"absolute"}
        top={0}
        minW={"1785px"}
        display={{ base: "none", lg: "block" }}
        zIndex={"hide"}
      />
      <Flex
        display={{ base: "block", lg: "none" }}
        position={"absolute"}
        top={"5%"}
        left={"50%"}
        transform={"translateX(-50%)"}
        w={"60px"}
      >
        <Threads h={"100%"} w={"100%"} />
      </Flex>

      <Flex
        h={"full"}
        w={"full"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <AuthForm />
      </Flex>
    </>
  );
};

export default AuthPage;
