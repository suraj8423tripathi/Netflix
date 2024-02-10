import React, { useState } from "react";
import Header from "./Header";

const LogIn = () => {
  const [IsSignInForm, setIsSignInForm] = useState(true);
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="
https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg">
        <h1 className="font-bold text-3xl py-2">
          {IsSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!IsSignInForm ? (
          <input
            type="text"
            placeholder="Name"
            className="p-4 my-4 w-full bg-gray-900"
          />
        ) : null}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-900"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-900"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {IsSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p
          className="py-6 cursor-pointer"
          onClick={() => {
            setIsSignInForm(!IsSignInForm);
          }}
        >
          {IsSignInForm
            ? "New to Netflix? Sign up now."
            : "Already registered? Sign In now."}
        </p>
      </form>
    </div>
  );
};

export default LogIn;
