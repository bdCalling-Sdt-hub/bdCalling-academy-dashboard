/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import style from "./walletactivity.module.css";
import { DatePicker } from "antd";
import dayjs from "dayjs";
// import type { DatePickerProps } from "antd";
import { useEffect, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import ActivityCard from "./ActivityCard";
import { useGetAllWalletActivityDataQuery } from "../../../redux/api/walletApi";
import NoData from "../../../utils/NoData";
export default function WalletActivity() {
  const [isVisible, setIsvisilbe] = useState(false);

  const [startDate, setStartDate] = useState<dayjs.Dayjs | null>(null);
  const [endDate, setEndDate] = useState<dayjs.Dayjs | null>(null);
  console.log(startDate, endDate);
  //   const onChange: DatePickerProps["onChange"] = (date, dateString) => {};

  const handleFiltering = () => {
    setIsvisilbe(false);
  };
  const { data, isLoading } = useGetAllWalletActivityDataQuery(undefined);

  const formatedData = data
    ?.filter((filterableData: any) => filterableData?.status === "Processing")
    ?.map((wallet: any) => {
      return {
        id: wallet?.id,
        studentName: wallet?.student?.userName,
        getway: wallet?.gateway_name,
        amount: wallet?.amount,
        date: wallet?.created_at,
        transaction_id: wallet?.transaction_id,
      };
    });

  return (
    <div
      className="p-6 rounded-lg  "
      style={{
        backgroundColor: "#FFFFFF",
        boxShadow: "#000000",
      }}
    >
      <div className="flex justify-between mb-4">
        <h1 className="text-[22px] font-semibold ">Wallet Activity</h1>
      </div>
      {/* <button
          className={style.dateRange}
          onClick={() => setIsvisilbe(!isVisible)}
        >
          Date Range <DownOutlined />
        </button> */}
      {/* {formatedData?.length > 0 ? (
        <div className="overflow-y-auto h-[450px]  max-h-[450px]">
          {formatedData?.map((wallet: any, index: number) => (
            <ActivityCard key={index} wallet={wallet} />
          ))}
        </div>
      ) : (
        <div className="mt-20">
          <NoData />
        </div>
      )} */}

      <ActivityCard wallet={formatedData} loading={isLoading} />
      {/* {isVisible && (
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
      )} */}
    </div>
  );
}
