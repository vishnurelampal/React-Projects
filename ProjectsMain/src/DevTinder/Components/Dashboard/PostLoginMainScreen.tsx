import { Outlet } from "react-router-dom";
import Header from "../BaseScreen/Header";
import ZindlerLogo from "../LoginComponents/ZindlerLogo";
type HeaderComponetType = {
  first: string;
  second: string;
  third: string;
  fourth: string;
  fifth: string;
};

export const PostLoginMainScreen = () => {
  const navigationObject: HeaderComponetType = {
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
      <Outlet />
    </>
  );
};
