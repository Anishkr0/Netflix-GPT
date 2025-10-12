import { useDispatch } from "react-redux";
import { API_options } from "../utils/constant";
import { addtrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
const dispatch  = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
      API_options
    );
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    console.log(trailer);
    dispatch(addtrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);

};
export default useMovieTrailer;