import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../Utilis/Constants";
import { addTopRatedMovies } from "../../Utilis/Redux/movieslicer";
import { useEffect } from "react";

export default function useTopRated() {
  const dispatch = useDispatch();
  async function getWatchList() {
    const fetchWatch = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      API_OPTIONS
    );
    const json = await fetchWatch.json();

    dispatch(addTopRatedMovies(json.results));
  }
  useEffect(() => {
    getWatchList();
  }, []);
}
