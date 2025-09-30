import React, { useMemo } from "react";
import VideoTitle from "./VideoTitle";
import VideoPlayerContainer from "./VideoPlayerContainer";
import { useDispatch, useSelector } from "react-redux";
import { clearSearchResult } from "../Utilis/Redux/searchMovieSlice";
const randomIndex = Math.floor(Math.random() * 15);
function MainContainer() {
  const movies = useSelector((store) => store.movieSlice?.nowPlayingMovie);
  const dispatch = useDispatch();
  dispatch(clearSearchResult());
  if (!movies) return;
  const movieRandom = movies[randomIndex] ? movies[randomIndex] : movies[0];
  return (
    <div className="relative top-0">
      <VideoPlayerContainer movieSelected={movieRandom} />
      <VideoTitle movieSelected={movieRandom} />
    </div>
  );
}
export default MainContainer;
