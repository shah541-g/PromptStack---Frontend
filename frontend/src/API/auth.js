import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../FireBase/firebaseConfig.js";
import axios from "axios"


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

export const sendAuthenticationToken=async({token})=>{
    const response = await axios.post(('/api/firebaseAuthToken',{token}))
    if (response) {
        console.log('token send successfully')
    }
    else{
        console.log('token not send ')
    }
}