import React, { useState } from "react";
const InputWithLabel = ({ type, placeholder, formikObject, error }) => {
  const [floatingLabel, setFloatingLabel] = useState(false);
  const { handleBlur } = formikObject;
  console.log(formikObject);
  return (
    <fieldset id="amountToBorrowed" className="fieldset w-8/12">
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
          formikObject.handleBlur(e);
          setFloatingLabel(false);
        }}
        className="input outline-0 w-full"
        placeholder={floatingLabel ? placeholder : undefined}
      />
      {error && formikObject.touched[placeholder] && <p>{error}</p>}
    </fieldset>
  );
};

export default InputWithLabel;
