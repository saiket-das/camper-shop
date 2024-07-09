import { ProductProps } from "./product.interface";
import { ProductModel } from "./product.model";

// Create a new product
const createProductService = async (payload: ProductProps) => {
  const result = await ProductModel.create(payload);
  return result;
};

// Create a new product
const getAllProductsService = async () => {
  const result = await ProductModel.find();
  return result;
};

// Get a product by ID
const getSingleProductService = async (id: string) => {
  const result = await ProductModel.findById({ _id: id });
  return result;
};

// Delete a product by ID
const deleteProductService = async (id: string) => {
  const result = await ProductModel.deleteOne({ _id: id });
  if (result.deletedCount < 1) {
    console.log("Failed to delete");
  }
  return result;
};

export const ProductServices = {
  createProductService,
  getAllProductsService,
  getSingleProductService,
  deleteProductService,
};
