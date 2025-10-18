import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_options } from "../utils/constant";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
    const dispatch = useDispatch();

    const getPopularMovies = async () => {
        try {
            const data = await fetch("https://api.themoviedb.org/3/movie/popular?page=1", API_options);
            const json = await data.json();
            // console.log("Popular Movies:", json.results);
            dispatch(addPopularMovies(json.results));
        } catch (error) {
            console.error("Error fetching popular movies:", error);
        }
    };

    useEffect(() => {
        getPopularMovies();}, []);
};

export default usePopularMovies;