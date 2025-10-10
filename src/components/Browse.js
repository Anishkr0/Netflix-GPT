import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovie";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
    //    console.log("Browse ane rendered");

    // useNowPlayingMovies();
   useNowPlayingMovies();
        //fetching the data from the  TMDB API and Updadte the Store of redux
    return (
        <div>
            <Header/>
            <MainContainer/>
            <SecondaryContainer/>
        </div>);
};
export default Browse;