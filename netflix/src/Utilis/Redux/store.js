import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import movieReducer from "./movieslicer";
import gptSliceReducer from "./gptSlice";
import searchSliceReducer from "./searchMovieSlice";
const appStore = configureStore({
  reducer: {
    user: userSliceReducer,
    movieSlice: movieReducer,
    gptSlice: gptSliceReducer,
    searchSlice: searchSliceReducer,
  },
});
export default appStore;
