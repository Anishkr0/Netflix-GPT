// import { Form } from "react-router-dom};
import { useRef, useState } from "react";
import Header from "./Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
const dispatch = useDispatch();

  const [IsSignInForm, setIsSignInForm] = useState(true);
  const [ErrorMessage, setErrorMessage] = useState(null);
  const Email = useRef(null);
  const Password = useRef(null);
  const Name = useRef(null);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    const emailValue = Email.current?.value || "";
    const passwordValue = Password.current?.value || "";

    // Only check if fields are empty
    if (!emailValue || !passwordValue) {
      setErrorMessage("Email and Password are required.");
      window.alert("Email and Password are required.");
      return;
    }

    if (!IsSignInForm) {
      // Sign Up
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user ,{
            displayName: Name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/162986996?v=4",
          })
            .then(() => {
const { uid, email, displayName, photoURL } = auth.currentUser;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));                        navigate("/browse");
            })
            .catch((error) => {
                        setErrorMessage( error.message);
            });
          // window.alert("Sign Up Success: " + user.email);
        })
        .catch((error) => {
          setErrorMessage(error.code + ": " + error.message);
          if (error.code === "auth/email-already-in-use") {
            window.alert(
              "This email is already registered. Please sign in or use a different email."
            );
          } else {
            window.alert("Sign Up Error: " + error.message);
          }
        });
    } else {
      // Sign In
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          setErrorMessage(error.code + ": " + error.message);
          if (error.code === "auth/invalid-credential") {
            window.alert("Invalid email or password. Please try again.");
            if (Password.current) Password.current.value = "";
          } else {
            window.alert("Sign In Error: " + error.message);
          }
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!IsSignInForm);
  };
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
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" w-4/12 absolute  p-12 my-36 mx-auto right-0 left-0 bg-black bg-opacity-80"
      >
        <h1 className="text-3xl font-bold text-white w-full py-4 m-3">
          {IsSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!IsSignInForm && (
          <input
            ref={Name}
            className=" w-full bg-gray-800 p-4 my-4 rounded-lg bg-opacity-30 border border-white text-white"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={Email}
          className=" w-full bg-gray-800 p-4 my-4 rounded-lg bg-opacity-30 border border-white text-white"
          type="email"
          placeholder=" Enter Your Email "
        />
        <input
          ref={Password}
          className=" w-full bg-gray-800 p-4 my-4 rounded-lg bg-opacity-20 border border-white text-white"
          type="password"
          placeholder="Password"
        />
        <p className="font-bold text-2xl text-red-900 py-2">{ErrorMessage}</p>
        <button
          className="p-4 my-6 bg-red-600 rounded-lg w-full text-white "
          onClick={handleButtonClick}
        >
          {IsSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-4 rounded-lg w-full text-white cursor-pointer "
          onClick={toggleSignInForm}
        >
          {IsSignInForm
            ? " New to Netflix ? Sign up now"
            : "Already Registerd  ? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
