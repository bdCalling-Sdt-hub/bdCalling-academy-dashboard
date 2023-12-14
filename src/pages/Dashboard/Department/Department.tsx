/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import Table from "../../../component/UI/Table/Table";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

export default function Department() {
  const [departments, setdepartments] = useState([]);

  useEffect(() => {
    fetch("./departments.json")
      .then((res) => res.json())
      .then((data) => setdepartments(data));
  }, []);
  const columns = [
    {
      title: "Head of Department",
      dataIndex: "name",
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
            <Link to={`/department/edit/${data.id}`}>
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

  return (
    <div>
      <h1 className="text-xl font-bold">Department List</h1>
      <div>
        <Table
          title={false}
          loading={false}
          columns={columns}
          data={departments}
          page={5}
          total={departments.length}
          needPagination={true}
        />
      </div>
    </div>
  );
}
