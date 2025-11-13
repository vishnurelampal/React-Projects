import React from "react";
import InputWithLabel from "./InputWithLabel";
import DropDownWithLabel from "./DropDownWithLabel";
import {
  inputFields,
  addressFields,
  CountryArray,
  arraysort,
  validationSchema,
  checkAllFieldsFilled,
} from "./Utilts/Constants";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { setBasicDetailsData } from "./Redux/loanDataSlicer";
import Footer from "./Footer";
const BasicDetails = ({ proceed, handleProceed, handleCancel }) => {
  const formik = useFormik({
    initialValues: arraysort.reduce((acc, curr) => {
      acc[curr] = "";
      return acc;
    }, {}),
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema,
  });
  const dispatch = useDispatch();
  const globalLoanData = useSelector((state) => state.loanData);

  if (proceed !== 0) {
    if (proceed === 1) {
      if (
        checkAllFieldsFilled(globalLoanData) &&
        !checkAllFieldsFilled(formik.values)
      ) {
        formik.setValues({ ...globalLoanData });
      }
    }
    return null;
  }

  const GoForward = () => {
    for (const key in formik.values) {
      if (formik.values[key] === "") return;
      if (formik.errors[key]) return;
    }
    handleProceed();
    dispatch(setBasicDetailsData(formik.values));
  };
  const GoBackward = () => {
    handleCancel();
  };

  return (
    <div className="h-full p-5">
      <label className="text-sm font-semibold">Basicdetails</label>
      <form
        className="w-full flex flex-col p-4 gap-3  "
        onSubmit={formik.onSubmit}
      >
        {inputFields.map((fields) => (
          <InputWithLabel
            key={fields.placeholder}
            placeholder={fields.placeholder}
            type={fields.type}
            formikObject={formik}
            error={formik.errors[fields.placeholder]}
          />
        ))}

        <div id="addressDetails" className="flex flex-col gap-3">
          <label>Address Details</label>
          {addressFields.map((fields) => (
            <InputWithLabel
              key={fields.placeholder}
              type={fields.type}
              placeholder={fields.placeholder}
              formikObject={formik}
              error={formik.errors[fields.placeholder]}
            />
          ))}
          <DropDownWithLabel
            label="Select Country"
            optionsArray={CountryArray}
          />
        </div>
      </form>
      <Footer handleProceed={GoForward} handleCancel={GoBackward} />
    </div>
  );
};

export default BasicDetails;
