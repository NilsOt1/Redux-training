import { createSlice, combineReducers } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem(state, action) {
      state.push(action.payload);
    },
    removeItem(state, action) {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    addtoFavorite(state, action) {
      state.push(action.payload);
    },
  },
});

export default combineReducers({
  cart: cartSlice.reducer,
  favorites: favoritesSlice.reducer,
});
export const { addItem, removeItem } = cartSlice.actions;
export const { addtoFavorite } = favoritesSlice.actions;
