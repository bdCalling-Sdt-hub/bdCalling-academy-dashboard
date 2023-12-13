/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button } from "antd";
import StudentSurvey from "../../../component/StudentSurvey/StudentSurvey";
import person from "../../../assets/table/person.svg";
import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import Table from "../../../component/UI/Table/Table";
import { FiEdit } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

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
          <div className="flex gap-x-2">
            <Link to={`/students/edit/${data.key}`}>
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
  const data = [
    {
      key: "1",

      studentName: (
        <div>
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
        <div>
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
        <div>
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
        <div>
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
        <div>
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
  return (
    <div>
      <StudentSurvey></StudentSurvey>
      <div className="mt-6">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Student list</h1>
          <Button
            onClick={handleDownload}
            className="bg-customPrimary"
            style={{
              color: "white",
            }}
            icon={<PlusOutlined />}
            size={"large"}
          >
            Add Students
          </Button>
        </div>
        <div></div>
      </div>
      <div className="mt-6">
        <Table
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
