import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_options } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/moviesSlice";
//WORKING FINE
const useNowPlayingMovies = () => {
    //fetching the data from the  TMDB API and Updadte the Store of redux
    // const Dispatch = useDispatch();
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_options);

        const json = await data.json();
        // console.log(json.results);
       dispatch(addNowPlayingMovies(json.results));
    };
    useEffect(() => {
        getNowPlayingMovies();
    },[]);
}
export default useNowPlayingMovies;