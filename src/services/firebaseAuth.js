import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithRedirect, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAatt1maVrZLxipnto6jvv5DvAR1Jetvts",
  authDomain: "stock-portfolio-e92d9.firebaseapp.com",  // ✅ Corrected authDomain
  projectId: "stock-portfolio-e92d9",
  storageBucket: "stock-portfolio-e92d9.appspot.com",
  messagingSenderId: "498607089005",
  appId: "1:498607089005:web:20894b3708576ba5082664",
  measurementId: "G-76B36K0NGE"
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
