import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeUser } from "../../Redux/userSlice";
export const Profile = () => {
  const [tem, setTemp] = useState({ text: "random" });
  const dispatch = useDispatch();
  function LogoutHandler() {
    dispatch(removeUser());
  }
  return (
    <div>
      <p>{tem.text}</p>
      <button className="p-2 bg-blue-500 text-white" onClick={LogoutHandler}>
        Profile Page
      </button>
    </div>
  );
};
