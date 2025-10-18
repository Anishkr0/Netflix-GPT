import { IMG_URL_POST } from "../utils/constant";
import { useSelector } from "react-redux";


const MovieCard = ({ posterPath }) => {
    return (<div className="w-40  pr-4">

        <img src={IMG_URL_POST + posterPath} alt="poster image" />
    </div>)
}


const Test = () => {
  const state = useSelector((store) => store);
  console.log("FULL STORE:", state);
  return null;
};



export default MovieCard;
export  {Test};
