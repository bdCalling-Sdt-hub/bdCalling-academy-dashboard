/* eslint-disable @typescript-eslint/no-explicit-any */
import { DownOutlined, RightOutlined } from "@ant-design/icons";
import React, { useState } from "react";

const According = ({
  title,
  index,
  children,
  moduleDuration,
  moduleLenth,
}: any) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(moduleLenth, "module length");
  console.log(index);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  const shouldApplyBottomBorder = !isOpen && index === moduleLenth - 1;
  console.log(shouldApplyBottomBorder);
  return (
    <div>
      <div
        className={`border-t-2 border-x-2 p-4 border-[#858585] ${
          shouldApplyBottomBorder ? "border-b-2" : ""
        }`}
      >
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={toggleAccordion}
        >
          <button className="text-lg  text-customHeader ">
            {isOpen ? <DownOutlined /> : <RightOutlined />}
            <span className="ms-2">
              {index}. {title}
            </span>
          </button>
          <button className="text-lg  text-customHeader ">
            {moduleDuration}
          </button>
        </div>
      </div>
      {isOpen && <div className={`p-4`}>{children}</div>}
    </div>
  );
};

export default According;
