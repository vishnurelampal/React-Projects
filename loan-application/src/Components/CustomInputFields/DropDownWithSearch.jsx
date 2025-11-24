import { ChevronDown, ChevronUp, Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
const DropDownWithSearch = ({ label, optionsArray, formikObject }) => {
  label = label.replaceAll("_", " ");
  const [inputSearched, setInputSearched] = useState("");
  const [show, setshow] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState(optionsArray);
  const [optionSetter, setOptionSetter] = useState(label);
  const errorMsg = formikObject.errors[label];
  console.log(errorMsg);
  const dropDownRef = useRef(null);
  function handleChangeInput(e) {
    const input = e.target.value;
    setInputSearched(input);
    const tempFiltered = optionsArray.filter((item) =>
      item.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredOptions(tempFiltered);
  }

  function handleOptionSelect(selected) {
    setOptionSetter(selected);
    setshow(false);
    formikObject.setFieldValue(label, selected);
  }

  useEffect(() => {
    if (
      formikObject.values[label] !== "" &&
      formikObject.values[label] != undefined
    ) {
      setOptionSetter(formikObject.values[label]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formikObject.values[label]]);
  useEffect(() => {
    if (show && dropDownRef.current) {
      dropDownRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [show]);
  return (
    <div className="flex gap-1 flex-col">
      <label className="font-semibold text-xs " htmlFor={label}>
        {label}
      </label>
      <div
        id={label}
        aria-label={label}
        onClick={() => {
          setshow((prev) => !prev);
        }}
        className="flex align-middle border border-[#D1D1D1] w-8/12 h-9 rounded-sm p-2 justify-between"
      >
        <p className="font-normal text-sm ml-2">{optionSetter}</p>
        {show ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </div>
      {errorMsg && (
        <p className="font-normal text-sm text-red-600">{errorMsg}</p>
      )}
      {show && (
        <div>
          <span className="border border-[#D1D1D1]  w-8/12  rounded-sm flex items-center p-1 gap-2">
            <Search size={18} color={"#D1D1D1"} />
            <input
              className="w-8/12 focus:outline-none "
              value={inputSearched}
              onChange={handleChangeInput}
              placeholder="Search.."
            />
          </span>
          <ul className="bg-white " ref={dropDownRef}>
            {filteredOptions.map((item) => (
              <span key={item} className="w-8/12">
                <li
                  onClick={() => {
                    handleOptionSelect(item);
                  }}
                  className={`pl-4 hover:bg-gray-200 cursor-pointer py-2 w-8/12 text-xs ${
                    item === optionSetter && "text-[#0E00FF] bg-gray-300"
                  }`}
                >
                  {item}
                </li>
              </span>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDownWithSearch;
