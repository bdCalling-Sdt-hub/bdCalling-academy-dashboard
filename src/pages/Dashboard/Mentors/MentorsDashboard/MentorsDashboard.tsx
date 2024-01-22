/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useEffect, useState } from "react";
import { Col, DatePicker, Input, Row, message } from "antd";
import style from "./MentorsDashboard.module.css";
import { DownOutlined } from "@ant-design/icons";

import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import Table from "../../../../component/UI/Table/Table";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
interface AttendenceData {
  id: string;
  img: string;
  name: string;
  courseName: string;
  date: string;
  attendence: string;
}
export default function MentorsDashboard() {
  const [attendence, setattendence] = useState<AttendenceData[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [date, setDate] = useState<string | undefined>();
  const [subject, setSubject] = useState("");
  console.log(date, subject);
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
      title: "Stundets Name",
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
      render: () => (
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
  const items: MenuProps["items"] = [
    {
      key: "2",
      label: <p>item 2</p>,
    },
  ];

  const onClick: MenuProps["onClick"] = ({ key }) => {
    message.info(`Click on item ${key}`);
  };
  return (
    <div className="h-screen ">
      <h1 className="text-[24px] font-[600] text-customHeader">Overview</h1>
      <div className="mt-4">
        <Row justify={"center"} align={"middle"}>
          <Col lg={8} className="  flex justify-center ">
            <div>
              <label className="font">Mentors</label>
              <div className="w-[504px] text-center mt-2">
                <Dropdown
                  className={style.Dropdown}
                  menu={{ items, onClick }}
                  placement="bottom"
                  arrow
                >
                  <div className="flex justify-between">
                    <p>value</p>
                    <DownOutlined />
                  </div>
                </Dropdown>
              </div>
            </div>
          </Col>
          <Col lg={8}>
            <div className="flex flex-col items-start">
              <label htmlFor="">Date</label>
              <DatePicker
                onChange={(date) => setDate(date?.format("DD-MM-YYYY"))}
                allowClear
                className="w-[504px] py-2 mt-2"
                placeholder="startingDate"
              />
            </div>
          </Col>
          <Col lg={8} className="flex flex-col">
            <label className="">Subject</label>
            <Input
              size="large"
              allowClear
              onChange={(e) => setSubject(e.target.value)}
              type="text"
              placeholder="subject"
              className=" py-2 w-[504px] mt-2"
            />
          </Col>
        </Row>
      </div>

      <div className="mt-6">
        <Table
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
