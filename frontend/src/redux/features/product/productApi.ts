import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: "/product",
        method: "GET",
      }),
    }),

    // <ProductProps[], string>
    getSingleProduct: builder.query({
      query: (id) => ({
        url: `/product/${id}`,
        method: "GET",
      }),
    }),
  }),
  overrideExisting: false, // To avoid overwriting existing endpoints
});

export const { useGetAllProductsQuery, useGetSingleProductQuery } = productApi;
