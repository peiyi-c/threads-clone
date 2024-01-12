import { Outlet } from "react-router-dom";
import useAuthStore from "../store/authStore";
import HomePage from "../pages/HomePage/HomePage";

const PublicRoute = () => {
  const { user } = useAuthStore();
  return <>{user ? <HomePage /> : <Outlet />}</>;
};

export default PublicRoute;
