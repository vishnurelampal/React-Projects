import React from "react";
import useTrailerPlaying from "./CutsomHooks/useTrailerPlaying";
import { useSelector } from "react-redux";
const VideoPlayerContainer = ({ movieSelected }) => {
  useTrailerPlaying(movieSelected);
  const trailerPlaying = useSelector((store) => store.movieSlice.movieTrailer);
  return (
    <div className="w-screen z-0 ">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerPlaying?.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default React.memo(VideoPlayerContainer);
