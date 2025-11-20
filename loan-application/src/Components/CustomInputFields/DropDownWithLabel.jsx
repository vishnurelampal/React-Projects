const DropDownWithLabel = ({ label, optionsArray, handleChange, value }) => {
  label = label.replaceAll("_", " ");

  return (
    <fieldset id="loanPurpose" className="fieldset w-8/12">
      <legend className="fieldset-legend flex ">{label}</legend>

      <select
        value={value}
        onChange={(e) => handleChange(e, label)}
        defaultValue="Pick a browser"
        className="select w-full outline-none"
      >
        <option value={""}>Please Select</option>
        {optionsArray.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </fieldset>
  );
};

export default DropDownWithLabel;
