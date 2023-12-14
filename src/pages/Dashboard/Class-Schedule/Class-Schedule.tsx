import React, { useState } from "react";

import { Calendar, CalendarProps } from "antd";
import { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
export default function ClassSchedule() {
  const [value, setValue] = useState(() => dayjs());
  const handleNextMonth = () => setValue(value.add(1, "month"));
  const handlePrevMonth = () => setValue(value.add(-1, "month"));
  console.log(value.format("DD-MM-YYYY"));
  const onSelect = (newValue: Dayjs) => {
    setValue(newValue);
  };
  const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>["mode"]) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };
  return (
    <Calendar
      headerRender={() => (
        <div className="">
          <div className="flex gap-x-4 p-4">
            <p
              className="border flex items-center px-2 cursor-pointer hover: border-[#D6D6D6]"
              onClick={handlePrevMonth}
            >
              <LeftOutlined style={{ color: "#D6D6D6" }} />
            </p>
            <p
              className="border flex items-center cursor-pointer px-2 border-[#D6D6D6]"
              onClick={handleNextMonth}
            >
              <RightOutlined style={{ color: "#D6D6D6" }} />
            </p>
            <button
              className="bg-customPrimary text-[white] px-4 py-2  "
              onClick={() => setValue(dayjs())}
            >
              Today
            </button>
            <h1 className="mx-auto text-2xl font-semibold">
              {value.format("MMMM DD YYYY")}
            </h1>
          </div>
        </div>
      )}
      value={value}
      onPanelChange={onPanelChange}
      onSelect={onSelect}
    />
  );
}
