/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { useGetallCategoriesQuery } from "../../../redux/api/categoryapi";
import Table from "../../../component/UI/Table/Table";
import { PlusOutlined } from "@ant-design/icons";
import CustomModal from "../../../component/UI/Modal/Modal";
import style from "./category.module.css";
import Editcategory from "./EditCategory/Editcategory";
import AddCategory from "./AddCategory/AddCategory";
const Category = () => {
  const [show, setshow] = useState(false);
  const { data, isLoading }: any = useGetallCategoriesQuery(undefined);
  const [selectedData, setSelectedData] = useState<any>(null);
  const tablethemes = {
    Table: {
      headerBg: "#2492EB",
      headerColor: "white",
    },
  };
  const columns = [
    {
      title: "#Sl",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Category Name",
      dataIndex: "category_name",
      key: "category_name",
    },
    {
      title: "Department Name",
      dataIndex: "department",
      key: "department",
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

  const categoryData = data?.data?.map((category: any) => {
    return {
      id: category?.id,
      category_name: category?.category_name,
      department: category?.department?.department_name,
    };
  });

  return (
    <div>
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
            <Editcategory setshow={setshow} data={selectedData} />
          ) : (
            <AddCategory setshow={setshow} />
          )}
        </CustomModal>
        <div className="flex items-center justify-between">
          <h1 className="text-[24px] font-[600] text-customHeader">
            Category List
          </h1>
          <button
            onClick={() => setshow(true)}
            className={style.addCategoryBtn}
          >
            <PlusOutlined className="me-2" /> Add Category
          </button>
        </div>

        <div className="mt-8">
          <Table
            theme={tablethemes}
            loading={isLoading}
            columns={columns}
            data={categoryData}
            page={10}
            total={data?.data?.length}
            needPagination={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
