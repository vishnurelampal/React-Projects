import { createSlice } from "@reduxjs/toolkit";
const searchMovieSlice = createSlice({
  name: "searchSlice",
  initialState: {
    searchMovieList: [],
    isSearched: "N",
  },
  reducers: {
    addSearchResults: (state, action) => {
      state.searchMovieList = action.payload;
    },
    clearSearchResult: (state) => {
      state.searchMovieList = [];
    },
    checkIsSearched: (state, action) => {
      state.isSearched = action.payload;
    },
  },
});
export const { addSearchResults, clearSearchResult, checkIsSearched } =
  searchMovieSlice.actions;
export default searchMovieSlice.reducer;
