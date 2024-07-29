import { model, Schema } from "mongoose";
import { ProductProps } from "./product.interface";

const productSchema = new Schema<ProductProps>(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: [{ type: String }],
    category: {
      type: String,
      required: true,
    },
    ratings: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const ProductModel = model<ProductProps>("Product", productSchema);
