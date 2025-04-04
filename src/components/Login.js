import React, { useState } from "react";
import { getAuth, signInWithPopup } from "firebase/auth";
import { provider } from "../services/firebaseAuth";

const Login = () => {
  const [flipped, setFlipped] = useState(false);
  const auth = getAuth();

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      console.log("User signed in successfully");
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{ perspective: "1500px", backgroundColor: "#dbeafe" }} // Tailwind's blue-100 hex
    >
      <div
        className="relative w-80 h-64"
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
      >
        <div
          className={`relative w-full h-full transition-transform duration-700 ease-in-out ${
            flipped ? "transform rotate-y-180" : "transform rotate-y-0"
          }`}
          style={{
            transformStyle: "preserve-3d",
            transition: "transform 0.7s ease-in-out",
          }}
        >
          {/* Front Side */}
          <div
            className="absolute w-full h-full bg-white shadow-lg rounded-xl p-6 grid gap-4 content-center"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <h2 className="text-xl font-semibold text-gray-700 text-center">
              Sign In
            </h2>

            <div className="grid gap-2">
              <button
                onClick={handleGoogleLogin}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
              >
                Continue with Google
              </button>
            </div>
          </div>

          {/* Back Side */}
          <div
            className="absolute w-full h-full rounded-xl overflow-hidden text-white transform rotate-y-180"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              backgroundImage:
                'url("https://images.unsplash.com/photo-1554224154-22dec7ec8818?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="w-full h-full backdrop-blur-md bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-12 py-10 rounded-xl">
              <h2 className="text-3xl font-bold drop-shadow-lg text-yellow-300">
                Welcome to StockTrack
              </h2>
              <p className="text-lg mt-6 drop-shadow-md text-yellow-200">
                Track. Analyze. Grow your portfolio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

