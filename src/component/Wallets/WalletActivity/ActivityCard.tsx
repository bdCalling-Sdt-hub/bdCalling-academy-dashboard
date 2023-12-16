/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArrowDownOutlined } from "@ant-design/icons";

export default function ActivityCard({ wallet }: any) {
  const { method, amount, time } = wallet;
  const handleDownload = (id: string) => {
    console.log(id);
  };
  return (
    <div className="flex justify-between my-4 ">
      <div
        onClick={() => handleDownload("id")}
        className="border  border-[#7A7A7A] p-[10px] cursor-pointer flex justify-center rounded h-[26px] w-[26px] text"
      >
        <ArrowDownOutlined style={{ color: "#2BA24C" }} />
      </div>
      <p>{method}</p>
      <p>{time}</p>
      <p>BDT {amount}</p>
    </div>
  );
}
