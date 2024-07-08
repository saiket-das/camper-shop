import { Router } from "express";
import { ProductValidations } from "./product.validation";
import validateRequest from "../../middlewares/validateRequest";
import { ProductControllers } from "./product.controller";

const router = Router();

// Create a new product
router.post(
  "/",
  validateRequest(ProductValidations.createProductSchema),
  ProductControllers.createProduct
);

export const ProductRoutes = router;
