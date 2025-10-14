import { IMG_URL_POST } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
    return (<div className="w-40  pr-4">

        <img src={IMG_URL_POST + posterPath} alt="poster image" />
    </div>)
}
export default MovieCard;