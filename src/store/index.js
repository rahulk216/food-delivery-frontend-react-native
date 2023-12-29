import { combineReducers, configureStore } from "@reduxjs/toolkit";

// reducers
import loginDetails from "./slices/authSlice";
import menuDetails from "./slices/menuSlice";

const reducers = combineReducers({
  loginDetails,
  menuDetails,
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
