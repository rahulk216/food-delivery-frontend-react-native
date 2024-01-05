import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllProductsService,
  getAllRestaurants,
} from "../../services/menuServices";

const initialState = {
  isLoading: false,
  menuList: null,
  restaurantList: null,
  error: null,
};

export const getAllMenu = createAsyncThunk("getAllMenu", async () => {
  try {
    //const response = await getAllProductsService();
    const response = await Promise.all([
      getAllProductsService(),
      getAllRestaurants(),
    ]);
    return response;
  } catch (error) {
    throw error;
  }
});

const menuSlice = createSlice({
  name: "menu",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllMenu.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllMenu.fulfilled, (state, action) => {
        state.menuList = action.payload[0];
        state.restaurantList = action.payload[1];
        state.isLoading = false;
      })
      .addCase(getAllMenu.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default menuSlice.reducer;
