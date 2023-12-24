import { configureStore, combineReducers } from "@reduxjs/toolkit";

const reducers = combineReducers({});

const store = configureStore({
  reducer: {
    reducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const getStore = () => store.getState();

export default store;
export { getStore };
