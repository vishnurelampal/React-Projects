import React, { useRef } from "react";
import { API_OPTIONS, gptBgImage } from "../../Utilis/Constants";
import {
  addSearchResults,
  checkIsSearched,
} from "../../Utilis/Redux/searchMovieSlice";
import { useDispatch } from "react-redux";

const GptSearchContainer = () => {
  const dispatch = useDispatch();
  const searchInput = useRef(null);

  async function handleSearch(movies) {
    const fetchWatch = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movies +
        "&include_adult=false&page=1",
      API_OPTIONS
    );
    const json = await fetchWatch.json();
    const sortedResults = json?.results.filter(
      (movies) => movies.poster_path !== null
    );
    dispatch(addSearchResults(sortedResults));
    dispatch(checkIsSearched("Y"));
  }
  return (
    <div className="w-screen  flex flex-col justify-center relative items-center h-screen">
      <div className="w-full h-full z-0" id="backGroundDiv">
        <img className="w-full h-full" src={gptBgImage} alt="logo" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="z-50 top-1/4 absolute flex flex-row w-8/12 justify-center items-center"
      >
        <input
          ref={searchInput}
          type="text"
          placeholder="Search with GPT..."
          className="border p-2 rounded-lg w-96"
        />
        <button
          type="submit"
          className="bg-red-600 text-white p-2 rounded-lg ml-2"
          onClick={() => {
            handleSearch(searchInput.current.value);
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchContainer;
