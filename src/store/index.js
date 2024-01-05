import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";

// reducers
import loginDetails from "./slices/authSlice";
import menuDetails from "./slices/menuSlice";
//persist
import cartDetails from "./slices/cartSlice";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const cartDetail = persistReducer(persistConfig, cartDetails);

export const persistedStore = configureStore({
  reducer: cartDetails,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const reducers = combineReducers({
  loginDetails,
  menuDetails,
  cartDetail,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const getStore = () => store.getState();

export const persistor = persistStore(store);
export { getStore };
