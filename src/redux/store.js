import { configureStore } from "@reduxjs/toolkit";
import { foodsApi } from "../api/foodsApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: { [foodsApi.reducerPath]: foodsApi.reducer },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(foodsApi.middleware),
});
setupListeners(store.dispatch);
