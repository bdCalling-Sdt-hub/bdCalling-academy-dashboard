/* eslint-disable @typescript-eslint/no-explicit-any */
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, MenuProps, message } from "antd";
import style from "./walletchart.module.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { useGetAllIncomeInChartQuery } from "../../../redux/api/walletApi";
import { useState } from "react";

export default function WalletChart() {
  const query: Record<string, any> = {};
  const [queries, setQuery] = useState("month");
  query["data"] = queries;
  const { data } = useGetAllIncomeInChartQuery(query);

  const items: MenuProps["items"] = [
    {
      key: "month",
      label: "Monthly",
    },
    {
      key: "year",
      label: "Yearly",
    },
  ];
  // const total = data.reduce((acc, item) => acc + item.income, 0);
  const onClick: MenuProps["onClick"] = ({ key }) => {
    message.info(`Click on item ${key}`);
    setQuery(key);
  };
  const income = data?.reduce((acc: any, item: any) => {
    return (acc = Number(acc) + Number(item?.income));
  }, 0);
  console.log(income);
  return (
    <div
      className="p-6 rounded-lg"
      style={{
        backgroundColor: "#FFFFFF",
        boxShadow: "#000000",
      }}
    >
      <div className="flex justify-between">
        <h1 className="text-[22px] font-semibold">Overview Balance</h1>
        <Dropdown
          menu={{
            items,
            selectable: true,
            defaultSelectedKeys: ["1"],
            onClick,
          }}
        >
          <button className={style.dropdown}>
            Monthly <DownOutlined />
          </button>
        </Dropdown>
      </div>
      <h1 className="text-[#2BA24C] text-3xl font-semibold mb-4">
        BDT {income}
      </h1>

      <div>
        <AreaChart
          width={890}
          height={387}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="40%" stopColor="#2492EB" stopOpacity={60} />
              <stop offset="95%" stopColor="#FFFFFF" stopOpacity={20} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            horizontal={false}
          />
          <XAxis dataKey={queries === "month" ? "month" : "year"} />
          <YAxis dataKey="income" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="income"
            stroke="#2492EB"
            stroke-width="2"
            fill="url(#colorUv)"
          />
        </AreaChart>
      </div>
    </div>
  );
}
