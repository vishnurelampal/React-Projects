import * as Yup from "yup";
const basicDetailsInputFields = [
  { type: "text", placeholder: "First Name" },
  { type: "text", placeholder: "Middle Name" },
  { type: "text", placeholder: "Last Name" },

  { type: "number", placeholder: "Mobile Number" },
  { type: "email", placeholder: "E-mail" },
  { type: "dropDown", placeholder: "Select Country" },
];
const addressFields = [
  { type: "text", placeholder: "Address Line 1" },
  { type: "text", placeholder: "Address Line 2" },
  { type: "text", placeholder: "Address Line 3" },
  { type: "text", placeholder: "City" },
];
const CountryArray = ["India", "USA", "UK", "Canada", "Australia"];
const emplyomentStatus = [
  "Employed",
  "Self-Employed",
  "Unemployed",
  "Student",
  "Retired",
];
const occupationFields = [
  { type: "dropDown", placeholder: "Select Occupation" },
  { type: "text", placeholder: "Current Employer Name" },
  { type: "text", placeholder: "Job Title" },
  { type: "text", placeholder: "Total Work Experience" },
  { type: "text", placeholder: "Total Income" },
  { type: "text", placeholder: "Other Income" },
  { type: "text", placeholder: "Source of Other Income" },
  { type: "text", placeholder: "Are you a salaried employee?" },
];
const arraysort = [
  ...basicDetailsInputFields.map((item) => item.placeholder),
  ...addressFields.map((item) => item.placeholder),
];
const initialValues = arraysort.reduce((acc, item) => {
  acc[item] = "";
  return acc;
}, {});
const errorMessageBasicDetails = arraysort.reduce((acc, item) => {
  acc[item] = true;
  return acc;
}, {});
const validationSchema = Yup.object(
  arraysort.reduce((acc, curr) => {
    if (curr == "Mobile Number") {
      acc[curr] = Yup.string()
        .matches(/^[0-9]{10}$/, "Mobile Number must be 10 digits")
        .required(`${curr} is required !`);
      return acc;
    } else if (curr == "Date Of Birth") {
      acc[curr] = Yup.date()
        .max(
          new Date(new Date().setFullYear(new Date().getFullYear() - 18)),
          "You must be at least 18 years old!"
        )
        .required(`${curr} is required!`);
      return acc;
    } else {
      acc[curr] =
        curr == "E-mail"
          ? Yup.string()
              .email("Invalid format !")
              .required(`${curr} is required !`)
          : Yup.string().required(`${curr} is required !`);
      return acc;
    }
  }, {})
);
const occValidationSchema = Yup.object(
  occupationFields.reduce((acc, curr) => {
    acc[curr.placeholder] = Yup.string().required(
      `${curr.placeholder} is required !`
    );
    return acc;
  }, {})
);
const arraysortOcc = occupationFields.map((item) => item.placeholder);
const occupationErrorMessage = arraysortOcc.reduce((acc, item) => {
  acc[item] = true;
  return acc;
}, {});
function checkAllFieldsFilled(obj) {
  if (Object.keys(obj).length === 0) return false;

  for (const key in obj) {
    if (obj[key] === "") return false;
  }
  return true;
}

const options = ["Home improvement", "Debt consolidation", "Business", "Car"];
const PreferedTermOptions = ["6 months", "12 months", "24 months", "36 months"];
const expenseField = [
  { type: "text", placeholder: "Monthly Rent" },
  { type: "text", placeholder: "Utilities" },
  { type: "text", placeholder: "Groceries" },
  { type: "text", placeholder: "Transportation" },
  { type: "text", placeholder: "Insurance" },
  { type: "text", placeholder: "Entertainment" },
  { type: "text", placeholder: "Dining Out" },
  { type: "text", placeholder: "Miscellaneous" },
];
const expenseSorted = expenseField.map((item) => item.placeholder);
const expenseInititalValue = expenseSorted.reduce((acc, item) => {
  acc[item] = "";
  return acc;
}, {});
const expenseErrorMessage = expenseSorted.reduce((acc, item) => {
  acc[item] = true;
  return acc;
}, {});
const expenseValidationSchema = Yup.object(
  expenseSorted.reduce((acc, item) => {
    acc[item] = Yup.string().required(`${item} is required !`);
    return acc;
  }, {})
);
console.log(expenseSorted);
export {
  addressFields,
  arraysortOcc,
  basicDetailsInputFields,
  checkAllFieldsFilled,
  CountryArray,
  emplyomentStatus,
  errorMessageBasicDetails,
  expenseErrorMessage,
  expenseField,
  expenseInititalValue,
  expenseValidationSchema,
  initialValues,
  occupationErrorMessage,
  occupationFields,
  occValidationSchema,
  options,
  PreferedTermOptions,
  validationSchema,
};
