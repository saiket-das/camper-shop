import { createBrowserRouter } from "react-router-dom";
import Products from "../pages/Products/Products";
import AboutUs from "../pages/AboutUs/AboutUs";
import Cart from "../pages/Cart/Cart";
import AppRoutes from "../utils/AppRoutes";
import Home from "../pages/Home/Home";
import MainLayout from "../components/layout/MainLayout";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import NotFound from "../pages/NotFound/NotFound";
import Dashbaord from "../pages/Dashboard/Dashbaord";

const router = createBrowserRouter([
  {
    path: AppRoutes.HOME,
    element: <MainLayout />,
    children: [
      {
        path: AppRoutes.HOME,
        element: <Home />,
      },
      {
        path: AppRoutes.PRODUCTS,
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },

      {
        path: AppRoutes.ABOUT_US,
        element: <AboutUs />,
      },
      {
        path: AppRoutes.DASHBOARD,
        element: <Dashbaord />,
      },
      {
        path: AppRoutes.CART,
        element: <Cart />,
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
