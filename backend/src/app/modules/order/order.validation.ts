import { z } from "zod";
import { OrderStatus } from "./order.constant";

const orderItemSchema = z.object({
  productId: z.string({ required_error: "Product ID is required!" }),
  quantity: z.number().min(1, "Quantity must be at least 1!"),
});

const userSchema = z.object({
  name: z.string({ required_error: "Username is required!" }),
  email: z.string({ required_error: "Email is required!" }),
  phoneNumber: z.string({ required_error: "Phone number is required!" }),
  deliveryAddress: z.string({
    required_error: "Delivery address is required!",
  }),
});

const orderSchema = z.object({
  body: z.object({
    user: userSchema,
    items: z.array(orderItemSchema, {
      required_error: "Order items are required!",
    }),
    totalAmount: z
      .number({ required_error: "Total amount is required!" })
      .min(0, "Total amount must be a positive number!"),
    orderStatus: z.nativeEnum(OrderStatus).optional(),
  }),
});

export const OrderValidatons = {
  orderSchema,
};
