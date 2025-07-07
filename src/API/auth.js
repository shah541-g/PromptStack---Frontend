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

const api = axios.create({
  baseURL: "http://localhost:3000/api/v1", // full backend base URL
});

const auth = getAuth(app);

export const socialLogin = async (providerName) => {
  const provider =
    providerName === "google"
      ? new GoogleAuthProvider()
      : new GithubAuthProvider();

  const result = await signInWithPopup(auth, provider);
  const user = result.user;

  const fullName = user.displayName || "";
  const [firstName = "", lastName = ""] = fullName.split(" ");

  const token = await user.getIdToken();

  // GitHub-specific: username is available inside providerData
  const username =
    providerName === "github"
      ? user.reloadUserInfo?.screenName || user.providerData[0]?.screenName || ""
      : "";

  const payload = {
    [`${providerName}Id`]: user.uid, // => githubId or googleId
    email: user.email,
    firstName,
    lastName,
    avatar: user.photoURL,
    username, // only for GitHub
  };

  const response = await api.post(`/auth/${providerName}`, payload);

  const { user: backendUser, token: backendToken } = response.data.data;

  localStorage.setItem("promStackToken", backendToken);
  const isOnboarded = Boolean(backendUser?.onboarding);
  localStorage.setItem("onBoarded", String(isOnboarded));

  return backendUser;
};


export const loginWithMail = async ({ email, password }) => {
  return await api.post("/auth/login", { email, password });
};
export const signUpWithMail = async ({
  firstName,
  lastName,
  email,
  password,
}) => {
  return await api.post("/auth/register", {
    firstName,
    lastName,
    email,
    password,
  });
};

export const onBoardingData = async ({ id, bio, userName, avatar }) => {
  return await api.post(`/auth/onBoarding/${id}`, {
    bio,
    userName,
    avatar,
  });
};

export const sendAuthenticationToken = async ({ token }) => {
  try {
    const response = await api.post("/api/firebaseAuthToken", { token });

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
