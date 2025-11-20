import { useState } from "react";
import { useDispatch } from "react-redux";
import { setBasicDetailsData, setLoanData } from "../Redux/loanDataSlicer";
import { checkAllFieldsFilled } from "../Utilts/Constants";
import BasicDetails from "./BasicDetails";
import LoansDetails from "./LoansDetails";
import OccupationDetails from "./OccupationDetails";
import ProgressionBar from "./ProgressionBar";
const Body = () => {
  const dispatch = useDispatch();
  const [proceed, setPrcoceed] = useState(0);
  function handleProceed(data) {
    if (proceed === 0) {
      console.log("proceed is 0");
      dispatch(setBasicDetailsData(data.values));
    } else if (proceed === 1) {
      if (!checkAllFieldsFilled(data)) return;
      dispatch(setLoanData(data));
    }

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
        {proceed === 0 && (
          <BasicDetails
            handleProceed={handleProceed}
            handleCancel={handleCancel}
          />
        )}
        {proceed === 1 && (
          <LoansDetails
            proceed={proceed}
            handleProceed={handleProceed}
            handleCancel={handleCancel}
          />
        )}
        {proceed === 2 && (
          <OccupationDetails
            proceed={proceed}
            handleProceed={handleProceed}
            handleCancel={handleCancel}
          />
        )}
      </div>
    </div>
  );
};
export default Body;
