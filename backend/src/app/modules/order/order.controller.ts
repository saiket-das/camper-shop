import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { OrderServices } from "./order.service";

// Create a new order
const createOrder = catchAsync(async (req, res, next) => {
  const result = await OrderServices.createOrderService(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Order created successfully!",
    data: result,
  });
});
export const OrderControllers = {
  createOrder,
};
