import multer from "multer";
import cloudinary from "./cloudinaryConfig.js";
import { CloudinaryStorage } from "multer-storage-cloudinary";

// set up cloudinary storage
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "products",
        allowed_formats: ["jpeg", "png", "jpg"]
    },
});

const upload = storage({storage});

export default upload;