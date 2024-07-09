import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { OrderValidatons } from "./order.validation";
import { OrderControllers } from "./order.controller";

const router = Router();

// Create a new order

router.post(
  "/",
  validateRequest(OrderValidatons.orderSchema),
  OrderControllers.createOrder
);

export const OrderRoutes = router;
