const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = (userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1d", // Optional: set token expiry
  });
  return token;
};

const verifyToken = (req, res, next) => {
  //   const authHeader = req.headers.authorization;
  const token =
    req.body.token ||
    req.cookies.token ||
    req?.headers?.authorization?.split(" ")[1];

  // Check if token exists in header
  if (!token) {
    // !authHeader || !authHeader.startsWith("Bearer ")
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

    // Attach user ID to request object for further use
    req.user = decoded.userId;

    next(); // proceed to next middleware or route
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = { generateToken, verifyToken };
