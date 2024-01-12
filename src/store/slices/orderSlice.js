import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addOrderService,
  getOrderByIdService,
} from "../../services/orderServices";

const initialState = {
  isLoading: false,
  error: null,
  cartOrder: null,
  order: null,
  address: null,
  paymentOption: null,
  selectedOrderId: null,
};

export const addOrder = createAsyncThunk("addOrder", async (body) => {
  try {
    const response = await addOrderService(body);
    return response?.data;
  } catch (error) {
    throw error;
  }
});

export const getOrderById = createAsyncThunk("getOrderById", async (id) => {
  try {
    const response = await getOrderByIdService(id);
    return response;
  } catch (error) {
    throw error;
  }
});

const orderSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setOrder: (state, action) => {
      state.cartOrder = action.payload;
      state.paymentOption = null;
    },
    setOrderAddress: (state, action) => {
      state.address = action.payload;
    },
    clearOrder: (state) => {
      state.cartOrder = null;
      state.address = null;
    },
    setOrderId: (state, action) => {
      state.selectedOrderId = action.payload.id;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addOrder.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addOrder.fulfilled, (state, action) => {
        state.order = action.payload;
        state.isLoading = false;
        state.selectedOrderId = action.payload.id;
      })
      .addCase(addOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(getOrderById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getOrderById.fulfilled, (state, action) => {
        state.order = action.payload;
        state.isLoading = false;
        state.selectedOrderId = action.payload.id;
      })
      .addCase(getOrderById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { setOrder, setOrderAddress, clearOrder, setOrderId } =
  orderSlice.actions;
export default orderSlice.reducer;
