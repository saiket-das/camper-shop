import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { ProductServices } from "./product.service";
import sendResponse from "../../utils/sendResponse";

// Create a new product
const createProduct = catchAsync(async (req, res, next) => {
  const result = await ProductServices.createProductService(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Product created successfully!",
    data: result,
  });
});

// Get all products
const getAllProducts = catchAsync(async (req, res, next) => {
  const result = await ProductServices.getAllProductsService();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Get all products successfully!",
    data: result,
  });
});

export const ProductControllers = {
  createProduct,
  getAllProducts,
};
