import { createSlice } from "@reduxjs/toolkit";
import { calculateTotalPrice } from "../../utils/utility";

const initialState = {
  items: [],
  totalPrice: 0,
  discount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = parseInt(action.payload.id);
      const itemExists = state.items.find((item) => item.id === id);

      if (!itemExists) {
        const { operation, ...value } = action.payload;
        state.items.push(value);
      } else {
        itemExists.qty += 1;
      }
      state.totalPrice = calculateTotalPrice(state.items);
    },
    removeFromCart: (state, action) => {
      const id = parseInt(action.payload.id);
      const itemExists = state.items.find((item) => item.id === id);

      if (itemExists.qty > 1) {
        itemExists.qty -= 1;
      } else {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      }
      state.totalPrice = calculateTotalPrice(state.items);
    },
    addDiscount: (state, action) => {
      state.discount = action.payload;
      state.totalPrice = calculateTotalPrice(state.items, action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart, addDiscount } =
  cartSlice.actions;
export default cartSlice.reducer;
