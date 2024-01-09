import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { Container } from "@chakra-ui/react";
import Footer from "../components/Footer/Footer";
const GeneralLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Container maxW={["520px", "620px"]}>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default GeneralLayout;
