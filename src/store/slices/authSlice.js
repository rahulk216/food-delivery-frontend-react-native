import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginService } from "../../services/authServices";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setUser, getUser } from "../../utils/utility";

const initialState = {
  isLoading: false,
  accessToken: null,
  error: null,
};

export const login = createAsyncThunk("login", async (credentials) => {
  try {
    const response = await loginService(credentials);
    await setUser({ accessToken: response.accessToken });
    return response;
  } catch (error) {
    throw error;
  }
});

export const validateToken = createAsyncThunk("validatetoken", async () => {
  const result = await AsyncStorage.getItem("accessToken");
  console.log(result, "result");
  return result;
});

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (state) => {
      state.error = null;
      state.accessToken = null;
      AsyncStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(validateToken.fulfilled, (state, action) => {
        state.accessToken = action.payload;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.accessToken = action.payload.accessToken;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});
export const { logout } = loginSlice.actions;
export default loginSlice.reducer;
