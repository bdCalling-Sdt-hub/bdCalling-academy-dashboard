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

export default function WalletChart() {
  const data = [
    { month: "jan", income: 100000 },
    { month: "feb", income: 80000 },
    { month: "mar", income: 100000 },
    { month: "apr", income: 80000 },
    { month: "may", income: 100000 },
    { month: "jun", income: 80000 },
    { month: "jul", income: 100000 },
    { month: "aug", income: 80000 },
    { month: "sep", income: 100000 },
    { month: "oct", income: 80000 },
    { month: "nov", income: 100000 },
    { month: "dec", income: 80000 },
  ];
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "Monthly",
    },
    {
      key: "2",
      label: "Yearly",
    },
  ];
  const total = data.reduce((acc, item) => acc + item.income, 0);
  const onClick: MenuProps["onClick"] = ({ key }) => {
    message.info(`Click on item ${key}`);
  };
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
        BDT {total}
      </h1>
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
        <XAxis dataKey="month" />
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
  );
}
