import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_options } from "../utils/constant";
import { addUpcoming } from "../utils/moviesSlice";
const useUpcoming = () => {
    const dispatch = useDispatch();
    const getUpcoming = async () => {
        try {
            const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1", API_options);
            const json = await data.json();
            // console.log("Upcoming Movies:", json.results);
            dispatch(addUpcoming(json.results));
        } catch (error) {
            console.error("Error fetching popular movies:", error);
        }
    };

    useEffect(() => {
        getUpcoming();
    }, []);
};

export default useUpcoming;