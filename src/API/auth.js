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

export const continueWithGoogle = async () => {
   const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  const user = result.user;

  const fullName = user.displayName || "";
  const [firstName = "", lastName = ""] = fullName.split(" ");
  const token = await user.getIdToken();

  const payload = {
    [`googleId`]: user.uid,
    email: user.email,
    firstName,
    lastName,
    avatar: user.photoURL,
  };

  const response = await api.post(`/auth/google`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const { user: backendUser, token: backendToken } = response.data.data;

  localStorage.setItem("token", backendToken);
  const isOnboarded = Boolean(response?.data.data?.user?.onboarding);
  localStorage.setItem("onBoarded", String(isOnboarded));
  console.log("user data ",backendUser)

  return backendUser;
};

export const continueWithGithub = async () => {
  const provider = new GithubAuthProvider();
  const result = await signInWithPopup(auth, provider);
  const user = result.user;

  // Get GitHub OAuth access token
  const credential = GithubAuthProvider.credentialFromResult(result);
  const accessToken = credential.accessToken;

  // Fetch GitHub profile using token to get the real username (login)
  let githubUsername = "defaultgithub";
  let avatarUrl = user.photoURL;

  try {
    const githubResponse = await fetch("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (githubResponse.ok) {
      const githubData = await githubResponse.json();
      githubUsername = githubData.login || githubUsername;
      avatarUrl = githubData.avatar_url || avatarUrl;
    }
  } catch (error) {
    console.error("Failed to fetch GitHub user data:", error);
  }

  // Get Firebase ID token
  const token = await user.getIdToken();

  const fullName = user.displayName || "";
  const [firstName = "", lastName = ""] = fullName.split(" ");

  const payload = {
    githubId: user.uid,
    email: user.email,
    firstName,
    lastName,
    username: githubUsername,
    avatar: avatarUrl,
  };

  const response = await api.post(`/auth/github`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const { user: backendUser, token: backendToken } = response.data.data;

  localStorage.setItem("token", backendToken);
  const isOnboarded = Boolean(backendUser?.onboarding);
  localStorage.setItem("onBoarded", String(isOnboarded));
  localStorage.setItem("user", JSON.stringify(backendUser));

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
