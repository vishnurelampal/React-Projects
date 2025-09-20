import ResCard from "../Components/ResCard";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useResApi from "../utils/useResApi";
import useNetworkStatus from "../utils/useNetworkStatus";
import { UserContext } from "../utils/Context/useContext";
export default function Body() {
  const { setUserName, loggedInUser } = useContext(UserContext);
  const apiData = useResApi();
  const res = apiData;
  const netWorkStatus = useNetworkStatus();
  if (netWorkStatus === false) {
    return <h1>Oops Network Lost try again</h1>;
  }
  if (res === "" || res === undefined) {
    return (
      <div className="flex flex-wrap  gap-[20px]">
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
      </div>
    );
  }

  return (
    <div className="body">
      <div className="btn"></div>
      <div>
        <label>UserName : </label>
        <input
          type="text"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
          className=""
        />
      </div>
      <div className="flex flex-wrap gap-[20px] res-container">
        {res.map((res, index) => (
          <Link to={`/resmenu/${res.id}`} key={res.id}>
            {" "}
            <ResCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
}
