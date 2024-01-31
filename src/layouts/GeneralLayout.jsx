import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { Container } from "@chakra-ui/react";
import Footer from "../components/Footer/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";
import { useEffect } from "react";

const GeneralLayout = () => {
  const { user } = useAuthStore();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const changePage = () => {
      if (!user) {
        if (pathname.startsWith("/@")) {
          navigate(pathname);
          return;
        }
        switch (pathname) {
          case "/":
          case "/search":
          case "/activity":
            navigate("/login");
            break;
        }
      }
    };
    changePage();
  }, [user, navigate, pathname]);

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
