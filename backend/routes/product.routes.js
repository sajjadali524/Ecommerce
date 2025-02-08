import express from "express";
import { addProduct, deleteProduct, fetchAllProductUser, fetchProduct, getAllProducts, getBestSellerProductsOnly, getLatestCollectionProduct, productDetailsUser, updateProduct } from "../controllers/product.controller.js";
import isAuthenticated from "../middlewares/auth.middleware.js";
import hasRole from "../middlewares/checkRole.middleware.js";
import singleUpload from "../config/multerConfig.js";
const router = express.Router();

// admin
router.post("/add-product", isAuthenticated, hasRole(["admin"]), singleUpload.single("productImage"), addProduct);
router.get("/admin/get-product", isAuthenticated, hasRole(["admin"]), fetchProduct);
router.put("/update-product/:id", isAuthenticated, hasRole(["admin"]), updateProduct);
router.delete("/delete-product/:id", isAuthenticated, hasRole(["admin"]), deleteProduct);

// user
router.get("/get-product", isAuthenticated, hasRole(["user"]), fetchAllProductUser);
router.get("/product-detail/:id", productDetailsUser);

//without login
router.get("/get-latestcollection-product", getLatestCollectionProduct);
router.get("/get-bestseller-product", getBestSellerProductsOnly);
router.get("/get-all-products", getAllProducts);

export default router;