import React, { useMemo } from "react";
import VideoTitle from "./VideoTitle";
import VideoPlayerContainer from "./VideoPlayerContainer";
import { useSelector } from "react-redux";

function MainContainer() {
  const movies = useSelector((store) => store.movieSlice?.nowPlayingMovie);
  const indexMemo = useMemo(() => {
    if (movies) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      return randomIndex;
    }
  }, [movies]);
  if (!movies) return;

  const movieRandom = movies[0];
  return (
    <div className="relative">
      <VideoPlayerContainer movieSelected={movieRandom} />
      <VideoTitle movieSelected={movieRandom} />
    </div>
  );
}
export default MainContainer;
