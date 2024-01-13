import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import useAuthStore from "../store/authStore";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const [signOut, loading, error] = useSignOut(auth);
  const { logoutUser } = useAuthStore();
  const navigate = useNavigate();
  const showToast = useToast();

  const logout = async () => {
    try {
      const userLogout = await signOut();
      if (!userLogout) {
        showToast("Error", error.message, "error");
        return;
      }
      localStorage.removeItem("user-info");
      logoutUser();
      navigate("/login");
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };
  return { loading, logout, error };
};

export default useLogout;
