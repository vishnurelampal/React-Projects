import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  checkAllFieldsFilled,
  options,
  PreferedTermOptions,
} from "../Utilts/Constants";
import DropDownWithLabel from "./CustomInputFields/DropDownWithLabel";
import Footer from "./Footer";

const LoansDetails = ({ handleProceed, handleCancel }) => {
  const [amountBorrwed, setLoanFields] = useState("");
  const [dropDownVal, setDropDownVal] = useState({
    Loan_purpose: "",
    Prefered_term: "",
  });
  const globalLoanData = useSelector((state) => state.loanData.LoanDetails);
  const loanData = {
    ...dropDownVal,
    Amount_to_borrow: amountBorrwed,
  };
  useEffect(() => {
    if (
      checkAllFieldsFilled(globalLoanData) &&
      !checkAllFieldsFilled(loanData)
    ) {
      const { Loan_purpose, Prefered_term } = globalLoanData;
      const data = { Loan_purpose, Prefered_term };
      setLoanFields(globalLoanData.Amount_to_borrow);
      setDropDownVal(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [globalLoanData]);
  console.log("LoansDetails Rendered");

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
          value={dropDownVal.Loan_purpose}
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
          value={dropDownVal.Prefered_term}
        />
      </form>
      <Footer
        handleProceed={() => {
          handleProceed(loanData);
        }}
        handleCancel={handleCancel}
      />
    </div>
  );
};

export default LoansDetails;
