import { useSelector } from "react-redux";
import lang from "./LanguageConstant";
import { useRef } from "react";
import openai from "../utils/openai";

const SerchBar = () => {
    const SearchText = useRef(null);
    const handleGptSearchClick = async() => {
        console.log(SearchText.current.value);
// //make an API call to GPT API and get the movies in Result format 
 const gptResults =  await openai.chat.completions.create({
  model: 'gpt-4o',
  messages: [
    { role: 'developer', content: 'Talk like a pirate.' },
    { role: 'user', content: 'Are semicolons optional in JavaScript?' },
  ],
});
console.log(gptResults);

    }
    const langkey = useSelector((store) => store.config.lang);
    return (
        <div className="pt-[8%]">
            <form className="w-1/2 rounded-lg bg-black  mx-80 flex justify-center align-center grid grid-cols-12" onClick={(e) => e.preventDefault()}>
                <input ref={SearchText} className=" col-span-10 rounded-md p-4 m-4 border border-red-300" type="text" placeholder={lang[langkey].gptSearchPlaceholder} />
                <button onClick={handleGptSearchClick} className="rounded-xl bg-red-800 p-3 mx-5 m-4 text-white col-span-2" >{lang[langkey].search}</button>
            </form>
        </div>
    )
}
export default SerchBar;