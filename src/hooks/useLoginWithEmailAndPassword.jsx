import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/firebase";
import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const useLoginWithEmailAndPassword = () => {
  const [signInWithEmailAndPassword, , loading, error] =
    useSignInWithEmailAndPassword(auth);
  const showToast = useShowToast();
  const navigate = useNavigate();
  const { loginUser } = useAuthStore();

  const signin = async ({ email, password }) => {
    if (!email || !password) {
      return showToast("Error", "Please fill all the fields", "error");
    }
    try {
      const userCred = await signInWithEmailAndPassword(email, password);
      if (!userCred) {
        showToast("Error", error.message, "error");
        return;
      }
      if (userCred) {
        navigate("/");
        const docRef = doc(firestore, "users", userCred.user.uid);
        const docSnap = await getDoc(docRef);

        loginUser(docSnap.data());
        localStorage.setItem("user-info", JSON.stringify(docSnap.data()));
      }
    } catch (error) {
      showToast("Error", error.message, "error");
      return;
    }
  };

  return { loading, error, signin };
};

export default useLoginWithEmailAndPassword;
