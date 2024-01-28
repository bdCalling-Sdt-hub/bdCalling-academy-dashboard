/* eslint-disable @typescript-eslint/no-explicit-any */
// import { ArrowDownOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

export default function ActivityCard({ wallet }: any) {
  const { date, getway, transaction_id, amount, studentName } = wallet;
  // const handleDownl  oad = (id: string) => {
  //   console.log(id);
  // };
  const formatedData = dayjs(date).format("YYYY-MM-DD");

  return (
    <div className="flex justify-between my-4 h-[44px]  pr-4">
      {/* <div
        onClick={() => handleDownload("id")}
        className="border  border-[#7A7A7A] p-[10px] cursor-pointer flex justify-center rounded h-[26px] w-[26px] text"
      >
        <ArrowDownOutlined style={{ color: "#2BA24C" }} />
      </div> */}
      <p>{studentName}</p>
      <p>{getway}</p>
      <p>{transaction_id}</p>
      <p>{formatedData}</p>
      <p>BDT {amount}</p>
    </div>
  );
}
