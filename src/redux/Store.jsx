import { configureStore } from "@reduxjs/toolkit";
import { starshipsApi } from "./slices/apiSlice";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [starshipsApi.reducerPath]: starshipsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(starshipsApi.middleware),
});

export default store;
