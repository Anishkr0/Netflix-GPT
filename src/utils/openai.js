import OpenAI from "openai";
import { OPENAI_KEY } from "./constant";


// console.log("OpenAI Key:", process.env.REACT_APP_OPENAI_KEY); // 👈 Add here

const openai = new OpenAI({
    apiKey: OPENAI_KEY,
      dangerouslyAllowBrowser: true,
 // Enable usage in browser environments

});
export default openai;