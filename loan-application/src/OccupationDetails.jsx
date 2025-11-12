import React from "react";
import DropDownWithLabel from "./DropDownWithLabel";
import {
  arraysortOcc,
  emplyomentStatus,
  occupationFields,
  occValidationSchema,
} from "./Utilts/Constants";
import InputWithLabel from "./InputWithLabel";
import Footer from "./Footer";
import { useFormik } from "formik";

const OccupationDetails = ({ proceed, handleProceed, handleCancel }) => {
  const validationSchema = occValidationSchema;
  const formik = useFormik({
    initialValues: arraysortOcc.reduce((acc, curr) => {
      acc[curr] = "";
      return acc;
    }, {}),
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema,
  });
  if (proceed !== 2) return null;
  return (
    <div className="p-5">
      <label className="text-sm font-semibold">Occupation details</label>
      <form>
        <DropDownWithLabel
          label={"Current emplyoment status"}
          optionsArray={emplyomentStatus}
        />
        {occupationFields.map((fields) => (
          <InputWithLabel
            key={fields.placeholder}
            type={fields.type}
            placeholder={fields.placeholder}
            formikObject={formik}
            error={formik.errors[fields.placeholder]}
          />
        ))}
      </form>
      <Footer handleProceed={handleProceed} handleCancel={handleCancel} />
    </div>
  );
};

export default OccupationDetails;
