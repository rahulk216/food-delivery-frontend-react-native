import { configureStore, combineReducers } from "@reduxjs/toolkit";

// reducers
import loginDetails from "./slices/authSlice";

const reducers = combineReducers({
  loginDetails,
});

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const getStore = () => store.getState();

export default store;
export { getStore };
