/* eslint-disable @typescript-eslint/no-explicit-any */
import { DownOutlined, EditOutlined, RightOutlined } from "@ant-design/icons";
import React, { useState } from "react";

const According = ({
  title,
  editable = false,
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
          className=" cursor-pointer flex justify-between"
          onClick={toggleAccordion}
        >
          <button className="text-lg flex items-center  text-customHeader ">
            <div>{isOpen ? <DownOutlined /> : <RightOutlined />}</div>
            <div className="ms-2">
              {index}. {title}
            </div>
          </button>
          <button className="text-lg  text-customHeader ">
            {moduleDuration}
          </button>
          {editable && (
            <button className="border px-4 py-2 bg-customPrimary text-[#fff] font-bold">
              <EditOutlined />
            </button>
          )}
        </div>
      </div>
      {isOpen && <div className={`p-4`}>{children}</div>}
    </div>
  );
};

export default According;
