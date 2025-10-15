import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovie";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import useUpcoming from "../hooks/useUpcoming";

const Browse = () => {
useNowPlayingMovies();
    usePopularMovies();
    useTopRated();
    useUpcoming();
        // fetching the data from the  TMDB API and Updadte the Store of redux
    return (
        <div>
            <Header/>
            <MainContainer/>
            <SecondaryContainer/>
        </div>);
};
export default Browse;