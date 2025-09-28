import React from "react";
import MovieCard from "./MovieCard";
const MovieListContainer = ({ title, movies }) => {
  return (
    <div className=" flex flex-col  gap-2">
      <h1 className="font-bold text-white  w-/12">{title}</h1>
      <div className="flex  overflow-x-scroll scrollbar-hide overflow-y-hidden">
        <div className="flex gap-4">
          {movies?.map((mov) => (
            <MovieCard key={mov.id} displayMovies={mov} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieListContainer;
