import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../../Utilis/Constants";
import { addTopRatedMovies } from "../../Utilis/Redux/movieslicer";
import { useEffect } from "react";

export default function useTopRated() {
  const topRatedMovies = useSelector(
    (store) => store.movieSlice?.topRatedMovies
  );
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
    !topRatedMovies && getWatchList();
  }, []);
}
