import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: { val: null },
  reducers: {
    AddUser: (state, action) => {
      state.val = action.payload;
    },
    removeUser: (state) => {
      state.val = null;
    },
  },
});
export const { AddUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
