import { model, Schema } from "mongoose";
import { OrderProps } from "./order.interface";
import { ORDER_STATUS, OrderStatus } from "./order.constant";

const orderItemSchema = new Schema(
  {
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
  },
  { _id: false }
);

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    deliveryAddress: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

const orderSchema = new Schema<OrderProps>(
  {
    user: userSchema,
    items: [orderItemSchema],
    totalAmount: {
      type: Number,
      required: true,
    },
    orderStatus: {
      type: String,
      enum: OrderStatus,
      default: ORDER_STATUS.Pending,
    },
  },
  {
    timestamps: true,
  }
);

export const OrderModel = model<OrderProps>("Order", orderSchema);
