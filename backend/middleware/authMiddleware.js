
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
  let token;

  console.log("==================================");
  console.log("Authorization Header:");
  console.log(req.headers.authorization);

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      console.log("Extracted Token:");
      console.log(token);

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      console.log("Decoded:");
      console.log(decoded);

      req.user = await User.findById(decoded.id).select("-password");

      console.log("User:");
      console.log(req.user);

      next();
    } catch (error) {
      console.log("JWT ERROR:");
      console.log(error);

      return res.status(401).json({
        message: "Not authorized, token failed",
      });
    }
  } else {
    return res.status(401).json({
      message: "Not authorized, no token",
    });
  }
};

