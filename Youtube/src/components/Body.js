import React from "react";
import MainContainer from "./MainContainer";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

export default function Body() {
  const isMenuOpen = useSelector((store) => store.NavBar.isMenuOpen);
  return (
    <div className="flex">
      {isMenuOpen && <SideBar />}
      <Outlet />
    </div>
  );
}
