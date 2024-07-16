import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartProps = {
  _id: string;
  quantity: number;
  price: string;
  stock: string;
};

type CartStateProps = {
  cart: [] | CartProps[];
};

const initialState: CartStateProps = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action: PayloadAction<CartProps>) => {
      const selectedProduct = state.cart.find(
        (product) => product._id === action.payload._id
      );
      if (!selectedProduct) {
        // If product is not in the cart then add product to cart
        const product = { ...action.payload, quantity: 1 };
        state.cart.push(product);
      } else {
        // If product is already in the cart then increase product's quantity
        selectedProduct.quantity += 1;
      }
    },

    removeFromCart: (state, action) => {
      const { _id } = action.payload;
      const existingProduct = state.cart.find((product) => product._id === _id);
      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          // Reduce quantity
          existingProduct.quantity -= 1;
        } else {
          // Remove item completely
          state.cart = state.cart.filter((item) => item._id !== _id);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
