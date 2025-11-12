import React from "react";
import DropDownWithLabel from "./DropDownWithLabel";
import { emplyomentStatus, occupationFields } from "./Utilts/Constants";
import InputWithLabel from "./InputWithLabel";

const OccupationDetails = ({ proceed }) => {
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
          />
        ))}
      </form>
    </div>
  );
};

export default OccupationDetails;
