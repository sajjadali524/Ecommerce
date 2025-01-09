import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

const isAuthenticated = async (req, res, next) => {
  const token = req.cookies.token;
  try {

    if (!token) {
      return res.status(404).json({ message: "Unauthorized User" });
    }

    const decode = jwt.verify(token, process.env.TOKEN_SECRET);
    const user = await User.findById(decode.userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = { id: user._id, role: user.role };
    next();

  } catch (error) {
    return res.status(500).json({message: "Internal Server Error", error})
  }
};

export default isAuthenticated;