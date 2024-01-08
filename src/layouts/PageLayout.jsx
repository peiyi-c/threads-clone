import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const GeneralLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default GeneralLayout;
