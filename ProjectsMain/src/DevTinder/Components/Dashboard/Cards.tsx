import { useState } from "react";
import { static1 } from "../../Utils/Constants.js";
const randomIndex = Math.floor(Math.random() * 9);
const Cards = ({ userDetails, showButton }) => {
  const [removeComponent, setRenderToEmpty] = useState(false);
  if (removeComponent) {
    return null;
  }
  return (
    <div className="flex flex-col items-center" draggable="true">
      <div className="w-9/12 h-auto relative ">
        <img
          src={static1}
          alt="Profile"
          className="w-full h-full rounded-2xl"
        />
        <div className="absolute top-[65%] pl-5 text-white from-black/90 to-black/50 bg-linear-to-t w-full h-auto">
          <h2 className="text-2xl">
            {userDetails.firstName + " " + userDetails.lastName}
          </h2>
          <p>
            {userDetails.gender?.toUpperCase() +
              " " +
              userDetails.age +
              " aged"}
          </p>

          {showButton && (
            <div className="flex gap-4 justify-center   text-black *:cursor-pointer">
              <button
                className="bg-red-600 text-white rounded-full p-8 hover:bg-white hover:text-black transition-all duration-500"
                onClick={() => setRenderToEmpty(true)}
              >
                X
              </button>
              <button className="bg-white text-black rounded-full p-6 hover:bg-green-500 hover:text-white transition-all duration-500">
                ✅
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cards;
