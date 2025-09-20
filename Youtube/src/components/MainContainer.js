import React, { useEffect } from "react";
import VideoListContainer from "./VideoListContainer";
import ButtonList from "./ButtonList";
import { useDispatch } from "react-redux";
import { turOnToggleMenu } from "../utils/Redux/NavBarSlice";
function MainContainer() {
  const dispatch = useDispatch();
  function handleTurnOnMenu() {
    dispatch(turOnToggleMenu());
  }
  useEffect(() => {
    handleTurnOnMenu();
  }, []);

  return (
    <div>
      <ButtonList />
      <VideoListContainer />
    </div>
  );
}

export default MainContainer;
