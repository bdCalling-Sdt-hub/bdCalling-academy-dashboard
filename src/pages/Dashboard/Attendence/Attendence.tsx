/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useEffect, useState } from "react";
import { Input } from "antd";
import style from "./attendence.module.css";
import { SearchOutlined } from "@ant-design/icons";
import Table from "../../../component/UI/Table/Table";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
interface AttendenceData {
  id: string;
  img: string;
  name: string;
  courseName: string;
  date: string;
  attendence: string;
}
export default function Attendence() {
  const [attendence, setattendence] = useState<AttendenceData[]>([]);
  const tablethemes = {
    Table: {
      headerBg: "#2492EB",
      headerColor: "white",
    },
  };
  const [searchTerm, setSearchTerm] = useState("");
  const [type, settype] = useState("Students");
  const query: Record<string, unknown> = {};
  query["searchTerm"] = searchTerm;

  useEffect(() => {
    fetch("/attendence.json")
      .then((res) => res.json())
      .then((data) => setattendence(data));
  }, []);

  const handleAttendence = (id: string, value: string) => {
    console.log(id, value);
  };

  const columns = [
    {
      title: "#ID",
      dataIndex: "id",
    },
    {
      title: `${type + " " + "Name"}`,
      dataIndex: "name",
    },
    {
      title: "Course name",
      dataIndex: "courseName",
    },
    {
      title: "Department name",
      dataIndex: "courseName",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Attendence",
      dataIndex: "attendence",
      render: (data: any) => (
        <span className="flex gap-x-2">
          <p
            onClick={() => handleAttendence("id", "present")}
            className={`${style.present}  cursor-pointer`}
          >
            present
          </p>
          <p
            onClick={() => handleAttendence("id", "absent")}
            className={`${style.absent}  cursor-pointer`}
          >
            absent
          </p>
        </span>
      ),
    },
    {
      title: "Actions",
      render: function (data: any) {
        return (
          <div className="flex gap-x-2">
            <Link to={`/attendence/edit/${data.id}`}>
              {" "}
              <FiEdit
                className="cursor-pointer text-customPrimary"
                onClick={() => console.log(data)}
              />
            </Link>
            <RxCross1
              className="cursor-pointer "
              onClick={() => console.log(data)}
            />
          </div>
        );
      },
    },
  ];

  const data = attendence.map((data) => {
    return {
      key: data.id,
      id: data.id,
      name: (
        <div className="flex items-center gap-x-2">
          <img
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
            }}
            src={data.img}
            alt=""
          />
          <p>{data.name}</p>
        </div>
      ),
      courseName: data.courseName,
      date: data.date,
      deparatment: data.courseName,
      attendence: data.attendence,
    };
  });
  return (
    <div className="h-screen ">
      <div className="flex justify-between items-center mb-[30px]">
        <h1 className="text-[24px] font-[600] text-[#333]">
          {type} Attendance List
        </h1>
        <div className="flex items-center">
          <div className="flex gap-x-4">
            <button
              className={`${
                type === "Students" ? style.active : style.inactive
              }`}
              onClick={() => settype("Students")}
            >
              Students
            </button>

            <button
              className={`${
                type === "Mentors" ? style.active : style.inactive
              }`}
              onClick={() => settype("Mentors")}
            >
              Mentors
            </button>
          </div>
          <Input
            size="large"
            allowClear
            placeholder="Search here"
            className="ms-4 py-2 w-80"
            prefix={<SearchOutlined style={{ color: "gray" }} />}
          />
        </div>
      </div>

      <div className="">
        <Table
          theme={tablethemes}
          columns={columns}
          data={data}
          loading={false}
          needPagination={true}
          page={5}
          total={attendence.length}
        />
      </div>
    </div>
  );
}
