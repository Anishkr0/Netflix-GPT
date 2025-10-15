import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_options } from "../utils/constant";
import { addTopRated } from "../utils/moviesSlice";
const useTopRated = () => {
    const dispatch = useDispatch();
    const getTopRated = async () => {
        try {
            const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1", API_options);
            const json = await data.json();
            console.log("TopRated Movies:", json.results);
            dispatch(addTopRated(json.results));
        } catch (error) {
            console.error("Error fetching popular movies:", error);
        }
    };

    useEffect(() => {
        getTopRated();
    }, []);
};

export default useTopRated;