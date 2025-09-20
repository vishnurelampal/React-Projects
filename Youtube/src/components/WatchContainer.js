import React from "react";
import { useDispatch } from "react-redux";
import { turOffToggleMenu } from "../utils/Redux/NavBarSlice";
import { useSearchParams } from "react-router-dom";
import LiveChatContainer from "./LiveChatContainer";
const WatchContainer = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  function handleToggleMenu() {
    dispatch(turOffToggleMenu());
  }
  handleToggleMenu();
  return (
    <div className="ml-20">
      <div className="flex gap-10">
        <iframe
          width="914"
          height="514"
          src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
          title="Tujhko Firse Jalwa Dikhana Hi Hoga Dj  | MAHAKAL DHOL MIX | Ganpati Visarjan Song Dj | DJ AKASH HTR"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <div>
          <LiveChatContainer />
        </div>
      </div>
    </div>
  );
};

export default WatchContainer;
