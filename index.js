import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userController from "./routes/user.routes.js";
dotenv.config();

const app = express();

// middleware
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true
}));
app.use(cookieParser());

const PORT = process.env.PORT || 3000;

// api
app.use("/api/v1/user", userController);

app.listen(PORT, () => {
    connectDB();
    console.log(`server is running on PORT ${PORT}`)
});