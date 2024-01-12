import { Outlet, Navigate } from "react-router-dom";
import useAuthStore from "../store/authStore";

const PrivateRoute = () => {
  const { user } = useAuthStore();
  return <>{user ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default PrivateRoute;
