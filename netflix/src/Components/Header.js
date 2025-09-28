import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../Utilis/Redux/userSlice";
import { useNavigate } from "react-router-dom";
import { auth } from "../Utilis/FireBase";
import { onAuthStateChanged } from "firebase/auth";
import { addUser } from "../Utilis/Redux/userSlice";
import { signOut } from "firebase/auth";
import { netflixName, userImage } from "../Utilis/Constants";
import { setGptFlag } from "../Utilis/Redux/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    <div className="absolute z-50 flex justify-between w-screen bg-gradient-to-b from-black">
      <img className="px-8 py-4 w-[250px]" src={netflixName} alt="logo" />
      <div className="w-4/12 flex flex-row gap-7 self-center pl-10">
        <select>
          <option value="en" className="bg-black text-white">
            EN
          </option>
        </select>
        <li
          className="text-white p-2 list-none font-semibold rounded-lg hover:bg-gray-500 hover:cursor-pointer"
          onClick={handleGptClick}
        >
          {loggedIn ? "Gpt Search" : ""}
        </li>
        <li className="list-none text-white w-15 h-15 p-2 rounded-lg hover:bg-gray-500 hover:cursor-pointer">
          {loggedIn ? "Vishnu" : "Guest"}
        </li>
        <li
          className="text-white list-none font-semibold p-2 rounded-lg hover:bg-gray-500 hover:cursor-pointer"
          onClick={handleSignOut}
        >
          {loggedIn ? "Sign Out" : "Sign In"}
        </li>
      </div>
    </div>
  );
};

export default Header;
