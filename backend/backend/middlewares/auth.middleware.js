import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
  const token = req.cookies.token;
  try {

    if (!token) {
      return res.status(404).json({ message: "Unauthorized User" });
    }

    const decode = jwt.verify(token, process.env.TOKEN_SECRET);
    req.userId = decode.userId;
    next();

  } catch (error) {
    console.log(error);
  }
};

export default isAuthenticated;