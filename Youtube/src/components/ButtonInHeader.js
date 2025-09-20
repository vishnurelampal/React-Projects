import React from "react";

const ButtonInHeader = ({ name }) => {
  return (
    <>
      <button className="bg-gray-200 px-3 rounded-md">{name}</button>
    </>
  );
};

export default ButtonInHeader;
