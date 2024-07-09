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

export const ProductServices = {
  createProductService,
  getAllProductsService,
};
