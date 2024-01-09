import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  order: [],
  address: null,
  paymentOption: null,
};

export const getAllMenu = createAsyncThunk("getAllMenu", async () => {});

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setOrder: (state, action) => {
      state.order = action.payload;
      state.paymentOption = null;
    },
    setOrderAddress: (state, action) => {
      state.address = action.payload;
    },
  },
});

export const { setOrder, setOrderAddress } = menuSlice.actions;
export default menuSlice.reducer;
