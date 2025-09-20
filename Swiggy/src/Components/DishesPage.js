import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RestaurantMenu } from "../utils/RestuarantMenu";
import { use, useState, useContext } from "react";
import ItemList from "./ItemList";
import { UserContext } from "../utils/Context/useContext";
export default function DishesPage() {
  const [activeIndex, setactiveIndex] = useState();
  const [flag, setFlag] = useState(false);
  const selectedResId = useParams();
  const selectedResMenu = RestaurantMenu[selectedResId.resId - 1];
  const categories = selectedResMenu.categories;
  function handleClick(Id) {
    setactiveIndex(activeIndex === Id ? null : Id);
  }
  const userNamefromContext = useContext(UserContext);
  return (
    <div className="w-full items-center flex  flex-col gap-2.5">
      <span>
        <h1 className="font-bold text-2xl ">{selectedResMenu.name}</h1>
        <h1 className="text-xs italic">{selectedResMenu.location}</h1>
      </span>
      {selectedResMenu.categories.map((item, index) => (
        <div key={item.categoryId} className=" w-5/12">
          <span className=" w-full flex justify-between flex-col  bg-gray-100 shadow-lg box-border">
            <div
              className="flex w-full h-15 justify-between cursor-pointer border-amber-50"
              onClick={() => handleClick(index)}
            >
              <h1 className="font-bold items-center">{item.categoryName} </h1>
              <h1>{activeIndex === index ? "⬆️" : "⬇️"}</h1>
            </div>
            {activeIndex === index && <ItemList items={item.items} />}
            <h1 className="">{userNamefromContext.loggedInUser}</h1>
          </span>
        </div>
      ))}
    </div>
  );
}
