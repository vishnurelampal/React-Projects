import { useFormik } from "formik";
import {
  arraysortOcc,
  checkAllFieldsFilled,
  emplyomentStatus,
  occupationErrorMessage,
  occupationFields,
  occValidationSchema,
} from "../Utilts/Constants";
import DropDownWithSearch from "./CustomInputFields/DropDownWithSearch";
import InputWithLabel from "./CustomInputFields/InputWithLabel";
import Footer from "./Footer";

const OccupationDetails = ({ handleProceed, handleCancel }) => {
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
  function goForward() {
    if (checkAllFieldsFilled(formik.values)) {
      handleProceed(formik.values);
    } else {
      formik.setTouched(occupationErrorMessage);
    }
  }
  return (
    <div className="p-5 flex gap-3 flex-col">
      <label className="text-sm font-semibold">Occupation details</label>
      <form className="mt-5 flex flex-col gap-2">
        <DropDownWithSearch
          label="Select Occupation"
          optionsArray={emplyomentStatus}
          formikObject={formik}
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
      <Footer handleProceed={goForward} handleCancel={handleCancel} />
    </div>
  );
};

export default OccupationDetails;
