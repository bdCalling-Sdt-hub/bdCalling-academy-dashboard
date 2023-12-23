/* eslint-disable @typescript-eslint/no-explicit-any */
import { DownOutlined } from "@ant-design/icons";
import React, { useState } from "react";

const Dropdown = ({ label, buttonText, options, onOptionSelect }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left z-40">
      <div
        onClick={toggleDropdown}
        className="flex items-center gap-x-3 py-[8px] px-[20px] cursor-pointer border border-[#858585] "
      >
        <p className="text-[#858585]">{label}:</p>
        <div className="flex items-center gap-x-4">
          <button>{buttonText}</button>
          {/* You can replace the DownOutlined with your custom dropdown indicator */}
          <span>
            {" "}
            <DownOutlined />{" "}
          </span>
        </div>
      </div>

      {isOpen && (
        <div className="absolute mt-2 bg-[#F6F8FA] left-1/2 transform -translate-x-1/2 w-full max-w-[300px] border bg-white  border-[#858585] rounded shadow-md p-[10px] transition duration-300">
          {options.map((option: any, index: number) => (
            <div
              key={index}
              onClick={() => {
                setIsOpen(false);

                onOptionSelect(option);
              }}
              className="hover:text-customPrimary cursor-pointer text-[#858585] py-[6px]"
            >
              {option.value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
