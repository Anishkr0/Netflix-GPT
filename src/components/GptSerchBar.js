const SerchBar=()=>{
    return(
        <div>
            <form className="rounded-sm bg-black p-2 mt-8 mx-80 ">
                <input className=" rounded-md p-4 m-4" type = "text" placeholder="What Would You like to Watch Today"/>
                <button className="rounded-xl bg-red-800 p-3 mx-5 text-white" >Search</button>
            </form>
        </div>
    )
}
export default SerchBar;