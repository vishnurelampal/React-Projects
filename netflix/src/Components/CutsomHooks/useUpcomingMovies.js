import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../../Utilis/Constants";
import { addUpComingMovies } from "../../Utilis/Redux/movieslicer";
import { useEffect } from "react";

export default function useUpComingMovies() {
  const upComingMovies = useSelector(
    (store) => store.movieSlice?.upComingMovies
  );
  const dispatch = useDispatch();
  async function getWatchList() {
    const fetchWatch = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      API_OPTIONS
    );
    const json = await fetchWatch.json();
    dispatch(addUpComingMovies(json.results));
  }
  useEffect(() => {
    !upComingMovies && getWatchList();
  }, []);
}
