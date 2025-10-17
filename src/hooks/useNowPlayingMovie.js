import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_options } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovie = () => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        try {
            const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_options);
            const json = await data.json();
            console.log("Now Playing Movies:", json.results);
            dispatch(addNowPlayingMovies(json.results));
        } catch (error) {
            console.error("Error fetching now playing movies:", error);
        }
    };

    useEffect(() => {
        getNowPlayingMovies();
    }, []); // Empty dependency array for one-time fetch on mount
};

export default useNowPlayingMovie;