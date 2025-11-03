import React from "react";
import { HandCoins } from "lucide-react";
function Header() {
  return (
    <div className="navbar bg-[#17272E] shadow-sm flex gap-3 ">
      <div className="ml-5 flex items-center">
        <span className="flex items-center gap-5">
          <HandCoins color="white" />
          <span className="flex gap-0 flex-col">
            <p className="text-white font-semibold">Australian </p>
            <p className="text-white font-semibold">Bank</p>
          </span>
        </span>
        <a className="btn btn-ghost hover:opacity-90 hover:text-black font-semibold text-sm text-white ml-8">
          Internet Banking
        </a>
        <a className="btn btn-ghost hover:opacity-90 hover:text-black text-sm text-white">
          Security Info
        </a>
        <a className="btn btn-ghost hover:opacity-90 hover:text-black text-sm text-white">
          About Us
        </a>
        <a className="btn btn-ghost hover:opacity-90 hover:text-black text-sm text-white">
          Contact Us
        </a>
      </div>
    </div>
  );
}

export default Header;
