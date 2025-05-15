import React, { useState } from "react";
import assets from "../assets/assets";

const LoginPage = () => {
  const [currState, setCurrState] = useState("Sign Up");
  const [isDataSubmitted, setIsDataSubmitted] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center gap-8 sm:justify-evenly 
      max-sm:flex-col backdrop-blur-2xl"
    >
      {/* Left */}
      <img src={assets.logo_big} alt="logo" className="w-[min(30vw, 250px)]" />

      {/* Right  */}
      <form
        className="border-2 bg-white/8 text-white border-gray-500 p-6flex
      flex-col gap-6 rounded-lg shadow-lg"
      >
        <h2 className="font-medium tex-2xl flex justify-between items-center">
          {currState}
          <img
            src={assets.arrow_icon}
            alt="icon"
            className="w-5 cursor-pointer"
          />
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
      </form>
    </div>
  );
};

export default LoginPage;
