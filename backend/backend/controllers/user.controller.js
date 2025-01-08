import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// register user
export const registerUser = async (req, res) => {
    const {first_name, last_name, date_of_birth, gender, phone_number, email, password} = req.body;
    try {
        const existingUser = await User.findOne({email})
        if(existingUser) {
            return res.status(400).json({message: "user already exist"})
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const user = await User.create({first_name, last_name, date_of_birth, gender, phone_number, email, password: hashPassword});
        return res.status(200).json({message: "user register successfully", user});
    } catch (error) {
        console.log(error)
    }
};

// login user
export const loginUser = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email});
        if(!user) {
            return res.status(400).json({message: "Account Not Found"});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(400).json({message: "Email or Password is Incorrect"});
        }

        const token = await jwt.sign({userId: user._id}, process.env.TOKEN_SECRET, {expiresIn: "1d"});
        res.cookie("token", token, {httpOnly: true, maxAge: 24 * 60 * 60 * 1000})
        return res.status(200).json({message: "User LoggedIn Successfully!", user, token});
    } catch (error) {
        console.log(error)
    }
};

// logout user
export const logoutUser = async (req, res) => {
    await res.cookie("token", " ", {httpOnly: true, maxAge:(0)});
    return res.status(200).json({message: "user logout successfully"});
};