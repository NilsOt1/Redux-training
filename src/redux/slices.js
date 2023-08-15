import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducer: {
    additem(state, action) {
      state.push(action.payload);
    },
    removeItem(state, action) {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export default cartSlice.reducer;
export const { additem, removeItem } = cartSlice.actions;
