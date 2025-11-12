import React from "react";
import InputWithLabel from "./InputWithLabel";
import DropDownWithLabel from "./DropDownWithLabel";
import { inputFields, addressFields, CountryArray } from "./Utilts/Constants";
import { useFormik } from "formik";
const BasicDetails = ({ proceed }) => {
  const arraysort = [
    ...inputFields.map((item) => item.placeholder),
    ...addressFields.map((item) => item.placeholder),
  ];
  const formik = useFormik({
    initialValues: arraysort.reduce((acc, curr) => {
      acc[curr] = "";
      return acc;
    }, {}),
    onSubmit: (values) => {
      console.log(values);
    },
    validate: (value) => {
      let error = {};
      if (!value["First Name"]) {
        error["First Name"] = "Required";
      }
      if (!value["Last Name"]) {
        error["Last Name"] = "Required Last name";
      }

      return error;
    },
  });

  if (proceed !== 0) {
    if (proceed === 1) {
      console.log(formik.values);
    }
    return null;
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
            key={fields.label}
            placeholder={fields.placeholder}
            type={fields.type}
            label={fields.label}
            formikObject={formik}
            error={formik.errors[fields.placeholder]}
          />
        ))}

        <div id="addressDetails" className="flex flex-col gap-3">
          <label>Address Details</label>
          {addressFields.map((fields) => (
            <InputWithLabel
              key={fields.label}
              type={fields.type}
              label={fields.label}
              placeholder={fields.placeholder}
              formikObject={formik}
            />
          ))}
          <DropDownWithLabel
            label="Select Country"
            optionsArray={CountryArray}
          />
        </div>
      </form>
    </div>
  );
};

export default BasicDetails;
