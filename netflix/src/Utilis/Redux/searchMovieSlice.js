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
    clearSearchResult: (state) => {
      state.searchMovieList = [];
    },
  },
});
export const { addSearchResults, clearSearchResult } = searchMovieSlice.actions;
export default searchMovieSlice.reducer;
