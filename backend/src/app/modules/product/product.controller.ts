import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { ProductServices } from "./product.service";
import sendResponse from "../../utils/sendResponse";

const createProduct = catchAsync(async (req, res, next) => {
  const result = await ProductServices.createProductService(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Product created successfully",
    data: result,
  });
});

export const ProductControllers = {
  createProduct,
};
