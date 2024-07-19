import React, { useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(async (response) => {
        if (response.user) {
          setSuccessMessage(`${response.user.displayName} Login Successfully`);
        }
        console.log(response);
      })
      .catch((error) => {
        setErrorMessage(error);
      });
  };

  return (
    <div className="mx-auto left-0 right-0 cursor-pointer bg-gray-100 h-1/2 border border-gray-200 p-2 my-40 rounded-lg shadow-lg">
      <h1 className="font-bold text-3xl m-3">Login</h1>
      <div onClick={handleGoogleLogin}>
        <img
          src="https://onymos.com/wp-content/uploads/2020/10/google-signin-button.png"
          width={400}
          alt="google"
        />
        <p className="text-center font-bold py-2">Sign in with google</p>
      </div>
      <div className="py-2  text-center">
        <span className="text-red-700">{errorMessage}</span>
        <span className="text-green-700">{successMessage}</span>
      </div>
    </div>
  );
};

export default Login;
