import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../Utilis/Constants";
import { addMovieTrailer } from "../../Utilis/Redux/movieslicer";

export default function useTrailerPlaying(movieSelected) {
  const dispatch = useDispatch();
  const movieId = movieSelected.id;
  async function fetchTrailer() {
    const rawData = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    console.log(movieId);
    const formattedJson = await rawData.json();
    const trailerFiltered = formattedJson.results.filter(
      (video) => video.type === "Trailer"
    );
    console.log(trailerFiltered);
    const finalTrailer = trailerFiltered.length
      ? trailerFiltered[0]
      : formattedJson.results[0];

    dispatch(addMovieTrailer(finalTrailer));
  }
  useEffect(() => {
    fetchTrailer();
  }, []);
}
