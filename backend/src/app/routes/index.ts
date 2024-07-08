import { Router } from "express";
import { ProductRoutes } from "../modules/product/product.route";

const router = Router();

const moduleRoute = [
  {
    path: "/product",
    route: ProductRoutes,
  },
];

moduleRoute.forEach((route) => router.use(route.path, route.route));

export default router;
