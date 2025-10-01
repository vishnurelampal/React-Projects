import React from "react";
import MovieListContainer from "../SecondarComponents/MovieListContainer";
import { useSelector } from "react-redux";
const GptResultsContainer = () => {
  const searchMovie = useSelector((store) => store.searchSlice.searchMovieList);
  const isSearched = useSelector((store) => store.searchSlice.isSearched);

  if (searchMovie.length === 0 && isSearched === "Y")
    return (
      <div className="absolute top-[40%] w-full px-4 text-white bg-gradient-to-r from-black to-transparent">
        No Results Found
      </div>
    );

  if (isSearched === "Y")
    return (
      <div className="absolute top-[40%] w-full px-4">
        <MovieListContainer title={"Search Results"} movies={searchMovie} />
      </div>
    );
};

export default GptResultsContainer;
