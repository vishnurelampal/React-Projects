import { useState } from "react";
import { static1 } from "../../Utils/Constants.js";
import Icon from "../BaseScreen/Icon.js";
type UserDetailsDataProp = {
  firstName?: string;
  lastName?: string;
  gender?: string;
  age?: string | number;
};
type userDetailsProp = {
  userDetails: UserDetailsDataProp;
  showButton: boolean;
};
const Cards = ({ userDetails, showButton }: userDetailsProp) => {
  const [removeComponent, setRenderToEmpty] = useState(false);
  const [bigIconFlag, setBigIconFlag] = useState<boolean>(false);
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
        <div className="absolute top-[65%] pl-5 text-white from-black/90 to-black/50 bg-linear-to-t w-full h-2/4">
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
            <div className="flex gap-4 justify-center   text-black *:cursor-pointer mt-28">
              <span>
                <button
                  className="cursor-pointer"
                  onMouseOver={() => {
                    setBigIconFlag(true);
                  }}
                  onMouseLeave={() => {
                    setBigIconFlag(false);
                  }}
                  onClick={() => setRenderToEmpty(true)}
                >
                  {bigIconFlag ? (
                    <Icon
                      height={100}
                      width={100}
                      iconName="icon-close"
                      classList=""
                    />
                  ) : (
                    <Icon
                      height={80}
                      width={80}
                      iconName="icon-close"
                      classList=""
                    />
                  )}
                </button>
              </span>

              <span>
                <button
                  onMouseOver={() => {
                    setBigIconFlag(true);
                  }}
                  onMouseLeave={() => {
                    setBigIconFlag(false);
                  }}
                  onClick={() => setRenderToEmpty(true)}
                >
                  <Icon
                    height={80}
                    width={80}
                    iconName="icon-heart"
                    classList=""
                  />
                </button>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cards;
