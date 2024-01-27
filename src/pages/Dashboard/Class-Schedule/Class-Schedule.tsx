/* eslint-disable @typescript-eslint/no-explicit-any */

import style from "./classSchedule.module.css";
import { Col, DatePicker, Form, Row, Select, SelectProps, message } from "antd";

import { PlusOutlined } from "@ant-design/icons";
import CustomModal from "../../../component/UI/Modal/Modal";
import AddClassSchedule from "./AddClass-Schedule/AddClassSchedule";
import {
  useDeleteClassScheduleByIdMutation,
  useGetallClassScheduleMutation,
  useShowClassScheduleForStudentsMutation,
  useShowclassScheduleForMentorMutation,
} from "../../../redux/api/classScheduleApi";
import { useAppSelector } from "../../../redux/hooks";

import { useGetbuyingCourseQuery } from "../../../redux/api/courseApi";
import { useState } from "react";
import { useGetallCategoriesQuery } from "../../../redux/api/categoryapi";
import { useCurrentUser } from "../../../redux/features/auth/authSlice";
import { RxCross1 } from "react-icons/rx";
import Table from "../../../component/UI/Table/Table";
import dayjs from "dayjs";
import PopConfirm from "../../../component/UI/popConfirm/PopConfirm";
export default function ClassSchedule() {
  const { data: courseData }: any = useGetbuyingCourseQuery(undefined);
  const { data: categoryData }: any = useGetallCategoriesQuery(undefined);
  const { userType: role }: any = useAppSelector(useCurrentUser);
  console.log(role);
  const [show, setshow] = useState(false);
  const [scheduleData, setScheduleData] = useState([]);

  const courseOptions: SelectProps["options"] = courseData?.map(
    (course: any) => {
      return {
        label: course?.course?.courseName,
        value: course?.course?.id,
      };
    }
  );

  const categoryOptions: SelectProps["options"] = categoryData?.data?.map(
    (category: any) => {
      return {
        label: category?.category_name,
        value: category?.id,
      };
    }
  );
  const [getAllClassSchedule] = useGetallClassScheduleMutation();
  const [getallschedulebyMentor] = useShowclassScheduleForMentorMutation();
  const [getallSchedulesForStudents] =
    useShowClassScheduleForStudentsMutation();
  const batchOptions = Array.from({ length: 1000 }, (_, index) => ({
    label: index + 1,
    value: index + 1,
  }));
  const [deleteClassSchedule] = useDeleteClassScheduleByIdMutation();
  const handleQuery = async (data: any) => {
    const formatedData = {
      ...data,
      year: data?.year.format("YYYY"),
      month: data?.year.format("MM"),
    };
    console.log("formatedData", formatedData);
    try {
      let res;

      if (role === "SUPER_ADMIN") {
        res = await getAllClassSchedule(formatedData).unwrap();
        if (res) {
          setScheduleData(res?.data);
        }
      } else if (role === "MENTOR") {
        res = await getallschedulebyMentor(formatedData).unwrap();
        if (res) {
          setScheduleData(res?.data);
        }
      }
      if (role === "STUDENT") {
        res = await getallSchedulesForStudents(formatedData).unwrap();

        if (res) {
          setScheduleData(res);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleAddSchedule = () => {
    setshow((prev) => !prev);
  };
  const handleDeleteSchedule = async (id: number) => {
    try {
      const res: any = await deleteClassSchedule(id).unwrap();
      if (res) {
        message.success(res?.message);
        window.location.reload();
      }
    } catch (err) {
      window.location.reload();
      console.log(err);
    }
  };
  const actionsColumn = {
    title: "Actions",
    render: (data: any) => (
      <div className="flex gap-x-2">
        <PopConfirm
          title="Are You Sure?"
          description="This action cannot be undone!"
          onConfirm={() => handleDeleteSchedule(data?.id)}
        >
          <RxCross1 className="cursor-pointer text-[#ff0000]" />
        </PopConfirm>
      </div>
    ),
  };

  const baseColumns = [
    {
      title: "#ID",
      dataIndex: "id",
    },
    {
      title: `courseName`,
      dataIndex: "course_id",
    },
    {
      title: "Mentor Name",
      dataIndex: "mentorName",
    },
    {
      title: "Batch",
      dataIndex: "batch",
    },
    {
      title: "Category",
      dataIndex: "categoryName",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Time",
      dataIndex: "time",
    },
  ];

  const columns =
    role === "SUPER_ADMIN" ? [...baseColumns, actionsColumn] : baseColumns;

  // ...

  const data = scheduleData?.map((schedule: any) => {
    return {
      id: schedule?.id,
      course_id: schedule?.course_id,
      mentorName: schedule?.mentor?.fullName,
      batch: schedule?.batch,
      categoryName: schedule?.category?.category_name,
      date: schedule?.date,
      time: dayjs(schedule?.time, "HH:mm").format("h:mm a"),
    };
  });

  const tablethemes = {
    Table: {
      headerBg: "#2492EB",
      headerColor: "white",
    },
  };
  return (
    <div className="h-screen">
      <CustomModal
        showCancelButton={false}
        showOkButton={false}
        title={""}
        isOpen={show}
        closeModal={() => setshow(false)}
      >
        <AddClassSchedule setshow={setshow} />
      </CustomModal>

      <div>
        <div className="flex justify-end mb-6">
          <button
            className="bg-customPrimary text-[#fff] p-[16px]  rounded-lg text-[18px] font-[500]"
            onClick={handleAddSchedule}
          >
            <PlusOutlined /> <span className="ms-2">Add Schedule</span>
          </button>
        </div>
        <div>
          <Form
            // form={form}
            onFinish={handleQuery}
            layout="vertical"
          >
            <Row gutter={16} justify={"center"} align={"middle"}>
              <Col lg={8}>
                <Form.Item
                  key="year"
                  name="year"
                  label="Select Year & month"
                  rules={[
                    {
                      required: true,
                      message: "Please select month",
                    },
                  ]}
                >
                  <DatePicker
                    picker="month"
                    style={{ width: "100%", padding: "8px" }}
                    placeholder="start date"
                  />
                </Form.Item>
              </Col>
              {/* <Col lg={6}>
                <Form.Item
                  key="Month"
                  name="month"
                  label=" Enter month"
                  rules={[
                    {
                      required: true,
                      message: "Please select month",
                    },
                  ]}
                >
                  <DatePicker
                    picker="month"
                    style={{ width: "100%", padding: "8px" }}
                    placeholder="start date"
                  />
                </Form.Item>
              </Col> */}

              {role === "STUDENT" && (
                <Col lg={6}>
                  <Form.Item
                    label=" course"
                    key="course_id"
                    name="course_id"
                    rules={
                      [
                        // {
                        //   required: true,
                        //   message: "please select course",
                        // },
                      ]
                    }
                  >
                    <Select
                      placeholder="Select Course"
                      options={courseOptions}
                      style={{ width: "100%", height: "42px" }}
                    />
                  </Form.Item>
                </Col>
              )}
              <Col lg={8}>
                <Form.Item
                  label="Batch"
                  key="batch"
                  name="batch"
                  rules={[
                    {
                      required: true,
                      message: "please input courseName",
                    },
                  ]}
                >
                  <Select
                    placeholder="Select Batch"
                    options={batchOptions}
                    style={{ width: "100%", height: "42px" }}
                  />
                </Form.Item>
              </Col>
              {role !== "STUDENT" && (
                <Col lg={8}>
                  <Form.Item
                    label="Select Category"
                    key="category_id"
                    name="category_id"
                    rules={[
                      {
                        required: true,
                        message: "please select category",
                      },
                    ]}
                  >
                    <Select
                      placeholder="Select Category"
                      options={categoryOptions}
                      style={{ width: "100%", height: "42px" }}
                    />
                  </Form.Item>
                </Col>
              )}
              <Col lg={8}>
                <div className="flex justify-center">
                  <button type="submit" className={style.classScheduleBtn}>
                    Filter
                  </button>
                </div>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
      {scheduleData?.length > 0 ? (
        <div className="">
          <Table
            theme={tablethemes}
            columns={columns}
            data={data}
            loading={false}
            needPagination={true}
            page={5}
            total={data?.length}
          />
        </div>
      ) : (
        <h1 className="flex items-center justify-center mt-20 text-2xl text-customPrimary font-bold">
          PLEASE FILTER CLASS SCHEDULES WITH PROPER INFORMATION
        </h1>
      )}
    </div>
  );
}
