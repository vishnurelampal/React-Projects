import { createSlice } from "@reduxjs/toolkit";
const movieSlice = createSlice({
  name: "movieSlice",
  initialState: {
    nowPlayingMovie: null,
    movieTrailer: null,
    popularMovies: null,
    topRatedMovies: null,
    upComingMovies: null,
  },
  reducers: {
    addNowPlayingMovie: (state, action) => {
      state.nowPlayingMovie = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpComingMovies: (state, action) => {
      state.upComingMovies = action.payload;
    },
    clearAllMovies: (state) => {
      state.nowPlayingMovie = null;
      state.movieTrailer = null;
      state.popularMovies = null;
      state.topRatedMovies = null;
      state.upComingMovies = null;
    },
  },
});
export const {
  addNowPlayingMovie,
  addMovieTrailer,
  addPopularMovies,
  addTopRatedMovies,
  addUpComingMovies,
  clearAllMovies,
} = movieSlice.actions;
export default movieSlice.reducer;
