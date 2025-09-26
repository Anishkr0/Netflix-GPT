import Browse from "./Browse";
import Login from "./Login";
import { BrowserRouter, createBrowserRouter } from "react-router-dom";

const Body = ()=>{
    const appRouter = createBrowserRouter([
{
    path:"/",
    element:<Body/>
},
{
    path:"/browse",
    element:<Browse/>
},


    ])
    return(
<div>
    <Browse/>
    <Login/>
</div>    );
};
export default Body;