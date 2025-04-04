import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithRedirect, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "api_key",
  authDomain: "auth_Domain",  // ✅ Corrected authDomain
  projectId: "project_id",
  storageBucket: "storage_Bucket",
  messagingSenderId: "messaging_sender_id",
  appId: "app_id",
  measurementId: "measurement_id"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Function to handle Google Sign-in (Call this inside a button)
const handleGoogleLogin = () => {
  signInWithRedirect(auth, provider);
};

export { auth, provider, signInWithPopup, handleGoogleLogin };
