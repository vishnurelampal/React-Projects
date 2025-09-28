import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "./CutsomHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import Secondarycontainer from "./Secondarycontainer";
const Browse = () => {
  useNowPlayingMovies();
  return (
    <div className="flex flex-col gap-5">
      <Header />
      <MainContainer />
      <Secondarycontainer />
    </div>
  );
};

export default Browse;
