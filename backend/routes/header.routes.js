import express from "express";
import { addHeaderImage, deleteHeaderImage, fetchHeaderImage } from "../controllers/header.controller.js";
import isAuthenticated from "../middlewares/auth.middleware.js";
import hasRole from "../middlewares/checkRole.middleware.js";
import singleUpload from "../config/multerConfig.js";
const router = express.Router();

router.post("/upload-background", isAuthenticated, hasRole(["admin"]), singleUpload.single("selectedImage"), addHeaderImage);
router.get("/images", fetchHeaderImage);
router.delete("/delete-image/:id", isAuthenticated, hasRole(["admin"]), deleteHeaderImage);
export default router;