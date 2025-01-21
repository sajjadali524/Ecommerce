import cloudinary from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

// configure cloudinary
cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadFileToCloudinary = (file, resourceType, folderName) => {
    return new Promise((resolve, reject) => {
        const uploadOptions = {
            resource_type: resourceType, // raw for documents, image for images
            folder: folderName,
            public_id: file.originalname, // Using original name to store file with the same name
        };

        cloudinary.uploader.upload_stream(uploadOptions, (error, result) => {
            if (error) {
                return reject(error);
            }
            resolve(result); // File upload result with URL
        }).end(file.buffer); // Upload file buffer
    });
};


export default cloudinary;