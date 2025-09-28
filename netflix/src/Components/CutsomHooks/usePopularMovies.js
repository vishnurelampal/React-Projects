import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../Utilis/Constants";
import { addPopularMovies } from "../../Utilis/Redux/movieslicer";

function usePopularMovies() {
  const dispatch = useDispatch();
  async function getWatchList() {
    const fetchWatch = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      API_OPTIONS
    );
    const json = await fetchWatch.json();
    console.log(json);
    dispatch(addPopularMovies(json.results));
  }
  useEffect(() => {
    getWatchList();
  }, []);
}
export { usePopularMovies };
