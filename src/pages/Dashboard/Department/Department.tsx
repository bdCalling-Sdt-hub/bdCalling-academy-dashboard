/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Table from "../../../component/UI/Table/Table";
import CustomModal from "../../../component/UI/Modal/Modal";
import AddDepartment from "./AddDepartment/AddDepartment";
import style from "./department.module.css";
import { PlusOutlined } from "@ant-design/icons";
import { useGetallDepartmentsQuery } from "../../../redux/api/departmentApi";
import dayjs from "dayjs";
import { FiEdit } from "react-icons/fi";
import EditDepartMent from "./EditDepartment/EditDepartment";
interface departmentData {
  id: number;
  department_name: string;
  created_at: string;
  updated_at: string;
}
export default function Department() {
  const [show, setshow] = useState(false);
  const { data, isLoading }: any = useGetallDepartmentsQuery(undefined);
  const [selectedData, setSelectedData] = useState<any>(null);
  const tablethemes = {
    Table: {
      headerBg: "#2492EB",
      headerColor: "white",
    },
  };
  const columns = [
    {
      title: "Department Name",
      dataIndex: "department_name",
      key: "department_name",
    },
    {
      title: "Creation Date",
      dataIndex: "created_at",
      key: "created_at",
    },
    {
      title: "Updated Date",
      dataIndex: "updated_at",
      key: "updated_at",
    },
    {
      title: "Actions",
      render: function (data: any) {
        return (
          <div className="flex gap-x-2">
            <button>
              <FiEdit
                className="cursor-pointer text-customPrimary"
                onClick={() => {
                  setSelectedData(data); // Set the selected data for editing
                  setshow(true); // Open the modal
                }}
              />
            </button>
          </div>
        );
      },
    },
  ];
  const departmentData =
    data?.data.map((department: departmentData) => ({
      id: department?.id,
      department_name: department?.department_name,
      created_at: dayjs(department?.created_at).format("YYYY-MM-DD HH:mm:ss"),
      updated_at: dayjs(department?.updated_at).format("YYYY-MM-DD HH:mm:ss"),
    })) || [];
  console.log(data);
  return (
    <div className="h-screen ">
      <CustomModal
        showCancelButton={false}
        showOkButton={false}
        title={""}
        isOpen={show}
        closeModal={() => {
          setshow(false);
          setSelectedData(null); // Reset the selected data when closing the modal
        }}
      >
        {selectedData ? (
          <EditDepartMent setshow={setshow} data={selectedData} />
        ) : (
          <AddDepartment setshow={setshow} />
        )}
      </CustomModal>
      <div className="flex items-center justify-between">
        <h1 className="text-[24px] font-[600] text-customHeader">
          Department List
        </h1>
        <button
          onClick={() => setshow(true)}
          className={style.addDepartmentBtn}
        >
          <PlusOutlined className="me-2" /> Add Department
        </button>
      </div>

      <div className="mt-8">
        <Table
          theme={tablethemes}
          loading={isLoading}
          columns={columns}
          data={departmentData}
          page={10}
          total={data?.data?.length}
          needPagination={true}
        />
      </div>
    </div>
  );
}
