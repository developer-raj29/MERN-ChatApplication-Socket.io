import React, { useState } from "react";
import { useNavigate } from "react-router";
import assets from "../assets/assets";

const ProfilePage = () => {
  const [seletedImg, setSelectedImg] = useState(null);
  const navigate = useNavigate();
  const [name, setName] = useState("Martin Johnson");
  const [bio, setBio] = useState(
    "Hi Everyone, I am Using QuickChat. I am a software engineer and I love coding."
  );

  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div className="min-h-screen bg-cover bg-no-repeat flex items-center justify-center">
      <div
        className="w-5/6 max-w-2xl backdrop-blur-2xl text-gray-300 border-2 border-gray-600 flex items-center justify-between max-sm:flex-col-reverse
      rounded-lg"
      >
        <form
          onSubmit={onSubmitHandler}
          className="flex flex-col gap-5 p-10 flex-1"
        >
          <h3 className="text-lg">Profile Details</h3>
          <label
            htmlFor="avatar"
            className="flex items-center gap-3 cursor-pointer"
          >
            <input
              onChange={(e) => setSelectedImg(e.target.files[0])}
              type="file"
              id="avatar"
              accept=".png .jpg .jpeg"
              hidden
            />
            <img
              src={
                seletedImg
                  ? URL.createObjectURL(seletedImg)
                  : assets.avatar_icon
              }
              className={`w-12 h-12 ${seletedImg && "rounded-full"}`}
              alt=""
            />
            upload profile image
          </label>

          <input
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
            name="name"
            placeholder="Enter your name..."
            className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
          />

          <textarea
            rows={4}
            placeholder="Write profile bio..."
            value={bio}
            name="bio"
            onChange={(e) => setBio(e.target.value)}
            className="p-2 border border-gray-500 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-violet-500"
          ></textarea>

          <button
            type="submit"
            className="bg-gradient-to-b from-purple-400 to-violet-600 text-white p-2 rounded-full text-lg cursor-pointer"
          >
            Save
          </button>
        </form>
        <img
          src={assets.logo_icon}
          alt="icon"
          className="max-w-44 aspect-square rounded-full mx-10 max-sm:mt-10"
        />
      </div>
    </div>
  );
};

export default ProfilePage;
