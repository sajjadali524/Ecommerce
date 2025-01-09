import express from "express";
import { addProduct, deleteProduct, fetchAllProductUser, fetchProduct, productDetailsUser, updateProduct } from "../controllers/product.controller.js";
import isAuthenticated from "../middlewares/auth.middleware.js";
import hasRole from "../middlewares/checkRole.middleware.js";
const router = express.Router();

// admin
router.post("/add-product", isAuthenticated, hasRole(["admin"]), addProduct);
router.get("/admin/get-product", isAuthenticated, hasRole(["admin"]), fetchProduct);
router.put("/update-product/:id", isAuthenticated, hasRole(["admin"]), updateProduct);
router.delete("/delete-product/:id", isAuthenticated, hasRole(["admin"]), deleteProduct);

// user
router.get("/get-product", isAuthenticated, hasRole(["user"]), fetchAllProductUser);
router.get("/get-product/:id", isAuthenticated, hasRole(["user"]), productDetailsUser);

export default router;