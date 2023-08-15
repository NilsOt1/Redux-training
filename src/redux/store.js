import { configureStore } from "@reduxjs/toolkit";
import { foodsApi } from "../api/foodsApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import cartReducer from "./slices";

export const store = configureStore({
  reducer: { [foodsApi.reducerPath]: foodsApi.reducer, cart: cartReducer },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(foodsApi.middleware),
});
setupListeners(store.dispatch);
