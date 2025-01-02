import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_KEY);
        console.log("Database Connected")
    } catch (error) {
        console.log("Error: ", error)
    }
};

export default connectDB;