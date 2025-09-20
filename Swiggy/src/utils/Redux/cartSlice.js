import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    item: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.item.push(action.payload);
    },
    deleteItem: (state, action) => {
      state.item.pop();
    },
    clearItem: (state, action) => {
      state.item.length = 0;
    },
  },
});
export const { addItem, deleteItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;
