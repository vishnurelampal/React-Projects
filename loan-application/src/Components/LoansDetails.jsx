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
  const [errors, setErrors] = useState({
    Amount_to_borrow: "",
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
    label = label.replaceAll(" ", "_");
    setDropDownVal((prev) => ({
      ...prev,
      [label]: e.target.value,
    }));

    if (e.target.value !== "") {
      setErrors((prev) => ({
        ...prev,
        [label]: "",
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        [label]: `${label.replaceAll("_", " ")} is required`,
      }));
    }
  }
  function goFrorward() {
    if (checkAllFieldsFilled(loanData)) {
      handleProceed(loanData);
    } else {
      const tempObj = {};
      for (const key in loanData) {
        if (loanData[key] === "") {
          tempObj[key] = `${key.replaceAll("_", " ")} is required`;
        }
      }
      setErrors(tempObj);
    }
  }
  return (
    <div className="p-5 h-full">
      <label className="text-sm font-semibold">Loans Details</label>
      <form className="flex flex-col mt-5 gap-5">
        <div>
          <DropDownWithLabel
            label={"Loan_purpose"}
            optionsArray={options}
            value={dropDownVal.Loan_purpose}
            handleChange={handleChange}
          />
          {errors.Loan_purpose !== "" && (
            <p className="text-red-600 text-xs font-semibold">
              {errors.Loan_purpose}
            </p>
          )}
        </div>

        <fieldset id="amountToBorrowed" className="fieldset w-8/12">
          <legend className="">Amount you want to borrow</legend>
          <input
            type="number"
            placeholder="$"
            className="h-9"
            value={amountBorrwed}
            onChange={(e) => {
              if (e.target.value == "") {
                setErrors((prev) => ({
                  ...prev,
                  ["Amount_to_borrow"]: "Amount to borrow is required",
                }));
              } else {
                setErrors((prev) => ({
                  ...prev,
                  ["Amount_to_borrow"]: "",
                }));
              }

              setLoanFields(e.target.value);
            }}
          />
          {errors.Amount_to_borrow !== "" && (
            <p className="text-red-600 text-xs font-semibold">
              {errors.Amount_to_borrow}
            </p>
          )}
        </fieldset>

        <div>
          <DropDownWithLabel
            label={"Prefered_term"}
            optionsArray={PreferedTermOptions}
            handleChange={handleChange}
            value={dropDownVal.Prefered_term}
          />
          {errors.Prefered_term !== "" && (
            <p className="text-red-600 text-xs font-semibold">
              {errors.Prefered_term}
            </p>
          )}
        </div>
      </form>
      <Footer handleProceed={goFrorward} handleCancel={handleCancel} />
    </div>
  );
};

export default LoansDetails;
