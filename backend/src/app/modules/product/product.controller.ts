import catchAsync from "../../utils/catchAsync";
import { ProductServices } from "./product.service";

const createProduct = catchAsync(async (req, res, next) => {
  const result = await ProductServices.createProductService(req.body);
  if (!result) {
    console.log("Error");
  }
});

export const ProductControllers = {
  createProduct,
};
