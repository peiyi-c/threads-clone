import { Outlet, Navigate } from "react-router-dom";
import useAuthStore from "../store/authStore";

const PublicRoute = () => {
  const { user } = useAuthStore();
  return <>{user ? <Navigate to="/" /> : <Outlet />}</>;
};

export default PublicRoute;
