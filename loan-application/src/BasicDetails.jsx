import React, { useEffect } from "react";
import InputWithLabel from "./InputWithLabel";
import DropDownWithLabel from "./DropDownWithLabel";
import {
  inputFields,
  addressFields,
  CountryArray,
  initialValues,
  validationSchema,
  checkAllFieldsFilled,
  errorMessageBasicDetails,
} from "./Utilts/Constants";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import Footer from "./Footer";
const BasicDetails = ({ handleProceed, handleCancel }) => {
  console.log("BasicDetails Rendered");
  const globalBasicDetails = useSelector(
    (state) => state.loanData.BasicDetails
  );
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema,
  });
  useEffect(() => {
    if (
      checkAllFieldsFilled(globalBasicDetails) &&
      !checkAllFieldsFilled(formik.values)
    ) {
      formik.setValues({ ...globalBasicDetails });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [globalBasicDetails]);
  function goForward() {
    for (const key in formik.values) {
      if (formik.values[key] === "") {
        formik.setTouched(errorMessageBasicDetails);
        // debugger;
        return;
      }
      if (formik.errors[key]) return;
    }

    handleProceed(formik);
  }

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
      <Footer handleProceed={goForward} handleCancel={handleCancel} />
    </div>
  );
};

export default BasicDetails;
