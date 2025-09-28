import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "./CutsomHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import Secondarycontainer from "./Secondarycontainer";
import { usePopularMovies } from "./CutsomHooks/usePopularMovies";
import useTopRated from "./CutsomHooks/useToprated";
import useUpComingMovies from "./CutsomHooks/useUpcomingMovies";
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpComingMovies();

  return (
    <div className="flex flex-col ">
      <Header />
      <MainContainer />
      <Secondarycontainer />
    </div>
  );
};

export default Browse;
