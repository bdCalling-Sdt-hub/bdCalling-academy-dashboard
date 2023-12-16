import style from "./walletactivity.module.css";
import { DatePicker } from "antd";
import dayjs from "dayjs";
// import type { DatePickerProps } from "antd";
import { useEffect, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import ActivityCard from "./ActivityCard";
export default function WalletActivity() {
  const [isVisible, setIsvisilbe] = useState(false);
  const [data, setdata] = useState([]);
  const [startDate, setStartDate] = useState<dayjs.Dayjs | null>(null);
  const [endDate, setEndDate] = useState<dayjs.Dayjs | null>(null);
  console.log(startDate, endDate);
  //   const onChange: DatePickerProps["onChange"] = (date, dateString) => {};
  useEffect(() => {
    fetch("./studentWallet.json")
      .then((res) => res.json())
      .then((data) => setdata(data));
  }, []);
  const handleFiltering = () => {
    setIsvisilbe(false);
  };

  return (
    <div
      className="p-6 rounded-lg relative"
      style={{
        backgroundColor: "#FFFFFF",
        boxShadow: "#000000",
      }}
    >
      <div className="flex justify-between">
        <h1 className="text-[22px] font-semibold">Overview Balance</h1>
        {/* <Dropdown
          open={dropdownOpen}
          onOpenChange={handleOpenChange}
          menu={{
            items,
            selectable: true,
            defaultSelectedKeys: ["1"],
            onClick,
          }}
        >
          <button className={style.dateRang}>
            Date Range <DownOutlined />
          </button>
        </Dropdown> */}
        <button
          className={style.dateRange}
          onClick={() => setIsvisilbe(!isVisible)}
        >
          Date Range <DownOutlined />
        </button>
      </div>
      <div>
        {data?.map((wallet, index) => (
          <ActivityCard key={index} wallet={wallet} />
        ))}
      </div>

      {isVisible && (
        <div className="flex justify-between  bg-[#ffffff] border-2 rounded border-[#8B8B8B]  p-2 gap-x-14 parent  absolute z-50  transform bottom-4">
          <div className="relative " onClick={(e) => e.stopPropagation()}>
            <div className={`${style.date} `}>
              <p className="absolute z-99  bg-white bottom-[30px] font-bold text-[#000] left-4 rounded  bg-[#fff]">
                From
              </p>
              <DatePicker
                defaultOpen={true}
                onChange={(date) => setStartDate(date)}
                bordered={false}
                placeholder="start date"
              />
            </div>
          </div>
          <div className="relative " onClick={(e) => e.stopPropagation()}>
            <div className={`${style.date} `}>
              <p className="absolute z-99 bg-white bottom-[30px] font-bold text-[#000] left-4 rounded  bg-[#fff]">
                To
              </p>
              <DatePicker
                onChange={(date) => setEndDate(date)}
                bordered={false}
                placeholder="End Date"
              />
            </div>
          </div>
          <div className="" onClick={(e) => e.stopPropagation()}>
            <button className={style.setBtn} onClick={() => handleFiltering()}>
              Set Date
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
