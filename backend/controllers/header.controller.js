import { HeaderImage } from "../models/header.model.js";
import cloudinary from "../config/cloudinaryConfig.js";

// upload header image (admin)
export const addHeaderImage = async(req, res) => {
    if(!req.file) {
        return res.status(404).json({message: "No Image found"})
    }
    try {
        const result = await new Promise((res, rej) => {
            const stream = cloudinary.uploader.upload_stream(
                { folder: "Ecommerce/headerBackground"},
                (error, result) => {
                    if(error) {
                        rej(new Error("Cloudinary Upload Failed!"))
                    }else {
                        res(result)
                    }
                }
            );
            stream.end(req.file.buffer);
        });

        const headerImage = new HeaderImage({selectedImage: result.secure_url});
        await headerImage.save();

        return res.status(200).json({message: "file uploaded", headerImage});
    } catch (error) {
        return res.status(500).json({message: "Internal Server error"})
    }
};

// fetch images (user - admin) 
export const fetchHeaderImage = async (req, res) => {
    try {
        const headerImages = await HeaderImage.find();

        if(!headerImages) {
            return res.status(404).json({message: "Images not found"})
        }

        return res.status(200).json({message: "images fetch", headerImages})
    } catch (error) {
        return res.status(500).json({message: "Internal Server error"})
    }
};

// delete images (admin)
export const deleteHeaderImage = async (req, res) => {
    const {id} = req.params;
    try {
        const deleteImage = await HeaderImage.findByIdAndDelete(id);
        if(!deleteImage) {
            return res.status(404).json({message: "Images not found"})
        }

        return res.status(200).json({message: "image deleted", deleteImage})
    } catch (error) {
        return res.status(500).json({message: "Internal Server error"})
    }
};