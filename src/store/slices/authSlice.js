import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginService,
  getUserDetailsService,
} from "../../services/authServices";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setUser, getUser } from "../../utils/utility";

const initialState = {
  isLoading: false,
  accessToken: null,
  userDetails: null,
  error: null,
};

export const login = createAsyncThunk("login", async (credentials) => {
  try {
    let userDetails = null;
    const response = await loginService(credentials);
    await setUser({ accessToken: response.accessToken });
    if (response) {
      userDetails = await getUserDetailsService({
        token: response.accessToken,
      });
    }
    return { response, userDetails };
  } catch (error) {
    throw error;
  }
});

export const validateToken = createAsyncThunk("validatetoken", async () => {
  const result = await getUser();
  const userDetails =
    result &&
    (await getUserDetailsService({
      token: result,
    }));
  return { result, userDetails };
});

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (state) => {
      state.error = null;
      state.isLoading = false;
      state.accessToken = null;
      AsyncStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(validateToken.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(validateToken.fulfilled, (state, action) => {
        state.accessToken = action.payload.result;
        state.userDetails = action.payload.userDetails;
        state.isLoading = false;
      })
      .addCase(validateToken.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.accessToken = action.payload.response.accessToken;
        state.userDetails = action.payload.userDetails;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});
export const { logout } = loginSlice.actions;
export default loginSlice.reducer;
