/* eslint-disable @typescript-eslint/no-explicit-any */
import { DownOutlined, RightOutlined } from "@ant-design/icons";
import React, { useState } from "react";

const According = ({ title, index, children, moduleDuration }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="border p-4 border-[#333333]">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={toggleAccordion}
        >
          <button className="text-lg font-semibold text-[#333333] ">
            {isOpen ? <DownOutlined /> : <RightOutlined />}
            {index}. {title}
          </button>
          <button className="text-lg font-semibold text-[#333333] ">
            {moduleDuration}
          </button>
        </div>
      </div>
      {isOpen && <div className={``}>{children}</div>}
    </div>
  );
};

export default According;
