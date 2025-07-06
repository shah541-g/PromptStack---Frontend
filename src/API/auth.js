import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { app } from "../FireBase/firebaseConfig.js";
import axios from "axios";

const auth = getAuth(app);

export const loginWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

export const loginWithGitHub = () => {
  const provider = new GithubAuthProvider();
  return signInWithPopup(auth, provider);
};

export const loginWithMail = async ({ email, password }) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const sendAuthenticationToken = async ({ token }) => {
  try {
    const response = await axios.post("/api/firebaseAuthToken", { token });

    if (response.status === 200) {
      console.log("Token sent successfully");
    } else {
      console.log("Unexpected response status:", response.status);
    }
  } catch (error) {
    console.error("Failed to send token:", error);
  }
};

export const logoutUser = async () => {
  try {
    await signOut(auth);
    console.log("User logged out");
    // Optionally clear localStorage or redirect
    // localStorage.removeItem("token");
  } catch (error) {
    console.error("Logout error:", error.message);
  }
};


export const onBoardingUser = async ({ formData }) => { 
  try {
    const response = await axios.post("/api/onboarding", formData);
    return response.data;
  } catch (error) {
    console.error("Onboarding failed:", error);
    throw error;
  }
};

