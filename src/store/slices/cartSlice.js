import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
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
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
