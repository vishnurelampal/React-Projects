import React from "react";
function SideBar() {
  return (
    <div className="h-full w-48 border-r flex flex-col border-gray-300 shadow-xl">
      <span className="" id="mainSpan">
        <p className="p-2 hover:bg-gray-200 hover:cursor-pointer">🏠 Home</p>
        <p className="p-2 hover:bg-gray-200 hover:cursor-pointer">🎥 Shorts</p>
        <p className="p-2 hover:bg-gray-200 hover:cursor-pointer">
          ➕ Subscription
        </p>
      </span>
      <span id="YouSpan" className="">
        <h1 className="text-center border-b font-bold border-gray-300 p-2">
          You
        </h1>
        <p className="p-2 hover:bg-gray-200 hover:cursor-pointer">📚 Library</p>
        <p className="p-2 hover:bg-gray-200 hover:cursor-pointer">🕒 History</p>
        <p className="p-2 hover:bg-gray-200 hover:cursor-pointer">
          ▶️ Your Videos
        </p>
      </span>
      <span id="explorespan" className="">
        <h1 className="text-center border-b border-gray-300 font-bold p-2">
          Explore
        </h1>
        <p className="p-2 hover:bg-gray-200 hover:cursor-pointer">
          🔥 Trending
        </p>
        <p className="p-2 hover:bg-gray-200 hover:cursor-pointer">🎵 Music</p>
        <p className="p-2 hover:bg-gray-200 hover:cursor-pointer">🎮 Gaming</p>
        <p className="p-2 hover:bg-gray-200 hover:cursor-pointer">📰 News</p>
        <p className="p-2 hover:bg-gray-200 hover:cursor-pointer">🏈 Sports</p>
        <p className="p-2 hover:bg-gray-200 hover:cursor-pointer">🎬 Movies</p>
        <p className="p-2 hover:bg-gray-200 hover:cursor-pointer">📺 Live</p>
      </span>
      <span id="morefromyoutubeSpan" className="">
        <h1 className="text-center border-b border-gray-300 font-bold p-2">
          More From Youtube
          <p className="p-2 hover:bg-gray-200 hover:cursor-pointer">
            🎥 YouTube Premium
          </p>
          <p className="p-2 hover:bg-gray-200 hover:cursor-pointer">
            🎵 YouTube Music
          </p>
          <p className="p-2 hover:bg-gray-200 hover:cursor-pointer">
            📚 YouTube Kids
          </p>
          <p className="p-2 hover:bg-gray-200 hover:cursor-pointer">
            🎙️ YouTube Podcast
          </p>
        </h1>
      </span>
    </div>
  );
}

export default SideBar;
