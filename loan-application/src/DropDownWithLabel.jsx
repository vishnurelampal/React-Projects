import React from "react";

const DropDownWithLabel = ({ label, optionsArray, handleChange }) => {
  label = label.replaceAll("_", " ");

  return (
    <fieldset id="loanPurpose" className="fieldset w-8/12">
      <legend className="fieldset-legend">{label}</legend>
      <select
        onChange={(e) => handleChange(e, label)}
        defaultValue="Pick a browser"
        className="select w-full outline-none"
      >
        <option>Please select</option>
        {optionsArray.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </fieldset>
  );
};

export default DropDownWithLabel;
