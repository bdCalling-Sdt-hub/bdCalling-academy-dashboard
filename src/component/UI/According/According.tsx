/* eslint-disable @typescript-eslint/no-explicit-any */
import { DownOutlined, RightOutlined } from "@ant-design/icons";
import React, { useState } from "react";

const According = ({ title, children }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border p-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleAccordion}
      >
        <button className="text-lg font-semibold ">
          {isOpen ? <DownOutlined /> : <RightOutlined />} {title}
        </button>
      </div>
      {isOpen && <div className="mt-2">{children}</div>}
    </div>
  );
};

export default According;
