import express from "express";
import isAuthenticated from "../middlewares/auth.middleware.js";
import hasRole from "../middlewares/checkRole.middleware.js";
import { fetchAllOrdersAdmin, fetchMyOrders, placeOrder } from "../controllers/order.controller.js";

const router = express.Router();

router.post("/place-order", isAuthenticated, hasRole(["user"]), placeOrder);
router.get("/get-order", isAuthenticated, hasRole(["user"]), fetchMyOrders);
router.get("/get-all-order", isAuthenticated, hasRole(["user"]), fetchAllOrdersAdmin);

export default router;