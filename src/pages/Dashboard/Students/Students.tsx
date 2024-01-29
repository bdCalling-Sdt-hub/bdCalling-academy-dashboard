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
import CustomModal from "../../../component/UI/Modal/Modal";
import CreateStudents from "./createStudent/CreateStudents";
import EditStudent from "./EditStudent/EditStudent";
import PopConfirm from "../../../component/UI/popConfirm/PopConfirm";
import { useDeleteProfileMutation } from "../../../redux/api/authApi";

export default function Students() {
  const [approveId, setApproveId] = useState<null | number>(null);
  const [disapproveId, setdisApproveId] = useState<null | number>(null);
  const [show, setshow] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [id, setStudentId] = useState<number | null>(null);
  const [deleteProfile] = useDeleteProfileMutation();
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
    window.location.reload();
    message.info(approveStudentData.message);
  }
  if (disapproveStudentData) {
    window.location.reload();
    message.info(disapproveStudentData.message);
  }
  const handleAddStudents = () => {
    setshow(true);
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
  const handleEditModal = (data: any) => {
    setShowEditModal(true);
    setStudentId(data?.id);
  };
  const handleDeleteProfile = async (id: number) => {
    try {
      const res: any = await deleteProfile(id).unwrap();
      if (res) {
        message.success(res.message);
      }
    } catch (error: any) {
      message?.error(
        error?.data?.message ||
          error?.data?.error ||
          "something went wrong. please try again!"
      );
    }
  };

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
      dataIndex: "courseName",
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
        return (
          <span className="flex gap-x-4 items-center">
            {data?.approve === 1 ? (
              <p className={`${style.approve}`}>Approved</p>
            ) : (
              <PopConfirm onConfirm={() => handleApprove(data?.id, "approve")}>
                <p
                  title="approve"
                  // onClick={() => handleApprove(data?.id, "approve")}
                  className={`text-[#2492EB] cursor-pointer`}
                >
                  <AiOutlineCheck />
                </p>
              </PopConfirm>
            )}
            {data?.approve === 0 ? (
              <p className={`${style.disapprove}`}>Pending</p>
            ) : (
              <PopConfirm
                title="Are You Sure?"
                onConfirm={() => handleApprove(data?.id, "disapprove")}
              >
                <p title="disapprove" className={`  cursor-pointer`}>
                  <AiOutlineClose />
                </p>
              </PopConfirm>
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
            <FiEdit
              className="cursor-pointer text-customPrimary"
              onClick={() => handleEditModal(data)}
            />

            <PopConfirm
              title="Are You Sure?"
              description="this action cannot be undone!"
              onConfirm={() => handleDeleteProfile(data?.id)}
            >
              <RxCross1 className="cursor-pointer " />
            </PopConfirm>
          </div>
        );
      },
    },
  ];
  const data = studentData?.data?.map((data: any, index: number) => {
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
      courseName: data?.course?.courseName || "N/A",
      batchNo: data?.course?.batch || "N/A",
      registrationDate: data?.registrationDate || "N/A",
      approve: data?.approve,
      email: data?.email,
      mobileNumber: data?.mobileNumber,
    };
  });
  console.log(studentData);
  const tablethemes = {
    Table: {
      headerBg: "#2492EB",
      headerColor: "white",
    },
  };

  // const onClick: MenuProps["onClick"] = ({ key }) => {
  //   message.info(`Click on item ${key}`);
  // };
  // const items: MenuProps["items"] = [
  //   {
  //     label: (
  //       <div className="flex items-center gap-x-10">
  //         <p>Certified UI/UX Designer Course</p>
  //         <span>
  //           <ArrowRightOutlined />
  //         </span>
  //       </div>
  //     ),
  //     key: "1",
  //   },
  // ];
  return (
    <div className=" h-screen">
      <CustomModal
        showCancelButton={false}
        showOkButton={false}
        title={""}
        isOpen={show}
        closeModal={() => {
          setshow(false);
        }}
      >
        <CreateStudents setshow={setshow} />
      </CustomModal>
      <CustomModal
        showCancelButton={false}
        showOkButton={false}
        title={""}
        isOpen={showEditModal}
        closeModal={() => {
          setShowEditModal(false);
        }}
      >
        <EditStudent setshow={setShowEditModal} id={id} />
      </CustomModal>

      <StudentSurvey students={studentData?.data}></StudentSurvey>
      <div className="mt-6">
        <div
          className="flex 
          justify-between
        items-center"
        >
          <div className="flex gap-x-4 items-center">
            <h1 className="text-[24px] font-[600]">Student List</h1>
            {/* <Dropdown
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
            </Dropdown> */}
          </div>
          <button
            className="bg-customPrimary text-[#fff] p-[16px] rounded-lg text-[18px] font-[500]"
            onClick={handleAddStudents}
          >
            <PlusOutlined /> <span className="ms-2">Add Students</span>
          </button>
        </div>
        <div></div>
      </div>
      <div className="mt-8">
        <Table
          theme={tablethemes}
          loading={isLoading}
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
