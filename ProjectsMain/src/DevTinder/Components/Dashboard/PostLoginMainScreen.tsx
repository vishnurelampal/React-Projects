import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeUser } from "../../Redux/userSlice";
import Header from "../BaseScreen/Header";
import ZindlerLogo from "../LoginComponents/ZindlerLogo";
import DashboardMain from "./DashboardMain";
export const PostLoginMainScreen = () => {
  const [tem, setTemp] = useState({ text: "random" });
  const dispatch = useDispatch();
  function LogoutHandler() {
    dispatch(removeUser());
  }
  const navigationObject: Record<string, string> = {
    first: "Home",
    second: "Profile",
    third: "Connections",
    fourth: "Contact",
    fifth: "Logout",
  };
  return (
    <>
      <header className="bg-black pb-1 flex gap-10 ">
        <div className="w-50 h-22.5">
          <ZindlerLogo />
        </div>
        <Header navigation={navigationObject} />
      </header>
      <DashboardMain />
    </>
  );
};
