import express from "express";
import isAuthenticated from "../middlewares/auth.middleware.js";
import hasRole from "../middlewares/checkRole.middleware.js";
import { placeOrder } from "../controllers/order.controller.js";

const router = express.Router();

router.post("/place-order", isAuthenticated, hasRole(["user"]), placeOrder);

export default router;