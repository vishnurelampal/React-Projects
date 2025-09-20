import { useContext } from "react";
import { UserContext } from "../utils/Context/useContext";
export default function ResCard(Props) {
  const { name, cuisine, rating, prepTimeMinutes, image, ingredients } =
    Props.resData;
  const ingredient = ingredients;
  const userName = useContext(UserContext);
  console.log(name);
  return (
    <div className="w-[200px] h-[300px] bg-gray-200">
      <img className="w-full h-[150px]" alt="food" src={image} />
      <h3 className="font-bold ml-1.5 mt-2.5">{name}</h3>
      <h4 className="font-serif ml-1.5">{cuisine}</h4>
      <h4 className="font-serif ml-1.5">{rating}</h4>
      <h4 className="font-serif ml-1.5">{prepTimeMinutes} minutes</h4>
      <h4 className="font-bold ml-1.5">{userName.loggedInUser}</h4>
    </div>
  );
}
