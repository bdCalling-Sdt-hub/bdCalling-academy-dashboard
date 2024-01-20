/* eslint-disable @typescript-eslint/no-explicit-any */

import StudentSurvey from "../../../component/Survey/StudentSurvey/StudentSurvey";
import person from "../../../assets/table/person.svg";

import {
  ArrowRightOutlined,
  DownOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import Table from "../../../component/UI/Table/Table";
import { FiEdit } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

import { MenuProps, Space, message, Dropdown } from "antd";

export default function Students() {
  const handleDownload = () => {
    console.log("Downloading students...");
  };
  const columns = [
    {
      title: "#sl",
      dataIndex: "id",
    },
    {
      title: "Student Name",
      dataIndex: "studentName",
    },

    {
      title: "Course name",
      dataIndex: "courseName",
    },
    {
      title: "Batch No",
      dataIndex: "batchNo",
    },
    {
      title: "Date",
      dataIndex: "admissionDate",
    },
    {
      title: "Actions",
      render: function (data: any) {
        return (
          <div className="flex gap-x-2 ">
            <Link to={`/profile/${data.key}`}>
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
  const data = [
    {
      key: "1",

      studentName: (
        <div className="flex gap-x-2 items-center">
          <img src={person} alt="" />
          <p>jhon doe</p>
        </div>
      ),
      courseName: "ui ux designer",
      batchNo: "dhaka,bangladesh",
      department: "ui ux designer",
      admissionDate: "1October 30, 2023",
    },
    {
      key: "2",

      studentName: (
        <div className="flex gap-x-2 items-center">
          <img src={person} alt="" />
          <p>jhon doe</p>
        </div>
      ),
      courseName: "ui ux designer",
      batchNo: "dhaka,bangladesh",
      department: "ui ux designer",
      admissionDate: "1October 30, 2023",
    },
    {
      key: "3",

      studentName: (
        <div className="flex gap-x-2 items-center">
          <img src={person} alt="" />
          <p>jhon doe</p>
        </div>
      ),
      courseName: "ui ux designer",
      batchNo: "dhaka,bangladesh",
      department: "ui ux designer",
      admissionDate: "1October 30, 2023",
    },
    {
      key: "4",

      studentName: (
        <div className="flex gap-x-2 items-center">
          <img src={person} alt="" />
          <p>jhon doe</p>
        </div>
      ),
      courseName: "ui ux designer",
      batchNo: "dhaka,bangladesh",
      department: "ui ux designer",
      admissionDate: "1October 30, 2023",
    },
    {
      key: "5",

      studentName: (
        <div className="flex gap-x-2 items-center">
          <img src={person} alt="" />
          <p>jhon doe</p>
        </div>
      ),
      courseName: "ui ux designer",
      batchNo: "dhaka,bangladesh",
      department: "ui ux designer",
      admissionDate: "1October 30, 2023",
    },
  ];
  const tablethemes = {
    Table: {
      headerBg: "#2492EB",
      headerColor: "white",
    },
  };
  const onClick: MenuProps["onClick"] = ({ key }) => {
    message.info(`Click on item ${key}`);
  };
  const items: MenuProps["items"] = [
    {
      label: (
        <div className="flex items-center gap-x-10">
          <p>Certified UI/UX Designer Course</p>
          <span>
            <ArrowRightOutlined />
          </span>
        </div>
      ),
      key: "1",
    },
  ];
  return (
    <div className=" h-screen">
      <StudentSurvey></StudentSurvey>
      <div className="mt-6">
        <div
          className="flex 
          justify-between
        items-center"
        >
          <div className="flex gap-x-4 items-center">
            <h1 className="text-[24px] font-[600]">Student List</h1>
            <Dropdown
              menu={{ items, onClick }}
              placement="bottomLeft"
              arrow={{ pointAtCenter: true }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space className="border p-4 border-[#858585]">
                  Department Name
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            <Dropdown
              menu={{ items, onClick }}
              placement="bottomLeft"
              arrow={{ pointAtCenter: true }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space className="border p-4 border-[#858585]">
                  Batch Number
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
          <button
            className="bg-customPrimary text-[#fff] p-[16px] rounded-lg text-[18px] font-[500]"
            onClick={handleDownload}
          >
            <PlusOutlined /> <span className="ms-2">Add Students</span>
          </button>
        </div>
        <div></div>
      </div>
      <div className="">
        <Table
          theme={tablethemes}
          loading={false}
          title={false}
          data={data}
          columns={columns}
          needPagination={true}
          page={5}
          total={data.length}
        />
      </div>
    </div>
  );
}
