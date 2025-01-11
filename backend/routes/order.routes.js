import express from "express";
import isAuthenticated from "../middlewares/auth.middleware.js";
import hasRole from "../middlewares/checkRole.middleware.js";
import { fetchAllOrdersAdmin, fetchMyOrders, placeOrder, updateOrderStatus } from "../controllers/order.controller.js";

const router = express.Router();

// user
router.post("/place-order", isAuthenticated, hasRole(["user"]), placeOrder);
router.get("/get-order", isAuthenticated, hasRole(["user"]), fetchMyOrders);

 // admin
router.get("/get-all-order", isAuthenticated, hasRole(["admin"]), fetchAllOrdersAdmin);
router.patch("/update-order/:id", isAuthenticated, hasRole(["admin"]), updateOrderStatus);

export default router;