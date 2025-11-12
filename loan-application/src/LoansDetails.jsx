import React from "react";
import DropDownWithLabel from "./DropDownWithLabel";
import InputWithLabel from "./InputWithLabel";
const options = ["Home improvement", "Debt consolidation", "Business", "Car"];
const PreferedTermOptions = ["6 months", "12 months", "24 months", "36 months"];
const LoansDetails = ({ proceed }) => {
  if (proceed !== 1) return null;
  return (
    <div className="p-5">
      <label className="text-sm font-semibold">Loans Details</label>
      <form className="flex flex-col mt-5">
        <DropDownWithLabel label={"Loan_purpose"} optionsArray={options} />
        <InputWithLabel
          label="Amount_you_want_to_borrow"
          type="number"
          placeholder="$"
        />
        <DropDownWithLabel
          label={"Prefered_term"}
          optionsArray={PreferedTermOptions}
        />
      </form>
    </div>
  );
};

export default LoansDetails;
