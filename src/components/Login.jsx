// import { Form } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
const Login = () => {

    const[IsSignInForm, setIsSignInForm] = useState(true);
    const toggleSignInForm = ()=>{
setIsSignInForm(!IsSignInForm);
    }
  return (
    <div>
      <Header />
      <div className=" absolute ">
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/bebd95d0-65f9-41a9-9d12-4794db63653e/web/IN-en-20250922-TRIFECTA-perspective_5e75cfb4-3797-4f17-866b-181ff91a51dd_large.jpg"
          alt="Logo Url"
        />
      </div>
      <form className=" w-4/12 absolute  p-12 my-36 mx-auto right-0 left-0 bg-black bg-opacity-80">
        <h1 className="text-3xl font-bold text-white w-full py-4 m-3">
          { IsSignInForm?"Sign In":"Sign Up"}
        </h1>
       { !IsSignInForm && <input
          className=" w-full bg-gray-800 p-4 my-4 rounded-lg bg-opacity-30 border border-white"
          type="text"
          placeholder="Full Name"
        />}
        <input
          className=" w-full bg-gray-800 p-4 my-4 rounded-lg bg-opacity-30 border border-white"
          type="text"
          placeholder="Email Or Mobile Number"
        />
        <input
          className=" w-full bg-gray-800 p-4 my-4 rounded-lg bg-opacity-20 border border-white"
          type="Password"
          placeholder="Password"
        />
        <button className="p-4 my-6 bg-red-600 rounded-lg w-full text-white ">
           { IsSignInForm?"Sign In":"Sign Up"}
        </button>
        <p className="py-4 rounded-lg w-full text-white cursor-pointer " onClick={toggleSignInForm}>
                      { IsSignInForm ?" New to Netflix ? Sign up now":"Already Registerd  ? Sign In Now"}

        </p>
      </form>
    </div>
  );
};
export default Login;
