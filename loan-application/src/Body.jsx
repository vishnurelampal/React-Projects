import React, { useState } from "react";
import BasicDetails from "./BasicDetails";
import LoansDetails from "./LoansDetails";
import OccupationDetails from "./OccupationDetails";
import ProgressionBar from "./ProgressionBar";

const Body = () => {
  const [proceed, setPrcoceed] = useState(0);
  function handleProceed() {
    if (proceed < 2) {
      setPrcoceed((prev) => prev + 1);
    }
  }
  function handleCancel() {
    if (proceed < 3 && proceed > 0) {
      setPrcoceed((prev) => prev - 1);
    }
  }
  return (
    <div>
      <div className="border border-[#EAEAEA] m-5 mr-10 rounded-xl h-[calc(100vh-150px)] overflow-y-auto">
        <ProgressionBar proceed={proceed} />
        <BasicDetails
          proceed={proceed}
          handleProceed={handleProceed}
          handleCancel={handleCancel}
        />
        <LoansDetails
          proceed={proceed}
          handleProceed={handleProceed}
          handleCancel={handleCancel}
        />
        <OccupationDetails
          proceed={proceed}
          handleProceed={handleProceed}
          handleCancel={handleCancel}
        />
      </div>
    </div>
  );
};
export default Body;
