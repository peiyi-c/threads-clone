import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { Container } from "@chakra-ui/react";
const GeneralLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Container maxW={["520px", "620px"]}>
          <Outlet />
        </Container>
      </main>
    </>
  );
};

export default GeneralLayout;
