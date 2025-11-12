import React, { useCallback } from "react";
import InputWithLabel from "./InputWithLabel";
import DropDownWithLabel from "./DropDownWithLabel";
import {
  inputFields,
  addressFields,
  CountryArray,
  arraysort,
  validationSchema,
} from "./Utilts/Constants";
import { useFormik } from "formik";

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

  if (proceed !== 0) {
    if (proceed === 1) {
      console.log(formik.values);
    }
    return null;
  }
  const GoForward = () => {
    for (const key in formik.errors) {
      if (formik.errors[key]) return;
    }
    handleProceed();
    //  console.log(formik.values);
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
