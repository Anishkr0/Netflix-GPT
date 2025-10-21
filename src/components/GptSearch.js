import SerchBar from "./GptSerchBar";
import GptMovieSuggest from "./GptMovieSuggest";
import { bg_main_url } from "../utils/constant";
const GptSearch =()=>{
    return(
   <div>
<div className=" absolute -z-10">
        <img
          className="w-full h-full object-cover"
          src={bg_main_url}
          alt="Logo Url"
        />
      </div>    <SerchBar/>
  <  GptMovieSuggest/>
   </div>
    )
}
export default GptSearch;