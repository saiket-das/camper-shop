import { z } from "zod";
import { OrderStatus } from "./order.constant";

const orderItemSchema = z.object({
  productId: z.string({ required_error: "Product ID is required." }),
  quantity: z.number().min(1, "Quantity must be at least 1."),
});

const orderSchema = z.object({
  body: z.object({
    items: z.array(orderItemSchema, {
      required_error: "Order items are required.",
    }),
    totalAmount: z.number().min(0, "Total amount must be a positive number."),
    orderStatus: z.nativeEnum(OrderStatus),
  }),
});
