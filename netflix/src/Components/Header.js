import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../Utilis/Redux/userSlice";
import { useNavigate } from "react-router-dom";
import { auth } from "../Utilis/FireBase";
import { onAuthStateChanged } from "firebase/auth";
import { addUser } from "../Utilis/Redux/userSlice";
import { signOut } from "firebase/auth";
import { netflixName, userImage } from "../Utilis/Constants";
import { setGptFlag, setGptFlagFalse } from "../Utilis/Redux/gptSlice";
import { clearAllMovies } from "../Utilis/Redux/movieslicer";
import { checkIsSearched } from "../Utilis/Redux/searchMovieSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isGptflag = useSelector((store) => store.gptSlice.gptFlag);
  const loggedIn = useSelector((store) => store.user);
  useEffect(() => {
    const unSuscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("loggedIN");
        navigate("/browse");
        const { uid, email, displayName, phoneNumber } = auth.currentUser;
        dispatch(addUser({ uid, email, displayName, phoneNumber }));
      } else {
        console.log("loggedOut");
        dispatch(removeUser());
        dispatch(setGptFlagFalse());
        dispatch(clearAllMovies());
        dispatch(checkIsSearched("N"));
        navigate("/");
      }
    });
    return () => unSuscribe();
  }, []);

  function handleSignOut() {
    signOut(auth)
      .then(() => {
        // navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  }
  function handleGptClick() {
    dispatch(setGptFlag());
  }
  return (
    <div className="absolute z-50 flex justify-between w-full bg-gradient-to-b from-black">
      <img
        className=" w-[120px] pl-2 pr-4 py-2 md:pr-8 md:py-4 md:w-[250px]"
        src={netflixName}
        alt="logo"
      />
      <div className=" w-auto flex flex-row gap:5 md:gap-7 self-center  md:pl-10">
        <select>
          <option value="en" className=" text-white">
            EN
          </option>
        </select>
        {loggedIn && (
          <li
            className="text-white p-2 list-none font-semibold rounded-lg  md:hover:bg-gray-500 hover:cursor-pointer"
            onClick={handleGptClick}
          >
            {isGptflag ? "Home" : "Search"}
          </li>
        )}
        <li className="list-none text-white w-15 h-15 p-2 rounded-lg md:hover:bg-gray-500 hover:cursor-pointer">
          {loggedIn ? "Vishnu" : "Guest"}
        </li>
        {loggedIn && (
          <li
            className="text-white list-none font-semibold p-2 rounded-lg md:hover:bg-gray-500 hover:cursor-pointer"
            onClick={handleSignOut}
          >
            Sign Out
          </li>
        )}
      </div>
    </div>
  );
};

export default Header;
