import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLX_LOGO, SUPPORTED_LANGUAGE } from "../utils/constant";
import { toogleGptSerchView } from "../utils/gptSlice";
import lang from "./LanguageConstant";
// import { SUPPORTED_LANGUAGE } from "../utils/constant";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened so i have to build an error compoenet.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toogleGptSerchView());
    //Toggle GPT
  };
  return (
    <div className="absolute  px-9 py-2 bg-gradient-to-b from-black z-40 flex justify-between w-full items-center">
      <img
        className="w-44 border border-red-300 rounded-md"
        src={NETFLX_LOGO}
        alt=""
      />
      {user && (
        <div className="flex">
          <select>
            {SUPPORTED_LANGUAGE.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}

            {/* <option value="hindi">Hindi</option>
            <option value="spanish">Spanish</option> */}
          </select>
          <button
            className="px-2 py-2 m-2 text-white bg-black rounded-2xl"
            onClick={handleGptSearchClick}
          >
            GPT Search
          </button>
          <img className="w-13 h-12  rounded-full" src={user?.photoURL} />
          <button
            className=" text-white bg-black  px-2 py-2 m-2  rounded-2xl"
            onClick={handleSignOut}
          >
            (SignOut)
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
