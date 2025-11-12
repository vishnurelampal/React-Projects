import React, { useState } from "react";
import BasicDetails from "./BasicDetails";
import LoansDetails from "./LoansDetails";
import OccupationDetails from "./OccupationDetails";
import ProgressionBar from "./ProgressionBar";
import Footer from "./Footer";

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
      <div className="border border-[#EAEAEA] m-5 mr-10 rounded-xl h-full overflow-y-auto">
        <ProgressionBar proceed={proceed} />
        <BasicDetails proceed={proceed} />
        <LoansDetails proceed={proceed} />
        <OccupationDetails proceed={proceed} />
      </div>
      <Footer handleProceed={handleProceed} handleCancel={handleCancel} />
    </div>
  );
};
export default Body;
