import { configureStore } from "@reduxjs/toolkit";
import NavBarSlice from "./NavBarSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
const store = configureStore({
  reducer: {
    NavBar: NavBarSlice,
    search: searchSlice,
    chat: chatSlice,
  },
});
export default store;
