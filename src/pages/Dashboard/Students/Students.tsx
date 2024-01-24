/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import StudentSurvey from "../../../component/Survey/StudentSurvey/StudentSurvey";
import person from "../../../assets/table/person.svg";
import style from "./student.module.css";

import { AiOutlineClose } from "react-icons/ai";

import { AiOutlineCheck } from "react-icons/ai";

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
import {
  useApproveStudentQuery,
  useDisapproveStudentQuery,
  useGetAllStudentQuery,
} from "../../../redux/api/StudentApi";
import { IMAGE_BASE_URL } from "../../../utils/Common";
import { useState } from "react";

export default function Students() {
  const [approveId, setApproveId] = useState<null | number>(null);
  const [disapproveId, setdisApproveId] = useState<null | number>(null);

  const {
    data: studentData,
    isLoading,
    refetch,
  }: any = useGetAllStudentQuery(undefined);
  const { data: approveStudentData }: any = useApproveStudentQuery(approveId, {
    skip: !approveId,
  });
  const { data: disapproveStudentData }: any = useDisapproveStudentQuery(
    disapproveId,
    {
      skip: !disapproveId,
    }
  );

  if (approveStudentData) {
    message.info(approveStudentData.message);
  }
  if (disapproveStudentData) {
    message.info(disapproveStudentData.message);
  }
  const handleDownload = () => {
    console.log("Downloading students...");
  };
  const handleApprove = (id: number, value: string) => {
    console.log(id, value);
    if (id && value === "approve") {
      setApproveId(id);
      refetch();
    } else if (id && value === "disapprove") {
      setdisApproveId(id);
    }
  };
  console.log(approveId);
  const columns = [
    {
      title: "#sl",
      dataIndex: "serial",
    },
    {
      title: "Student Id",
      dataIndex: "id",
    },
    {
      title: "Student Image",
      dataIndex: "image",
    },
    {
      title: "Student Name",
      dataIndex: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "mobileNumber",
    },

    {
      title: "Course name",
      dataIndex: "category_name",
    },
    {
      title: "Batch No",
      dataIndex: "batchNo",
    },
    {
      title: "Registration Date",
      dataIndex: "registrationDate",
    },
    {
      title: "Approve Status",
      // dataIndex: "approve",
      render: function (data: any) {
        console.log("approved", data);
        return (
          <span className="flex gap-x-4 items-center">
            {data?.approve === 1 ? (
              <p className={`${style.approve}`}>Approved</p>
            ) : (
              <p
                title="approve"
                onClick={() => handleApprove(data?.id, "approve")}
                className={`text-[#2492EB] cursor-pointer`}
              >
                <AiOutlineCheck />
              </p>
            )}
            {data?.approve === 0 ? (
              <p className={`${style.disapprove}`}>disApproved</p>
            ) : (
              <p
                title="disapprove"
                onClick={() => handleApprove(data?.id, "disapprove")}
                className={`  cursor-pointer`}
              >
                <AiOutlineClose />
              </p>
            )}
          </span>
        );
      },
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
  const data = studentData?.data?.data?.map((data: any, index: number) => {
    return {
      serial: index + 1,
      id: data?.id,
      image:
        (
          <img
            className="w-[30px] h-[30px] rounded-full"
            src={`${IMAGE_BASE_URL}/${data?.image}`}
          />
        ) || "N/A",
      fullName: data?.fullName || "N/A",
      category_name: data?.category?.category_name || "N/A",
      batchNo: data?.batchNo || "N/A",
      registrationDate: data?.registrationDate || "N/A",
      approve: data?.approve,
      email: data?.email,
      mobileNumber: data?.mobileNumber,
    };
  });
  const tablethemes = {
    Table: {
      headerBg: "#2492EB",
      headerColor: "white",
    },
  };
  console.log(data);
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
      <StudentSurvey students={studentData?.data?.data}></StudentSurvey>
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
          loading={isLoading}
          title={false}
          data={data}
          columns={columns}
          needPagination={true}
          page={5}
          total={data?.length}
        />
      </div>
    </div>
  );
}
