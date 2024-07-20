import React, { useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(async (response) => {
        if (response.user) {
          alert(`Welcome ${response.user.displayName}`);
        }
      })
      .catch((error) => {
        setErrorMessage(error);
      });
  };

  return (
    <div className="mx-4 md:mx-auto left-0 right-0 cursor-pointer w-full md:w-1/4 bg-gray-100 h-1/2 border border-gray-200 p-2 my-40 rounded-lg shadow-lg">
      <h1 className="font-bold text-3xl m-3 text-center">Login</h1>
      <img
        className="w-1/3 mx-auto my-3"
        src="https://static-00.iconduck.com/assets.00/youtube-icon-2048x1450-n77mmhe0.png"
        alt="logo"
      />
      <div onClick={handleGoogleLogin}>
        <img
          className="md:w-full"
          src="https://onymos.com/wp-content/uploads/2020/10/google-signin-button.png"
          alt="google"
        />
        <p className="text-center font-bold py-2">Sign in with google</p>
      </div>
      <span className="text-red-700 py-2  text-center">{errorMessage}</span>
    </div>
  );
};

export default Login;
