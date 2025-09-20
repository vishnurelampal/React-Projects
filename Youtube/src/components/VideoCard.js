import React from "react";
import { formatNumber, timeAgo } from "../utils/HelperFunctions";
import { optionsIconImage } from "../utils/api/youtubeApi";
const VideoCard = ({ videoDetails }) => {
  const videoData = videoDetails;
  const imageData = videoData?.snippet?.thumbnails?.medium;
  const videoTitle = videoData?.snippet?.title;
  const channelName = videoData?.snippet?.channelTitle;
  let viewsCount = Number(videoData?.statistics?.viewCount);
  viewsCount = !isNaN(viewsCount) ? formatNumber(viewsCount) : "";
  const publishedAt = timeAgo(videoData?.snippet?.publishedAt);

  return (
    <div className={`w-[320px] h-[180] hover:cursor-pointer `}>
      <span id="thumbNailSpan flex ">
        <img
          src={imageData?.url}
          alt="thumbnail"
          className={`w-full h-[180]  rounded-lg  hover:rounded-none`}
        />
      </span>
      <span id="otherDetails" className={`flex gap-4 ww-[320px] `}>
        <span id="iconSpan">🛖</span>
        <div id="videoDetails">
          <h1 className="font-bold">{videoTitle}</h1>
          <p className="text-gray-500">{channelName}</p>
          <p className="text-gray-500">
            {viewsCount} {publishedAt}
          </p>
        </div>
        <span id="options" className="w-6 h-6   ml-auto">
          <img src={optionsIconImage} className="w-full h-full" />
        </span>
      </span>
    </div>
  );
};

export default VideoCard;
