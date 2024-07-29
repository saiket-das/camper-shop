import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { ProductModel } from "../product/product.model";
import { OrderProps } from "./order.interface";

import { ProductProps } from "../product/product.interface";
import { OrderModel } from "./order.model";

// Create a new order
const createOrderService = async (payload: OrderProps) => {
  const session = await OrderModel.startSession();

  try {
    session.startTransaction(); //

    // Check and update product quantities
    for (const item of payload.items) {
      const product = (await ProductModel.findById(
        item.productId
      )) as ProductProps;

      // throw error if
      if (!product) {
        throw new AppError(
          httpStatus.NOT_FOUND,
          `Product with ID ${item.productId} not found.`
        );
      }

      if (product.stock < item.quantity) {
        throw new AppError(400, `Insufficient stock for ${product.name}.`);
      }

      // update the product quantity and save to database (transaction - 1)
      product.stock -= item.quantity;
      const updateProductStock = await ProductModel.findByIdAndUpdate(
        product._id,
        {
          stock: product.stock,
        },
        { session }
      );
      if (!updateProductStock) {
        throw new AppError(httpStatus.BAD_REQUEST, "Fail to update stock.");
      }
    }

    // save to new order (transaction - 2)
    const newOrder = await OrderModel.create([payload], { session });
    if (!newOrder.length) {
      throw new AppError(httpStatus.BAD_REQUEST, "Fail to order");
    }

    await session.commitTransaction();
    session.endSession();
    return newOrder;
  } catch (error: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new AppError(httpStatus.BAD_REQUEST, error.message);
  }
};

// Get all order
const getAllOrdersService = async (id: string) => {
  const result = await OrderModel.find();
  if (result.length < 1) {
    throw new AppError(httpStatus.BAD_REQUEST, "No order found!");
  }
  return result;
};

// Delete a order
const deleteOrderService = async (id: string) => {
  const result = await OrderModel.deleteOne({ _id: id });
  if (result.deletedCount < 1) {
    throw new AppError(httpStatus.BAD_REQUEST, "Fail to delete order!");
  }
  return result;
};

export const OrderServices = {
  createOrderService,
  getAllOrdersService,
  deleteOrderService,
};
