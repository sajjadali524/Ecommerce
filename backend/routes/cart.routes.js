import express from "express";
import { addToCart, fetchAllProductToCart, removeProductFromCart } from "../controllers/cart.controller.js";
import isAuthenticated from "../middlewares/auth.middleware.js";
import hasRole from "../middlewares/checkRole.middleware.js";
const router = express.Router();

router.post("/add-to-cart", isAuthenticated, hasRole(["user"]), addToCart);
router.get("/get-all-product", isAuthenticated, hasRole(["user"]), fetchAllProductToCart);
router.delete("/remove-from-cart/:id", isAuthenticated, hasRole(["user"]), removeProductFromCart);

export default router;