import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import movieReducer from "./movieslicer";
const appStore = configureStore({
  reducer: {
    user: userSliceReducer,
    movieSlice: movieReducer,
  },
});
export default appStore;
