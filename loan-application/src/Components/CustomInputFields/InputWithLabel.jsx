import { useState } from "react";
const InputWithLabel = ({ type, placeholder, formikObject }) => {
  const [floatingLabel, setFloatingLabel] = useState(false);
  const errorMsg = formikObject.errors[placeholder];
  function handleBlur(e) {
    formikObject.handleBlur(e);
    if (formikObject.values[placeholder] == "") {
      setFloatingLabel(false);
    } else {
      setFloatingLabel(true);
    }
  }
  if (type === "dropDown") return null;
  return (
    <fieldset id="" className="fieldset w-8/12">
      {(floatingLabel || formikObject.values[placeholder]) && (
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
      {errorMsg && formikObject.touched[placeholder] && (
        <p className="text-red-600 ">{errorMsg}</p>
      )}
    </fieldset>
  );
};

export default InputWithLabel;
