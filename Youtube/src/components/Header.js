import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/Redux/NavBarSlice";
import { Link } from "react-router-dom";
import { searchUrl } from "../utils/api/youtubeApi";
import { cacheSearchResult } from "../utils/Redux/searchSlice";
const Header = () => {
  const imgIcon = <img src="/svgexport-4.svg" alt="menu" className="w-6 h-6" />;

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchresult] = useState([]);
  const [showList, setShowList] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => fetchData(), 200);
    return () => clearTimeout(timeout);
  }, [searchQuery]);

  const dispatch = useDispatch();
  function handleToggleMenu() {
    dispatch(toggleMenu());
  }
  const cachedData = useSelector((store) => store.search);
  console.log(cachedData);
  async function fetchData() {
    if (cachedData[searchQuery]) {
      setSearchresult(cachedData[searchQuery]);
    } else {
      const data = await fetch(searchUrl + searchQuery);
      const json = await data.json();
      setSearchresult(json[1]);
      dispatch(
        cacheSearchResult({
          [searchQuery]: json[1],
        })
      );
    }
  }
  function HandelLiClick(item) {
    console.log(item);
    setSearchresult([]);
    setSearchQuery("");
  }
  return (
    <div
      className="grid
      shadow-md grid-flow-col h-3/12 p-2"
    >
      <span
        id="burgerYouTubeLogoMenuSpan"
        className="ml-12 col-span-3 flex hover:cursor-pointer gap-6"
      >
        <img
          onClick={handleToggleMenu}
          className="w-7 h-7"
          src="/menu.jpg"
          alt="menubar"
        />
        <Link to={"/"}>
          <span id="youTubeLogoSpan" className="">
            <img
              className="w-20 h-10"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1024px-Logo_of_YouTube_%282015-2017%29.svg.png"
              alt="youtube-logo"
            />
          </span>
        </Link>
      </span>

      <span id="searchBarSpan" className="flex col-span-3  gap-3 align-middle">
        <span className=" flex flex-col justify-between w-[70%]">
          <span id="inputSpan" className="flex gap-1">
            <input
              className="w-full border focus:outline-blue-200 border-gray-400 rounded-l-full px-4 py-1"
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
              onFocus={(e) => {
                setShowList(true);
              }}
              onBlur={(e) => {
                setShowList(false);
              }}
            />

            <button className="hover:bg-gray-200 align-middle rounded-r-full px-4 py-1 border border-gray-400 bg-gray-100">
              {imgIcon}
            </button>
          </span>
        </span>
        <span
          id="ResultDiv"
          className="fixed bg-white rounded-lg mt-12 shadow-lg w-[38%]"
        >
          <ul>
            {showList &&
              searchResult.map((item) => (
                <li
                  className="px-2 w-full py-2 flex gap-2 hover:bg-gray-200"
                  key={item}
                  onClick={() => {
                    HandelLiClick(item);
                  }}
                >
                  {imgIcon} {item}
                </li>
              ))}
          </ul>
        </span>
      </span>

      <span id="userSpan" className="col-span-1 ">
        <img
          className="w-7 h-7 rounded-full"
          src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
          alt="user-logo"
        />
      </span>
    </div>
  );
};

export default Header;
