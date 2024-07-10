const AppRoutes = {
  HOME: "/",
  ABOUT_US: "/about-us",
  PRODUCTS: "/products",
  PRODUCT_DETAILS: (productId = ":productId") => `/products/${productId}`,
  CART: "/cart",
  DASHBOARD: "/dashboard",
  CHECKOUT: "/checkout",
  ORDER_SUCCESS: "/order-success",
};

export default AppRoutes;
