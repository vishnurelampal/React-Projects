import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeUser } from "../../Redux/userSlice";
import DashboardMain from "./DashboardMain";
export const PostLoginMainScreen = () => {
  const [tem, setTemp] = useState({ text: "random" });
  const dispatch = useDispatch();
  function LogoutHandler() {
    dispatch(removeUser());
  }
  return (
    <div className="p-1">
      <DashboardMain />
    </div>
  );
};
