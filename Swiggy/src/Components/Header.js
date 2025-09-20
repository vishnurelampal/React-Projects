import { Link } from "react-router-dom";
import useLocation from "../utils/useLocation";
import { useContext } from "react";
import { UserContext } from "../utils/Context/useContext";
import { useSelector } from "react-redux";
export default function Header() {
  const cartItems = useSelector((store) => store.cart.item);
  const userLogged = useContext(UserContext);
  const location = useLocation();
  const locationName = location?.display_name;
  let Location;
  if (locationName !== "" && locationName !== undefined) {
    const areaNameFetched =
      locationName.split(",")[0] + "," + locationName.split(",")[1];
    Location = (
      <h1 id="location" className="mt-2.5 text-stone-600 from-neutral-600">
        📍 {areaNameFetched}
      </h1>
    );
  } else {
    Location = "";
  }

  return (
    <div className="flex justify-between gap-3.5 shadow-lg mb-5.5 h-[135px] ">
      <div className="">
        <img
          className="w-[150px] h-[100px] rounded-b-md"
          src="https://fastly.picsum.photos/id/23/3887/4899.jpg?hmac=2fo1Y0AgEkeL2juaEBqKPbnEKm_5Mp0M2nuaVERE6eE"
        />
        {Location}
      </div>
      <div className="flex flex-col items-center">
        <h1 className="font-bold font-mono mt-10 text-gray-700 text-7xl">
          Our Delicious Dishes
        </h1>
        <h1 className="text-gray-700 italic ml-auto">You pick we'll guide</h1>
      </div>

      <div className="flex items-center mr-10  ">
        <ul className="flex gap-3 [&>li]:text-cyan-600 italic">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li className="text-lg font-bold">Cart ({cartItems.length})</li>
          <li className="text-lg font-bold">{userLogged.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
}
