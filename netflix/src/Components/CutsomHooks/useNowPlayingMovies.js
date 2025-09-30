import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../../Utilis/Constants";
import { addNowPlayingMovie } from "../../Utilis/Redux/movieslicer";

export default function NowPlayingMovies() {
  const dispatch = useDispatch();
  const nowPlayingMovie = useSelector(
    (store) => store.movieSlice?.nowPlayingMovie
  );
  async function getWatchList() {
    const fetchWatch = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      API_OPTIONS
    );
    const json = await fetchWatch.json();

    dispatch(addNowPlayingMovie(json.results));
  }
  useEffect(() => {
    !nowPlayingMovie && getWatchList();
  }, []);
}
