import React, { useState } from "react";
import DropDownWithLabel from "./DropDownWithLabel";
import Footer from "./Footer";
import {
  checkAllFieldsFilled,
  options,
  PreferedTermOptions,
} from "./Utilts/Constants";
import { useDispatch, useSelector } from "react-redux";
import { setLoansDetailsData } from "./Redux/loanDataSlicer";
const LoansDetails = ({ proceed, handleProceed, handleCancel }) => {
  const [amountBorrwed, setLoanFields] = useState("");
  const [dropDownVal, setDropDownVal] = useState({
    Loan_purpose: "",
    Prefered_term: "",
  });
  if (proceed !== 1) return null;

  const dispatch = useDispatch();
  const globalLoanData = useSelector((state) => state.loanData);
  function GoForward() {
    const loanData = {
      ...dropDownVal,
      Amount_to_borrow: amountBorrwed,
    };

    checkAllFieldsFilled(loanData) && handleProceed();
    dispatch(setLoansDetailsData(loanData));
  }
  function GoBackward() {
    handleCancel();
  }
  function handleChange(e, label) {
    setDropDownVal((prev) => ({
      ...prev,
      [label.replaceAll(" ", "_")]: e.target.value,
    }));
  }
  return (
    <div className="p-5 h-full">
      <label className="text-sm font-semibold">Loans Details</label>
      <form className="flex flex-col mt-5">
        <DropDownWithLabel
          label={"Loan_purpose"}
          optionsArray={options}
          handleChange={handleChange}
        />
        <fieldset id="amountToBorrowed" className="fieldset w-8/12">
          <legend className="">Amount you want to borrow</legend>
          <input
            type="number"
            placeholder="$"
            className="h-9"
            value={amountBorrwed}
            onChange={(e) => {
              setLoanFields(e.target.value);
            }}
          />
        </fieldset>

        <DropDownWithLabel
          label={"Prefered_term"}
          optionsArray={PreferedTermOptions}
          handleChange={handleChange}
        />
      </form>
      <Footer handleProceed={GoForward} handleCancel={GoBackward} />
    </div>
  );
};

export default LoansDetails;
