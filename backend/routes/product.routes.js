import express from "express";
import { addProduct, deleteProduct, fetchProduct, updateProduct } from "../controllers/product.controller.js";
import isAuthenticated from "../middlewares/auth.middleware.js";
import hasRole from "../middlewares/checkRole.middleware.js";
const router = express.Router();

router.post("/add-product", isAuthenticated, hasRole(["admin"]), addProduct);
router.get("/get-product", isAuthenticated, hasRole(["admin"]), fetchProduct);
router.put("/update-product/:id", isAuthenticated, hasRole(["admin"]), updateProduct);
router.delete("/delete-product/:id", isAuthenticated, hasRole(["admin"]), deleteProduct);

export default router;