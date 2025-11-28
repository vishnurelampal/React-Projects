import { useFormik } from "formik";
import InputWithLabel from "../Components/CustomInputFields/InputWithLabel";
import {
  expenseField,
  expenseInititalValue,
  expenseValidationSchema,
} from "../Utilts/Constants";

const initialValues = expenseInititalValue;
const validationSchema = expenseValidationSchema;

const Expense = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form>
      <label>Expense</label>
      {expenseField.map((field) => (
        <InputWithLabel
          key={field.placeholder}
          type={field.type}
          placeholder={field.placeholder}
          formikObject={formik}
        />
      ))}
    </form>
  );
};

export default Expense;
