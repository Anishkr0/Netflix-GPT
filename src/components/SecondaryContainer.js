import { useSelector } from "react-redux";
import MovieList from "./MovieList";
// import { useNowPlayingMovie } from "../hooks/useNowPlayingMovie";
const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    console.log(movies);
    return (
        <div className="bg-black">
           <div className="-mt-64 pl-12 relative z-20 rounded-sm">
             <MovieList title={"Now Playing"} movies={movies} />
            <MovieList title={"Trending On NetFlix"} movies={movies} />
            <MovieList title={"Popular "} movies={movies} />
            <MovieList title={"Horror Special"} movies={movies} />
           </div>
        </div>
    )
}
export default SecondaryContainer;