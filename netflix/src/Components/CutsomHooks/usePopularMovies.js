import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../../Utilis/Constants";
import { addPopularMovies } from "../../Utilis/Redux/movieslicer";
console.log("popular hook");
function usePopularMovies() {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movieSlice?.popularMovies);
  async function getWatchList() {
    const fetchWatch = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      API_OPTIONS
    );
    const json = await fetchWatch.json();
    console.log(json);
    console.log("popular");
    dispatch(addPopularMovies(json.results));
  }
  console.log(popularMovies);
  useEffect(() => {
    !popularMovies && getWatchList();
  }, []);
}
export { usePopularMovies };
