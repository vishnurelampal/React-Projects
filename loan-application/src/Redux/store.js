import { configureStore } from "@reduxjs/toolkit";
import loanDataReducer from "./loanDataSlicer";
const store = configureStore({
  reducer: {
    loanData: loanDataReducer,
  },
});
export default store;
