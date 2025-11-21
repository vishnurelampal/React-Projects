const ProgressionBar = ({ proceed }) => {
  return (
    <ul className="steps w-11/12 ml-2 mt-5  py-5 rounded-xl">
      <li className="step step-primary">BasicDetails</li>
      <li className={`step ${proceed > 0 && "step-primary"}`}>Loans</li>
      <li className={`step ${proceed > 1 && "step-primary"}`}>Income</li>
      <li className={`step ${proceed > 2 && "step-primary"}`}>Expense</li>
      <li className={`step ${proceed > 3 && "step-primary"}`}>
        Identification
      </li>
    </ul>
  );
};

export default ProgressionBar;
