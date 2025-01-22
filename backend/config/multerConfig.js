import multer from "multer";

const storage = multer.memoryStorage(); // Use memory storage for cloud uploads
const singleUpload = multer({ 
    storage,
    limits: { fileSize: 5 * 1024 * 1024 } // Optional: limit file size to 5 MB
});

export default singleUpload;