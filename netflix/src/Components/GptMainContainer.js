import React from "react";
import GptSearchContainer from "./GptSearchContainer";
import GptResultsContainer from "./GptResultsContainer";

const GptMainContainer = () => {
  return (
    <div className="mt-[20%]">
      <GptSearchContainer />
      <GptResultsContainer />
    </div>
  );
};

export default GptMainContainer;
