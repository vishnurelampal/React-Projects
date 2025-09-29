import React from "react";
import GptSearchContainer from "./GptSearchContainer";
import GptResultsContainer from "./GptResultsContainer";

const GptMainContainer = () => {
  return (
    <div className="">
      <GptSearchContainer />
      <GptResultsContainer />
    </div>
  );
};

export default GptMainContainer;
