import { createSlice } from "@reduxjs/toolkit";
const searchMovieSlice = createSlice({
  name: "searchSlice",
  initialState: {
    searchMovieList: [],
  },
  reducers: {
    addSearchResults: (state, action) => {
      state.searchMovieList = action.payload;
    },
  },
});
export const { addSearchResults } = searchMovieSlice.actions;
export default searchMovieSlice.reducer;
