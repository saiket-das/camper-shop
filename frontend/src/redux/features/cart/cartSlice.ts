import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductProps } from "../../../types/product.types";

// type CartProductProps = {
//     _id: string;
//     price: string;
//     stock: string;
//   };

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
    addToCart: (state, action: PayloadAction<ProductProps>) => {
      const selectedProduct = state.cart.find(
        (product) => product._id === action.payload._id
      );

      if (!selectedProduct) {
        const product = { ...action.payload, quantity: 1 };
        state.cart.push(product);
      } else {
        selectedProduct.quantity += 1;
        state.cart
          .filter((product) => product._id !== action.payload._id)
          .push(selectedProduct);
      }
    },

    removeFromCart: (state, action) => {
      if (action.payload.quantity > 1) {
        const product = {
          ...action.payload,
          quantity: action.payload.quantity - 1,
        };

        state.cart = state.cart.filter(
          (product) => product._id !== action.payload._id
        );
        state.cart.push(product);
      } else {
        state.cart = state.cart.filter(
          (product) => product._id !== action.payload._id
        );
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
