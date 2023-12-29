import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllProductsService } from "../../services/menuServices";

const initialState = {
  isLoading: false,
  menuList: null,
  error: null,
};

export const getAllMenu = createAsyncThunk("getAllMenu", async () => {
  try {
    const response = await getAllProductsService();
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
        state.menuList = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllMenu.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default menuSlice.reducer;
