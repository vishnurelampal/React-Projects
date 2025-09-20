import React, { useState } from "react";
let x = 0;

const Demo = () => {
  const [val, setVal] = useState(0);

  return (
    <div className="">
      <div className="flex gap-1 flex-row">
        <h1>x value = {x}</h1>
        <button
          onClick={() => {
            x = x + 1;
            console.log(x);
          }}
        >
          CLick
        </button>
      </div>
      <div className="flex gap-4">
        <h1>y value = {val}</h1>
        <button
          onClick={() => {
            setVal(val + 1);
          }}
        >
          CLick
        </button>
      </div>
    </div>
  );
};

export default Demo;
