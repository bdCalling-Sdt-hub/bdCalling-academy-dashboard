/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import Table from "../../../component/UI/Table/Table";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import CustomModal from "../../../component/UI/Modal/Modal";
import AddDepartment from "./AddDepartment/AddDepartment";
import style from "./department.module.css";
import { PlusOutlined } from "@ant-design/icons";
interface departmentData {
  id: string;
  img: string;
  head: string;
  department: string;
  phone: string;
  email: string;
  startingDate: string;
  totalStudents: string;
}
export default function Department() {
  const [departments, setdepartments] = useState<departmentData[] | []>([]);
  const [show, setshow] = useState(false);
  useEffect(() => {
    fetch("/departments.json")
      .then((res) => res.json())
      .then((data) => setdepartments(data));
  }, []);
  const tablethemes = {
    Table: {
      headerBg: "#2492EB",
      headerColor: "white",
    },
  };
  const columns = [
    {
      title: "Head of Department",
      dataIndex: "head",
    },
    {
      title: "Department name",
      dataIndex: "department",
    },

    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Starting date",
      dataIndex: "startingDate",
    },
    {
      title: "Total students",
      dataIndex: "totalStudents",
    },
    {
      title: "Actions",
      render: function (data: any) {
        return (
          <div className="flex gap-x-2">
            <Link to={`/admin/department/edit/${data.id}`}>
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

  const data = departments?.map((department) => {
    return {
      key: department.id,
      id: department.id,
      head: (
        <div className="flex items-center gap-x-2">
          <img
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
            }}
            src={department.img}
            alt=""
          />
          <p>{department.head}</p>
        </div>
      ),
      department: department.department,
      phone: department.phone,
      email: department.email,
      startingDate: department.startingDate,
      totalStudents: department.totalStudents,
    };
  });
  console.log(data);
  return (
    <div className="h-screen ">
      <CustomModal
        showCancelButton={false}
        showOkButton={false}
        title={""}
        isOpen={show}
        closeModal={() => setshow(false)}
      >
        <AddDepartment setshow={setshow} />
      </CustomModal>
      <div className="flex items-center justify-between">
        <h1 className="text-[24px] font-[600] text-customHeader">Department</h1>
        <button
          onClick={() => setshow(true)}
          className={style.addDepartmentBtn}
        >
          <PlusOutlined className="me-2" /> Add Department
        </button>
      </div>

      <div className="">
        <Table
          theme={tablethemes}
          title={false}
          loading={false}
          columns={columns}
          data={data}
          page={5}
          total={departments.length}
          needPagination={true}
        />
      </div>
    </div>
  );
}
