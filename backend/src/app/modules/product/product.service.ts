import httpStatus from "http-status";
import { ProductProps } from "./product.interface";
import { ProductModel } from "./product.model";
import AppError from "../../errors/AppError";

// Create a new product
const createProductService = async (payload: ProductProps) => {
  const result = await ProductModel.create(payload);
  return result;
};

// Create a new product
const getAllProductsService = async () => {
  const result = await ProductModel.find();
  if (result.length < 1) {
    throw new AppError(httpStatus.NOT_FOUND, "Product not found!");
  }
  return result;
};

// Get a product by ID
const getSingleProductService = async (id: string) => {
  const result = await ProductModel.findByIdAndUpdate({ _id: id });
  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, "Product not foundd!");
  }
  return result;
};

// Update a product's detail by ID
const updateProductService = async (
  payload: Partial<ProductProps>,
  id: string
) => {
  const result = await ProductModel.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Fail to update product's detail!"
    );
  }
  return result;
};

// Delete a product by ID
const deleteProductService = async (id: string) => {
  const result = await ProductModel.deleteOne({ _id: id });
  if (result.deletedCount < 1) {
    throw new AppError(httpStatus.BAD_REQUEST, "Fail to delete product!");
  }
  return result;
};

export const ProductServices = {
  createProductService,
  getAllProductsService,
  getSingleProductService,
  updateProductService,
  deleteProductService,
};
