import React from "react";

const BasicDetails = () => {
  return (
    <div className=" w-8/12 h-full">
      <form className="w-full flex flex-col p-4 gap-3  ">
        <input type="text" placeholder="First Name" className="input w-full" />
        <input
          type="text"
          placeholder="Middle Name"
          className="input w-full "
        />
        <input type="text" placeholder="Last Name" className="input w-full " />
        <input type="date" className="input w-full " />
        <span className="w-full">
          <label className="input validator w-full">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input
              type="email"
              placeholder="mail@site.com"
              required
              className="w-full"
            />
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>
        </span>
        <span className="w-full">
          <label className="input validator w-full">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <g fill="none">
                <path
                  d="M7.25 11.5C6.83579 11.5 6.5 11.8358 6.5 12.25C6.5 12.6642 6.83579 13 7.25 13H8.75C9.16421 13 9.5 12.6642 9.5 12.25C9.5 11.8358 9.16421 11.5 8.75 11.5H7.25Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6 1C4.61929 1 3.5 2.11929 3.5 3.5V12.5C3.5 13.8807 4.61929 15 6 15H10C11.3807 15 12.5 13.8807 12.5 12.5V3.5C12.5 2.11929 11.3807 1 10 1H6ZM10 2.5H9.5V3C9.5 3.27614 9.27614 3.5 9 3.5H7C6.72386 3.5 6.5 3.27614 6.5 3V2.5H6C5.44771 2.5 5 2.94772 5 3.5V12.5C5 13.0523 5.44772 13.5 6 13.5H10C10.5523 13.5 11 13.0523 11 12.5V3.5C11 2.94772 10.5523 2.5 10 2.5Z"
                  fill="currentColor"
                ></path>
              </g>
            </svg>
            <input
              type="tel"
              className="tabular-nums"
              required
              placeholder="Phone"
              pattern="[0-9]*"
              minlength="10"
              maxlength="10"
              title="Must be 10 digits"
            />
          </label>
          <p className="validator-hint">Must be 10 digits</p>
        </span>
        <div id="addressDetails" className="flex flex-col gap-3">
          <label>Address Details</label>
          <input
            type="text"
            placeholder="Address Line 1"
            className="input w-full "
          />
          <input
            type="text"
            placeholder="Address Line 2"
            className="input w-full "
          />
          <input
            type="text"
            placeholder="Address Line 3"
            className="input w-full "
          />
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">
              Select Country
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BasicDetails;
