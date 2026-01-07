import { createSlice } from "@reduxjs/toolkit";
type InitialState = {
  val: null | string;
}
const initialState: InitialState = { val: null };
const userSlice = createSlice({
  name: "user",
  initialState,
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
