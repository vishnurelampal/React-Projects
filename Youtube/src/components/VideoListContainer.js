import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { clearMessages } from "../utils/Redux/chatSlice";
import { useDispatch } from "react-redux";
import url from "../utils/api/youtubeApi";
import VideoCard from "./VideoCard";
const VideoListContainer = () => {
  const [videoData, setVideodata] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const data = await fetch(url);
    const json = await data.json();
    setVideodata(json.items);
  }
  const dispatch = useDispatch();
  useEffect(() => {}, [dispatch(clearMessages())]);
  return (
    <div className="flex flex-wrap gap-3 mx-5 my-5">
      {videoData.map((item) => (
        <Link to={`/watch?v=${item.id}`} key={item.id}>
          <VideoCard videoDetails={item} />
        </Link>
      ))}
    </div>
  );
};

export default VideoListContainer;
