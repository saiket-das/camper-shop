import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    postProduct: builder.mutation({
      query: (productData) => ({
        url: "/product",
        method: "POST",
        body: productData,
      }),
    }),

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

export const {
  usePostProductMutation,
  useGetAllProductsQuery,
  useGetSingleProductQuery,
} = productApi;
