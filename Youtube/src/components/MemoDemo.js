import React, { useState } from "react";
import { findNthPrime } from "./../utils/HelperFunctions";
import { useMemo } from "react";
const MemoDemo = () => {
  const [val, setval] = useState();
  const [theme, toggleDarkTheme] = useState(false);
  const [primeNum, setPrimeNum] = useState();
  const prime = useMemo(() => {
    findNthPrime(val);
  }, [val]);
  return (
    <div
      className={`flex ml-6  mt-10 gap-2 h-[450px]  border-4 border-black ${
        theme ? "bg-gray-800" : "bg-white"
      }`}
    >
      <input
        className="h-3/6"
        type="number"
        value={val}
        placeholder="Enter the number"
        onChange={(e) => {
          setval(e.target.value);
          setPrimeNum(findNthPrime(val));
        }}
      />
      <h1>Prime Number : {primeNum}</h1>
      <button
        className="bg-slate-400"
        onClick={() => {
          toggleDarkTheme(!theme);
          console.log(theme);
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default MemoDemo;
