import React from "react";
const VideoTitle = ({ movieSelected }) => {
  const { title, overview, id } = movieSelected;
  console.log(movieSelected);
  return (
    <div className="pt-[20%] px-20 z-20 absolute top-0 w-screen aspect-video bg-gradient-to-r from-black">
      <h1 className="text-3xl w-1/4 text-white font-bold mt-2">{title}</h1>
      <p className="w-1/4 mt-2 text-white">{overview}</p>
      <div className="flex gap-2 mt-3">
        <button className="bg-white w-20 font-bold text-xl p-4 rounded-md ">
          Play
        </button>
        <button className="bg-gray-500 text-white p-4 rounded-md bg-opacity-50">
          More Info
        </button>
      </div>
    </div>
  );
};
export default React.memo(VideoTitle);
