import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovie";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";

const Browse = () => {
    //    console.log("Browse ane rendered");

    useNowPlayingMovies();
//    useNowPlayingMovies();
   usePopularMovies();
        // fetching the data from the  TMDB API and Updadte the Store of redux
    return (
        <div>
            <Header/>
            <MainContainer/>
            <SecondaryContainer/>
        </div>);
};
export default Browse;