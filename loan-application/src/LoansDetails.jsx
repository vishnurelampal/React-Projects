import React from "react";
import DropDownWithLabel from "./DropDownWithLabel";
import Footer from "./Footer";
const options = ["Home improvement", "Debt consolidation", "Business", "Car"];
const PreferedTermOptions = ["6 months", "12 months", "24 months", "36 months"];
const LoansDetails = ({ proceed, handleProceed, handleCancel }) => {
  if (proceed !== 1) return null;

  return (
    <div className="p-5 h-full">
      <label className="text-sm font-semibold">Loans Details</label>
      <form className="flex flex-col mt-5">
        <DropDownWithLabel label={"Loan_purpose"} optionsArray={options} />
        <fieldset id="amountToBorrowed" className="fieldset w-8/12">
          <legend className="">Amount you want to borrow</legend>
          <input type="number" placeholder="$" className="h-9" />
        </fieldset>

        <DropDownWithLabel
          label={"Prefered_term"}
          optionsArray={PreferedTermOptions}
        />
      </form>
      <Footer handleProceed={handleProceed} handleCancel={handleCancel} />
    </div>
  );
};

export default LoansDetails;
