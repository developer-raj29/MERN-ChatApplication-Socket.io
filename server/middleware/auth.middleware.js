const User = require("../model/User.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();

export const auth = async (req, res, next) => {
  //   const authHeader = req.headers.authorization;
  const token =
    req.body.token ||
    req.cookies.token ||
    req?.headers?.authorization?.split(" ")[1];

  // Check if token exists in header
  if (!token) {
    return res.status(401).json({ message: "Token missing" });
  }

  try {
    // Verify token using secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return response.status(401).json({
        success: false,
        message: "Unauthorized access ❌",
      });
    }

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(409).json({
        success: false,
        message: "User not found",
      });
    }

    req.user = user;

    next(); // proceed to next middleware or route
  } catch (error) {
    console.error(error.message);
    return res.status(401).json({
      success: false,
      message: "Unauthorized user",
    });
  }
};
