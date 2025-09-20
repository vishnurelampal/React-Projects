import useResApi from "../utils/useResApi";
import { RestaurantMenu } from "../utils/RestuarantMenu";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
export default function Recipe({ resId }) {
  const resMenu = useResApi();
  if (resMenu === "" || resMenu === undefined) {
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
  const selectedRes = resMenu[resId - 1];
  console.log(RestaurantMenu[resId - 1]);
  return (
    <div className="flex flex-col items-center ">
      <div className=" w-full flex justify-center bg-gray-200 relative z-1000 text-gray-600">
        <Link to="/">
          <h1 className=" absolute left-0">⬅️ Back</h1>
        </Link>
        <h1 className="text-7xl font-semibold italic ">My Recipe</h1>
      </div>
      <span className="w-full flex justify-center h-[200px] bg-gray-200 z-1">
        <img
          className="w-[200px] h-full"
          src="https://cdn.dummyjson.com/recipe-images/2.webp"
        />
      </span>
      <div id="recipeTitleDetails" className="flex mt-6 flex-col">
        <h1 className="text-5xl font-semibold italic text-gray-600">
          {selectedRes.name}
        </h1>
        <label className="">{selectedRes.rating} ⭐</label>
        <span className="flex flex-row mb-3.5  gap-3">
          <h1>
            {parseInt(
              selectedRes.prepTimeMinutes + selectedRes.cookTimeMinutes
            )}{" "}
            mins
          </h1>
          <h1>{selectedRes.difficulty}</h1>
        </span>
        <span className="flex flex-row gap-3 ">
          {selectedRes.tags.map((val, index) => (
            <h1 key={index}>{val}</h1>
          ))}
        </span>
      </div>
      <div
        id="ingredientsSteps"
        className="flex flex-row justify-between w-8/12 "
      >
        <span>
          <h1 className="text-4xl mb-2">Ingredients</h1>
          <ul className="">
            {selectedRes.ingredients.map((val, i) => (
              <li key={val}>
                {i + 1}. {val}
              </li>
            ))}
          </ul>
        </span>
        <span>
          <h1 className="text-4xl mb-2">How To Prepare</h1>
          <ul className="">
            {selectedRes.instructions.map((val, i) => (
              <li key={val}>
                {i + 1}. {val}
              </li>
            ))}
          </ul>
        </span>
      </div>
    </div>
  );
}
