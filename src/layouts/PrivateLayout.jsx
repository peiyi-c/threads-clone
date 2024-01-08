import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const PrivateLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default PrivateLayout;
