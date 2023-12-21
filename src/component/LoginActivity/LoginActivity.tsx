import Table from "../UI/Table/Table";
import { useEffect, useState } from "react";

export default function LoginActivity() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("/loginActivity.json")
      .then((res) => res.json())
      .then((data) => setdata(data));
  }, []);
  console.log(data);
  const columns = [
    {
      title: "BROWSER",
      dataIndex: "browser",
      key: "browser",
    },
    {
      title: "DEVICE",
      dataIndex: "device",
      key: "device",
    },
    {
      title: "COUNTRY",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "TIME",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "STATUS",
      dataIndex: "status",
      render: () => {
        return (
          <button className="bg-[#CBE1F3] px-[20px] py-[6px] rounded lg">
            Sign Out
          </button>
        );
      },
    },
  ];
  return (
    <div className="h-screen container mx-auto">
      <h1 className="text-[24px] font-semibold mb-4"> Login Activity</h1>
      <div>
        <Table columns={columns} data={data} />
      </div>
    </div>
  );
}
