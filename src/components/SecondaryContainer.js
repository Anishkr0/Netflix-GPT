
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const nowPlayingMovies = useSelector((store) => store.movies?.nowPlayingMovies || []);
    const popularMovies = useSelector((store) => store.movies?.PopularMovies || []); // Match case from moviesSlice
    const topRated = useSelector((store)=>store.movies?.TopRated ||[]);
    const upcoming = useSelector((store)=>store.movies?.Upcoming ||[]);


    return (
        <div className="bg-black">
            <div className="-mt-64 pl-12 relative z-20 rounded-sm">
                <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
                <MovieList title={"Top Rated Movies"} movies={topRated} /> {/* Use same data for now */}
                <MovieList title={"Popular"} movies={popularMovies} />
                <MovieList title={"Upcoming  Special Movies"} movies={upcoming} /> {/* Use same data for now */}
            </div>
        </div>
    );
};

export default SecondaryContainer;