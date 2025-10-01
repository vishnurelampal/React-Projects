import React from "react";
import MovieCard from "./MovieCard";
const MovieListContainer = ({ title, movies }) => {
  return (
    <div className="h-5/12 flex flex-col  gap-2">
      <h1 className="font-bold text-white ">{title}</h1>
      <div className="flex  overflow-x-scroll scrollbar-hide overflow-y-hidden">
        <div className="flex w-auto h-[150px] md:h-[250px] gap-4">
          {movies?.map((mov) => (
            <MovieCard key={mov.id} displayMovies={mov} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieListContainer;
