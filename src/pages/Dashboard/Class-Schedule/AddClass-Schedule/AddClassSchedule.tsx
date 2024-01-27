/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Form, Col, Row, DatePicker, Select, TimePicker, message } from "antd";
import style from "../classSchedule.module.css";

import { useGetallmentorsQuery } from "../../../../redux/api/mentorApi";
import { useGetallCourseQuery } from "../../../../redux/api/courseApi";
import type { SelectProps } from "antd";
import { useGetallCategoriesQuery } from "../../../../redux/api/categoryapi";
import { useAddClassScheduleMutation } from "../../../../redux/api/classScheduleApi";
import Loading from "../../../../component/UI/Loading/Loading";
const AddClassSchedule = ({ setshow }: any) => {
  const [form] = Form.useForm();
  const [addClassSchedule, { isLoading }] = useAddClassScheduleMutation();
  const { data: mentorsData }: any = useGetallmentorsQuery(undefined);
  const { data: categoryData }: any = useGetallCategoriesQuery(undefined);
  const { data: courseData }: any = useGetallCourseQuery(undefined);
  const mentorsOptions: SelectProps["options"] = mentorsData?.data?.map(
    (mentor: any) => {
      return {
        label: mentor?.fullName,
        value: mentor?.id,
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
  const courseOptions: SelectProps["options"] = courseData?.data?.data?.map(
    (course: any) => {
      console.log("cpoiruse", course);
      return {
        label: course?.courseName,
        value: course?.id,
      };
    }
  );
  const batchOptions = Array.from({ length: 1000 }, (_, index) => ({
    label: index + 1,
    value: index + 1,
  }));
  const onFinish = async (data: any) => {
    const formatedData = {
      ...data,
      time: data.time.format("HH:mm"),
      date: data?.date?.format("YYYY-MM-DD"),
    };

    try {
      const res: any = await addClassSchedule(formatedData).unwrap();
      if (res) {
        message.success(res?.message);
        form.resetFields();
        setshow(false);
      }
    } catch (err: any) {
      console.log(err);
      message.error("something went wrong.please check your time!");
    }
  };
  const onFinishFailed = (error: any) => {
    console.log(error);
  };
  return (
    <div>
      <h1 className="text-xl text-customPrimary">Add Class Schedule</h1>
      <Form
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
      >
        <Row gutter={16} justify={"center"} align={"middle"}>
          <Col lg={24}>
            <Form.Item className="text-center"></Form.Item>
          </Col>
          <Col lg={12}>
            <Form.Item
              key="date"
              name="date"
              label=" Enter Date"
              rules={[
                {
                  required: true,
                  message: "Please input date",
                },
              ]}
            >
              <DatePicker
                style={{ width: "100%", padding: "8px" }}
                placeholder="start date"
              />
            </Form.Item>
          </Col>
          <Col lg={12}>
            <Form.Item
              key="time"
              name="time"
              label="Time"
              rules={[
                {
                  required: true,
                  message: "Please Input Time",
                },
              ]}
            >
              <TimePicker
                format="h:mm a"
                use12Hours
                style={{ width: "100%", padding: "8px" }}
              />
            </Form.Item>
          </Col>

          <Col lg={12}>
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
          <Col lg={12}>
            <Form.Item
              label="Select Course"
              key="course_id"
              name="course_id"
              rules={[
                {
                  required: true,
                  message: "please select course",
                },
              ]}
            >
              <Select
                placeholder="Select Course"
                options={courseOptions}
                style={{ width: "100%", height: "42px" }}
              />
            </Form.Item>
          </Col>
          <Col lg={12}>
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
          <Col lg={12}>
            <Form.Item
              label="Select Mentor"
              key="mentor_id"
              name="mentor_id"
              rules={[
                {
                  required: true,
                  message: "please select mentor",
                },
              ]}
            >
              <Select
                placeholder="Select Mentor"
                options={mentorsOptions}
                style={{ width: "100%", height: "42px" }}
              />
            </Form.Item>
          </Col>
        </Row>
        <div className="flex justify-center">
          <button type="submit" className={style.classScheduleBtn}>
            {isLoading ? <Loading /> : "CREATE"}
          </button>
        </div>
      </Form>
    </div>
  );
};

export default AddClassSchedule;
