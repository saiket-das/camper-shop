import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CartProps = {
  productId: string;
  quantity: number;
  price: number;
}; // Define an interface for price data

const initialState = {
  items: [] as CartProps[],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action: PayloadAction<CartProps>) => {
      const { productId, quantity, price } = action.payload; // Destructure payload
      const selectedProduct = state.items.find(
        (product) => product.productId === productId
      );
      if (!selectedProduct) {
        // If product is not in the cart then add product to cart
        const product: CartProps = {
          ...action.payload,
          quantity: 1,
        };
        state.items.push(product);
        state.totalAmount += quantity * price; // Update total amount
      } else {
        // If product is already in the cart then increase product's quantity
        selectedProduct.quantity += 1;
        state.totalAmount += price; // Update total amount (for existing items)
      }
    },

    removeFromCart: (state, action) => {
      const { productId } = action.payload;
      const existingProduct = state.items.find(
        (item) => item.productId === productId
      );
      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          existingProduct.quantity -= 1; // Reduce quantity

          state.totalAmount -= existingProduct.price; // Assuming you have a price property
        } else {
          // Remove item completely
          state.items = state.items.filter(
            (item) => item.productId !== productId
          );
          state.totalAmount -= existingProduct.price * existingProduct.quantity; // Consider quantity
        }
      }
    },
    clearCart: (state) => ({
      ...state,
      items: [],
      totalAmount: 0,
    }),
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
