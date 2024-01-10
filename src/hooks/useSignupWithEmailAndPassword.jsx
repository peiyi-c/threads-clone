import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/firebase";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";
import { useNavigate } from "react-router-dom";

const useSignupWithEmailAndPassword = () => {
  const [createUserWithEmailAndPassword, , loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const showToast = useShowToast();
  const { loginUser } = useAuthStore();
  const navigate = useNavigate();

  const signup = async ({ username, displayName, email, password }) => {
    // check empty fields
    if (!username || !displayName || !email || !password) {
      showToast("Error", "Please fill all the fields", "error");
      return;
    }
    // check username field
    const usersRef = collection(firestore, "users");
    const q = query(usersRef, where("username", "==", username));
    const qSnapshot = await getDocs(q);
    if (!qSnapshot.empty) {
      showToast("Error", "Username already exists", "error");
      return;
    }

    try {
      // create new user
      const newUser = await createUserWithEmailAndPassword(email, password);
      if (!newUser && error) {
        showToast("Error", error.message, "error");
        return;
      }
      // put user in database
      if (newUser) {
        const userDoc = {
          uid: newUser.user.uid,
          createdAt: Date.now(),
          email,
          username,
          displayName,
          bioDescription: "",
          profilePicURL: "",
          followers: [],
          followings: [],
          posts: [],
          isPrivate: false,
          isVerified: false,
          threads: [],
          mutes: [],
          replies: [],
          reposts: [],
          quotes: [],
          likes: [],
          hides: [],
          notifications: [],
        };
        await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
        localStorage.setItem("user-info", JSON.stringify(userDoc));
        loginUser(userDoc);
        navigate("/");
      }
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };

  return { loading, error, signup };
};

export default useSignupWithEmailAndPassword;
