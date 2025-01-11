import express from "express";
import isAuthenticated from "../middlewares/auth.middleware.js";
import hasRole from "../middlewares/checkRole.middleware.js";
import { deleteOrderFromCart, fetchAllOrdersAdmin, fetchMyOrders, placeOrder, updateOrderStatus } from "../controllers/order.controller.js";

const router = express.Router();

// user
router.post("/place-order", isAuthenticated, hasRole(["user"]), placeOrder);
router.get("/get-order", isAuthenticated, hasRole(["user"]), fetchMyOrders);
router.delete("/delete-order/:id", isAuthenticated, hasRole(["user"]), deleteOrderFromCart);

 // admin
router.get("/get-all-order", isAuthenticated, hasRole(["user"]), fetchAllOrdersAdmin);
router.patch("/update-order/:id", isAuthenticated, hasRole(["admin"]), updateOrderStatus);

export default router;