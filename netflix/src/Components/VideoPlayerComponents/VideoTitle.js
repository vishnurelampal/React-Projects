import React from "react";
const VideoTitle = ({ movieSelected }) => {
  const { title, overview, id } = movieSelected;
  return (
    <div className="pt-0 md:pt-[15%] md:px-20 pl-10 z-20 absolute top-0 w-screen aspect-video bg-gradient-to-r from-black">
      <h1 className="text-md mt-24 pb-3 md:text-3xl md:w-1/4 text-white font-bold md:mt-2">
        {title}
      </h1>
      <p className="hidden md:inline-block w-1/4 mt-2 text-white">{overview}</p>
      <div className="mt-0 gap-1 flex md:gap-2 md:mt-3">
        <button className="bg-white w-15 p-2 md:w-20 font-bold md:text-xl md:p-4 rounded-md ">
          Play
        </button>
        <button className="bg-gray-500 p-2 text-white md:p-4 rounded-md bg-opacity-50">
          More Info
        </button>
      </div>
    </div>
  );
};
export default React.memo(VideoTitle);
