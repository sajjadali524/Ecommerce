import mongoose from "mongoose";

const headerSchema = new mongoose.Schema({
    selectedImage: {
        type: String,
        required: true
    }
}, {timestamps: true});

export const HeaderImage = mongoose.model("headerImage", headerSchema);