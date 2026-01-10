import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeUser } from "../../Redux/userSlice";
import Header from "../BaseScreen/Header";
import LoginSignUpCard from "./LoginSIgnUpCard";
import ZindlerLogo from "./ZindlerLogo";
type HeaderComponetType = {
  first: string;
  second: string;
  third: string;
  fourth: string;
  fifth: string;
};

const Login = () => {
  const dispatch = useDispatch();
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  useEffect(() => {
    dispatch(removeUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function CreateAccountClick(): void {
    setShowLoginModal(true);
  }
  function handleClose(): void {
    setShowLoginModal(false);
    console.log("closed");
  }

  const navigationObject: HeaderComponetType = {
    first: "Products",
    second: "Learn",
    third: "Safety",
    fourth: "Safety",
    fifth: "Download",
  };
  return (
    <div className="overflow-hidden overflow-y-hidden max-h-screen">
      <div className="relative">
        <img
          className="-z-20 min-h-screen fit-cover w-screen"
          src="https://tinder.com/static/build/8ad4e4299ef5e377d2ef00ba5c94c44c.webp"
          alt="Tinder bg"
        />
        <div className="absolute top-0 z-10 bg-linear-to-b h-5/12 pt-5 from-black/90 to-transparent w-screen flex gap-2 ">
          <ZindlerLogo />
          <Header navigation={navigationObject} />
        </div>
        <div className="mx-auto ">
          <button
            onClick={CreateAccountClick}
            className="absolute top-[45%]  cursor-pointer left-[45%] bg-[#D83752] text-white font-bold text-2xl p-5 rounded-2xl"
          >
            Create Account
          </button>
        </div>
        <div className="">
          {showLoginModal && <LoginSignUpCard handleClose={handleClose} />}
        </div>
      </div>
    </div>
  );
};

export default Login;
