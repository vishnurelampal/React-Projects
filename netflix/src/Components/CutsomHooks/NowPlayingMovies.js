import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../Utilis/Constants";
import { addNowPlayingMovie } from "../../Utilis/Redux/movieslicer";

export default function NowPlayingMovies(movie) {
  const dispatch = useDispatch();
  async function getWatchList() {
    const fetchWatch = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&page=1",
      API_OPTIONS
    );
    const json = await fetchWatch.json();

    console.log(json.results);
  }
  useEffect(() => {
    getWatchList();
  }, []);
}
