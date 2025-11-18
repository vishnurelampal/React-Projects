import React from "react";

const ProgressionBar = ({ proceed }) => {
  return (
    <ul className="steps w-11/12 ml-2 mt-5 bg-[#F6F6F6]">
      <li className="step step-neutral">BasicDetails</li>
      <li className={`step ${proceed > 0 && "step-neutral"}`}>Loans</li>
      <li className={`step ${proceed > 1 && "step-neutral"}`}>Income</li>
      <li className={`step ${proceed > 2 && "step-neutral"}`}>Expense</li>
      <li className={`step ${proceed > 3 && "step-neutral"}`}>
        Identification
      </li>
    </ul>
  );
};

export default ProgressionBar;
