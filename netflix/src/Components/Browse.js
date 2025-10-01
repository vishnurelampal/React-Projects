import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "./CutsomHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import Secondarycontainer from "../Components/SecondarComponents/Secondarycontainer";
import { usePopularMovies } from "./CutsomHooks/usePopularMovies";
import useTopRated from "./CutsomHooks/useToprated";
import useUpComingMovies from "./CutsomHooks/useUpcomingMovies";
import GptMainContainer from "../Components/SerchComponents/GptMainContainer";
import { useDispatch, useSelector } from "react-redux";
import { checkIsSearched } from "../Utilis/Redux/searchMovieSlice";
const Browse = () => {
  const dispatch = useDispatch();
  const isGptflag = useSelector((store) => store.gptSlice.gptFlag);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpComingMovies();
  dispatch(checkIsSearched("N"));

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
