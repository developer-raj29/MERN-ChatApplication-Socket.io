import React, { useState } from "react";
import assets from "../assets/assets";

const LoginPage = () => {
  const [currState, setCurrState] = useState("Sign Up");
  const [isDataSubmitted, setIsDataSubmitted] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (currState === "Sign Up" && !isDataSubmitted) {
      setIsDataSubmitted(true);
      return;
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center gap-8 sm:justify-evenly 
      max-sm:flex-col backdrop-blur-2xl"
    >
      {/* Left */}
      <img src={assets.logo_big} alt="logo" className="w-[min(30vw,250px)]" />

      {/* Right  */}
      <form
        onSubmit={onSubmitHandler}
        className="border-2 bg-white/8 text-white border-gray-500 p-6 flex flex-col gap-6 rounded-lg shadow-lg"
      >
        <h2 className="font-medium tex-2xl flex justify-between items-center">
          {currState}
          {isDataSubmitted && (
            <img
              onClick={() => setIsDataSubmitted(false)}
              src={assets.arrow_icon}
              alt="icon"
              className="w-5 cursor-pointer"
            />
          )}
        </h2>

        {currState === "Sign Up" && !isDataSubmitted && (
          <input
            type="text"
            placeholder="Enter your full name"
            name="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="p-2 border border-gray-500 rounded-md focus:outline-none"
            required
          />
        )}

        {!isDataSubmitted && (
          <>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              name="email"
              value={email}
              required
              className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              name="password"
              value={password}
              required
              className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </>
        )}

        {currState === "Sign Up" && isDataSubmitted && (
          <textarea
            onChange={(e) => setBio(e.target.value)}
            value={bio}
            placeholder="Enter your bio....."
            name="bio"
            rows={4}
            className="p-2 resize-none border border-gray-500 rounded-md focus:outline-none focus:ring-indigo-500"
            required
          ></textarea>
        )}

        <button
          type="submit"
          className="bg-gradient-to-r from-purple-400 to-violet-600 text-white py-3 px-4 rounded-md cursor-pointer"
        >
          {currState === "Sign Up" ? "Create Account" : "Login Now"}
        </button>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <input type="checkbox" id="checkbox" />
          <label className="cursor-pointer" htmlFor="checkbox">
            Agree to the terms of use & privacy policy
          </label>
        </div>

        <div>
          {currState === "Sign Up" ? (
            <p
              className="text-sm text-gray-600 cursor-pointer"
              onClick={() => {
                setCurrState("Login");
                setIsDataSubmitted(false);
              }}
            >
              Already have an account?{" "}
              <span className="font-medium text-violet-500 hover:underline">
                Login here
              </span>
            </p>
          ) : (
            <p
              onClick={() => {
                setCurrState("Sign Up");
                setIsDataSubmitted(false);
              }}
              className="text-sm text-gray-500 cursor-pointer"
            >
              Don't have an account?
              <span
                onClick={() => setCurrState("")}
                className="font-medium text-violet-500 cursor-pointer hover:underline"
              >
                Sign Up
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
