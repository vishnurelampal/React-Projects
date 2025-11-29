import { useFormik } from "formik";
import InputWithLabel from "../Components/CustomInputFields/InputWithLabel";
import {
  checkAllFieldsFilled,
  expenseErrorMessage,
  expenseField,
  expenseInititalValue,
  expenseValidationSchema,
} from "../Utilts/Constants";
import Footer from "./Footer";

const initialValues = expenseInititalValue;
const validationSchema = expenseValidationSchema;

const Expense = ({ handleProceed, handleCancel }) => {
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema,
  });

  function goForward() {
    debugger;
    console.log(formik);
    if (checkAllFieldsFilled(formik.values)) {
      handleProceed(formik);
    } else {
      formik.setTouched(expenseErrorMessage);
    }
  }
  console.log(formik);
  return (
    <form
      className="p-5 flex flex-col gap-2"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label>Expense</label>
      {expenseField.map((field) => (
        <InputWithLabel
          key={field.placeholder}
          type={field.type}
          placeholder={field.placeholder}
          formikObject={formik}
        />
      ))}
      <Footer handleProceed={goForward} handleCancel={handleCancel} />
    </form>
  );
};

export default Expense;
