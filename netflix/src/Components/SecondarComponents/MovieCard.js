import React from "react";
import { movieCardPoster } from "../../Utilis/Constants";
const MovieCard = ({ displayMovies }) => {
  return (
    <span className="w-24 h-24 md:w-52 md:h-72  hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
      <img
        className="rounded-lg object-contain "
        src={movieCardPoster + displayMovies?.poster_path}
        alt="logo"
      />
    </span>
  );
};

export default MovieCard;
