import React from "react";
import MovieListContainer from "./MovieListContainer";
import { useSelector } from "react-redux";
function Secondarycontainer() {
  const nowPlayingMovie = useSelector(
    (store) => store.movieSlice?.nowPlayingMovie
  );
  const popularMovies = useSelector((store) => store.movieSlice?.popularMovies);
  const topRatedMovies = useSelector(
    (store) => store.movieSlice?.topRatedMovies
  );
  const upComingMovies = useSelector(
    (store) => store.movieSlice?.upComingMovies
  );

  if (!nowPlayingMovie) return;
  return (
    <div className=" relative z-50 bg-black  ">
      <div className="-mt-72 pl-16 ">
        <MovieListContainer title={"Now Playing"} movies={nowPlayingMovie} />
        <MovieListContainer title={"Popular Movies"} movies={popularMovies} />
        <MovieListContainer title={"Top Rated"} movies={topRatedMovies} />
        <MovieListContainer title={"Upcoming Movies"} movies={upComingMovies} />
      </div>
    </div>
  );
}

export default Secondarycontainer;
