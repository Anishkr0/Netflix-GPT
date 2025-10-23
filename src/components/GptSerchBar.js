import { useSelector } from "react-redux";
import lang from "./LanguageConstant";

const SerchBar=()=>{
     const langkey = useSelector((store)=>store.config.lang);
    return(
        <div className="pt-[8%]">
            <form className="w-1/2 rounded-lg bg-black  mx-80 flex justify-center align-center grid grid-cols-12" onClick={(e)=>e.preventDefault()}>
                <input className=" col-span-10 rounded-md p-4 m-4 border border-red-300" type = "text" placeholder={lang[langkey].gptSearchPlaceholder}/>
                <button className="rounded-xl bg-red-800 p-3 mx-5 m-4 text-white col-span-2" >{lang[langkey].search}</button>
            </form>
        </div>
    )
}
export default SerchBar;