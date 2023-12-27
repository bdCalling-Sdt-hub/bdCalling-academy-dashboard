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
    fetch("/studentWallet.json")
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
        <div className="flex justify-between items-center  shadow-md  bg-[#ffffff]  rounded   p-2 gap-x-14 parent  absolute z-50   bottom-4">
          <div className="relative " onClick={(e) => e.stopPropagation()}>
            <div className={`${style.date} `}>
              <p className="absolute  bottom-[34px] font-bold bg-[white] px-2 text-[#000] left-4 rounded ">
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
              <p className="absolute bg-white bg-[white] px-2  bottom-[34px] font-bold text-[#000] left-4 rounded  ">
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
