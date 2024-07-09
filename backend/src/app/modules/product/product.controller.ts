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

// Get a single product by ID
const getSingleProduct = catchAsync(async (req, res, next) => {
  const result = await ProductServices.getSingleProductService(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Get a products by ID successfully!",
    data: result,
  });
});

// Update a product's detail by ID
const updateProduct = catchAsync(async (req, res, next) => {
  const result = await ProductServices.updateProductService(
    req.body,
    req.params.id
  );
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Update a product's details by ID successfully!",
    data: result,
  });
});

// Delete a product by ID
const deleteProduct = catchAsync(async (req, res, next) => {
  const result = await ProductServices.deleteProductService(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Delete a products by ID successfully!",
    data: result,
  });
});

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
