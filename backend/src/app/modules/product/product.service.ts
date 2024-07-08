import { ProductProps } from "./product.interface";
import { ProductModel } from "./product.model";

const createProductService = async (payload: ProductProps) => {
  const result = await ProductModel.create(payload);
  return result;
};

export const ProductServices = {
  createProductService,
};
