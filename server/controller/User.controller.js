import { generateToken } from "../utils/TokenCreation";

const User = require("../model/User.model");
const bcrypt = require("bcryptjs");

// Sigup a new User

export const signup = async (req, res) => {
  const { fullName, email, password, bio } = req.body;

  try {
    if (!fullName || !email || !password || !bio) {
      return res.status(400).json({
        success: false,
        messages: "All field are required...",
      });
    }

    const user = await User.findOne({ email });

    if (user) {
      return res.status(409).json({
        sucess: false,
        message: "User account already exists",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = await User({
      fullName,
      email,
      password: hashPassword,
      bio,
    });

    newUser.save();

    const token = generateToken(newUser._id);

    return res.status(201).json({
      sucess: true,
      userData: newUser,
      token: token,
      message: "User account created successfully",
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      sucess: false,
      message: "User account created failed",
      error: error,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userData = await User.findOne({ email });

    if (!userData) {
      return res.status(400).json({
        message: "User not registered with this email id",
        error: true,
        success: false,
      });
    }

    const isPasswordCorrect = await bcrypt.compare(password, userData.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({
        success: false,
        message: "Incorrect password",
      });
    }

    const token = generateToken(userData._id);

    return res.status(200).json({
      sucess: true,
      userData: userData,
      token: token,
      message: "Logged successfully",
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      sucess: false,
      message: "Logged failed",
      error: error,
    });
  }
};
