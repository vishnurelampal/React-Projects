import React from "react";
import ButtonInHeader from "./ButtonInHeader";
const buttonCatgerories = [
  "All",
  "Music",
  "Live",
  "Cricket",
  "Gaming",
  "Latest",
  "Algorithms",
  "Lo-fi",
  "Thoughts",
  "Superhero movies",
  "Recently uploaded",
  "Watched",
  "New to you",
];
const ButtonList = () => {
  return (
    <div className="flex gap-3 p-3 overflow-x-auto ">
      {buttonCatgerories.map((catgeries) => (
        <ButtonInHeader key={catgeries} name={catgeries} />
      ))}
    </div>
  );
};

export default ButtonList;
