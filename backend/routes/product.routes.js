import express from "express";
import { addProduct, deleteProduct, fetchProduct } from "../controllers/product.controller.js";
import isAuthenticated from "../middlewares/auth.middleware.js";
const router = express.Router();

router.post("/add-product", isAuthenticated, addProduct);
router.get("/get-product", isAuthenticated, fetchProduct);
router.delete("/delete-product/:id", isAuthenticated, deleteProduct);

export default router;