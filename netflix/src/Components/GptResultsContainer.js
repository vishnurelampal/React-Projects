import React from "react";
import MovieListContainer from "./MovieListContainer";
import { useSelector } from "react-redux";
const GptResultsContainer = () => {
  const searchMovie = useSelector((store) => store.searchSlice.searchMovieList);
  if (searchMovie.length === 0)
    return (
      <div className="absolute top-[40%] w-full px-4 text-white bg-gradient-to-r from-black to-transparent">
        No Results Found
      </div>
    );
  console.log(searchMovie);
  return (
    <div className="absolute top-[40%] w-full px-4">
      <MovieListContainer title={"Search Results"} movies={searchMovie} />
    </div>
  );
};

export default GptResultsContainer;
