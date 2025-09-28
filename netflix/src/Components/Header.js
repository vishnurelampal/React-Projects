import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeUser } from "../Utilis/Redux/userSlice";
import { useNavigate } from "react-router-dom";
import { auth } from "../Utilis/FireBase";
import { onAuthStateChanged } from "firebase/auth";
import { addUser } from "../Utilis/Redux/userSlice";
import { signOut } from "firebase/auth";
import { netflixName, userImage } from "../Utilis/Constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
  return (
    <div className="absolute z-50 flex justify-between w-screen bg-gradient-to-b from-black">
      <img className="px-8 py-4 w-[250px]" src={netflixName} alt="logo" />
      <div className="w-1/12 flex flex-row gap-1 justify-center align-middle pr-3">
        <img className="w-1/4 h-1/3 mt-6" src={userImage} alt="logo" />
        <button onClick={handleSignOut} className="flex-1 mb-2 text-white">
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
