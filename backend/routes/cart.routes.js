import express from "express";
import { addToCart } from "../controllers/cart.controller.js";
import isAuthenticated from "../middlewares/auth.middleware.js";
import hasRole from "../middlewares/checkRole.middleware.js";
const router = express.Router();

router.post("/add-to-cart", isAuthenticated, hasRole(["user"]), addToCart);
export default router;