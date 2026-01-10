import { createSlice } from "@reduxjs/toolkit";
type UserData = { 
  _id:string
  firstName: string;
  lastName: string;
  gender: string;
  age: string | number;
skills:string[]
emailId:string
}
type InitialState = {
  val: null | UserData;
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
