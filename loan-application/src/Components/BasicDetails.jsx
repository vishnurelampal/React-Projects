import { useFormik } from "formik";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  addressFields,
  basicDetailsInputFields,
  checkAllFieldsFilled,
  CountryArray,
  errorMessageBasicDetails,
  initialValues,
  validationSchema,
} from "../Utilts/Constants";
import DropDownWithSearch from "./CustomInputFields/DropDownWithSearch";
import InputWithLabel from "./CustomInputFields/InputWithLabel";
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
        {basicDetailsInputFields.map((fields) => (
          <InputWithLabel
            key={fields.placeholder}
            placeholder={fields.placeholder}
            type={fields.type}
            formikObject={formik}
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
            />
          ))}
          <DropDownWithSearch
            label="Select Country"
            optionsArray={CountryArray}
            formikObject={formik}
          />
        </div>
      </form>
      <Footer handleProceed={goForward} handleCancel={handleCancel} />
    </div>
  );
};

export default BasicDetails;
