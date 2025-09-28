import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "./CutsomHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import Secondarycontainer from "./Secondarycontainer";
import { usePopularMovies } from "./CutsomHooks/usePopularMovies";
import useTopRated from "./CutsomHooks/useToprated";
import useUpComingMovies from "./CutsomHooks/useUpcomingMovies";
import GptMainContainer from "./GptMainContainer";
import { useSelector } from "react-redux";
const Browse = () => {
  const isGptflag = useSelector((store) => store.gptSlice.gptFlag);
  console.log("Browse", isGptflag);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpComingMovies();

  return (
    <div className="flex flex-col ">
      <Header />
      {isGptflag ? (
        <GptMainContainer />
      ) : (
        <>
          <MainContainer />
          <Secondarycontainer />
        </>
      )}
    </div>
  );
};

export default Browse;
