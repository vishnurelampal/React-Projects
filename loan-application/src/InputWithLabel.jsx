import React, { useState } from "react";
const InputWithLabel = ({ type, placeholder, formikObject, error }) => {
  const [floatingLabel, setFloatingLabel] = useState(false);

  function handleBlur(e) {
    formikObject.handleBlur(e);
    if (formikObject.values[placeholder] == "") {
      setFloatingLabel(false);
    } else {
      setFloatingLabel(true);
    }
  }

  return (
    <fieldset id="" className="fieldset w-8/12">
      {floatingLabel && (
        <legend className="fieldset-legend">{placeholder}</legend>
      )}
      <input
        onChange={formikObject.handleChange}
        value={formikObject.values[placeholder]}
        id={placeholder}
        name={placeholder}
        type={type}
        onFocus={() => {
          setFloatingLabel(true);
        }}
        onBlur={(e) => {
          handleBlur(e);
        }}
        className="input outline-0 w-full"
        placeholder={!floatingLabel ? placeholder : undefined}
      />
      {error && formikObject.touched[placeholder] && (
        <p className="text-red-600 ">{error}</p>
      )}
    </fieldset>
  );
};

export default InputWithLabel;
