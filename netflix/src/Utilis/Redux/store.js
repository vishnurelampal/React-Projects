import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import movieReducer from "./movieslicer";
import gptSliceReducer from "./gptSlice";
const appStore = configureStore({
  reducer: {
    user: userSliceReducer,
    movieSlice: movieReducer,
    gptSlice: gptSliceReducer,
  },
});
export default appStore;
