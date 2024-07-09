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

// Get all products
router.get("/", ProductControllers.getAllProducts);

// Get a product by ID
router.get("/:id", ProductControllers.getSingleProduct);

// Delete a product by ID
router.delete("/:id", ProductControllers.deleteProduct);

export const ProductRoutes = router;
