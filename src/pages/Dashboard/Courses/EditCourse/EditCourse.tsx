/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  Col,
  ConfigProvider,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
  SelectProps,
  message,
} from "antd";
import TextArea from "antd/es/input/TextArea";

import { useEffect, useState } from "react";
import UploadImage from "../../../../component/Form/UploadImage";

import style from "../courses.module.css";
import {
  useGetallCategoriesQuery,
  useGetsingleCategoryQuery,
} from "../../../../redux/api/categoryapi";
import { useGetallmentorsQuery } from "../../../../redux/api/mentorApi";
import { selectedFiledTheme } from "../../../../themes/Index";
import { CloseOutlined, PlusOutlined } from "@ant-design/icons";
import {
  useGetSingleCourseQuery,
  useUpdateCourseMutation,
} from "../../../../redux/api/courseApi";

import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import moment from "moment";
export default function EditCourse() {
  const { id } = useParams();
  console.log("id", id);
  const [form] = Form.useForm();
  const [courseType, setCourseType] = useState("Offline");
  const [file, setFile] = useState<File | null>(null);

  const { data: categoryData }: any = useGetallCategoriesQuery(undefined);
  const { data: mentorData }: any = useGetallmentorsQuery(undefined);
  const { data: categorySingleData }: any = useGetsingleCategoryQuery(id);
  const { data }: any = useGetSingleCourseQuery(id);
  console.log("course data", data);
  console.log("ediatble data");
  const [editCourse] = useUpdateCourseMutation();
  const handleButtonClick = (type: string) => {
    setCourseType(type);
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (data?.data) {
      form.setFieldsValue({
        courseName: data?.data?.courseName,
        language: data?.data?.language,
        courseDetails: data?.data?.courseDetails,
        startDate: dayjs(data?.data?.startDate) || null,
        courseTimeLength: data?.data?.courseTimeLength,
        price: data?.data?.price,
        "mentorId[]": data?.data?.mentorId,
        maxStudentLength: data?.data?.maxStudentLength,
        skillLevel: data?.data?.skillLevel,
        address: data?.data?.address,
        category_id: data?.data?.category_id,
        status: data?.data?.status,
        batch: data?.data?.batch,
        discount_price: data?.data?.discount_price,
        coupon_code: data?.data?.coupon_code,
        coupon_code_price: data?.data?.coupon_code_price,
        end_date: dayjs(data?.data?.end_date) || null,
        seat_left: data?.data?.seat_left,
        courseThumbnail: file ? file : {},
        "careeropportunities[]": data?.data?.careeropportunities || [], // Check if it exists
        "carriculum[]": data?.data?.carriculum || [], // Check if it exists
        "job_position[]": data?.data?.job_position || [], // Check if it exists
        "software[]": data?.data?.software || [], // Check if it exists
      });
    }
  }, [data?.data, form, file]);
  const onFinish = async (values: any) => {
    console.log("values", values);
    const finalData = {
      ...values,
      publish: values?.publish === true ? "1" : "0",
    };

    try {
      const formData = new FormData();
      if (file) {
        formData.append("courseThumbnail", file);
      }
      for (const [key, value] of Object.entries(finalData)) {
        // @ts-ignore

        formData.append(key, value);
      }

      const res: any = await editCourse({
        id: data?.data?.id,
        body: formData,
      }).unwrap();
      if (res) {
        form.resetFields();
        navigate("/course");
      }
    } catch (err: any) {
      // message.error(err.data.message);
    }
  };

  const onFinishFailed = (errorInfo: any) => {};
  const onReset = () => {
    console.log(form);
    form.resetFields();
  };

  const options: SelectProps["options"] = categoryData?.data?.map(
    (category: any) => {
      return {
        value: category?.id,
        label: category?.category_name,
      };
    }
  );
  const mentorOptions: SelectProps["options"] = mentorData?.data?.map(
    (mentor: any) => {
      return {
        value: mentor?.id,
        label: mentor?.fullName,
      };
    }
  );

  return (
    <ConfigProvider theme={selectedFiledTheme}>
      <div className="">
        <div className="flex justify-between items-cEnter mb-[30px]">
          <h1 className="text-2xl  font-semibold  text-customHeader">
            Edit Course
          </h1>
          <div className="flex gap-x-4">
            <button
              className={
                courseType === "Offline" ? style.activeBtn : style.inActiveBtn
              }
              onClick={() => handleButtonClick("Offline")}
            >
              Offline
            </button>
            <button
              className={
                courseType === "Online" ? style.activeBtn : style.inActiveBtn
              }
              onClick={() => handleButtonClick("Online")}
            >
              Online
            </button>
            <button
              className={
                courseType === "Video" ? style.activeBtn : style.inActiveBtn
              }
              onClick={() => handleButtonClick("Video")}
            >
              Video
            </button>
          </div>
        </div>
        <div className={`${style.AddcourseContainer} px-[30px] pt-[30px] mb-6`}>
          <Form
            layout="vertical"
            form={form}
            name="add-course"
            initialValues={{
              ...data?.data,
              startDate: dayjs(data?.data?.startDate),
              end_date: dayjs(data?.data?.end_date),
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Row gutter={16}>
              <Col lg={8}>
                <Form.Item
                  label="Enter course name"
                  key="courseName"
                  name="courseName"
                  rules={[
                    { required: true, message: "Please input course name" },
                  ]}
                >
                  <Input placeholder="Enter course name" className="py-2" />
                </Form.Item>
              </Col>
              <Col lg={8}>
                <Form.Item
                  label="Enter langugage"
                  key="language"
                  name="language"
                  rules={[
                    { required: true, message: "Please input course name" },
                  ]}
                >
                  <Input placeholder="language" className="py-2" />
                </Form.Item>
              </Col>

              <Col lg={8}>
                <Form.Item
                  label="Enter start date"
                  key="startDate"
                  name="startDate"
                  rules={[
                    { required: true, message: "Please input start date" },
                  ]}
                >
                  <DatePicker
                    format="YYYY-MM-DD"
                    style={{ width: "100%", padding: "8px" }}
                    placeholder="end date"
                  />
                </Form.Item>
              </Col>
              <Col lg={8}>
                <Form.Item
                  label="Enter course time length"
                  key="courseTimeLength"
                  name="courseTimeLength"
                  rules={[
                    {
                      required: true,
                      message: "Please input Course Time Length",
                    },
                  ]}
                >
                  <Input placeholder="Course Time Length*" className="py-2" />
                </Form.Item>
              </Col>
              <Col lg={8}>
                <Form.Item
                  label="Enter course price"
                  key="price"
                  name="price"
                  rules={[
                    {
                      required: true,
                      message: "Please input course price",
                    },
                  ]}
                >
                  <Input type="number" placeholder="price*" className="py-2" />
                </Form.Item>
              </Col>
              <Col lg={8}>
                <Form.Item
                  key="maxStudentLength"
                  name="maxStudentLength"
                  label="Enter max Student Length"
                  rules={[
                    {
                      required: true,
                      message: "Please input maximum student length",
                    },
                  ]}
                >
                  <Input
                    type="number"
                    placeholder="Maximum Students Length*"
                    className="py-2"
                  />
                </Form.Item>
              </Col>

              <Col lg={8}>
                <Form.Item
                  label="Enter skill level"
                  key="skillLevel"
                  name="skillLevel"
                  rules={[
                    {
                      required: true,
                      message: "please Enter skill level",
                    },
                  ]}
                >
                  <Input placeholder="skillLevel" className="py-2" />
                </Form.Item>
              </Col>
              <Col lg={8}>
                <Form.Item
                  label="Enter batch no"
                  key="batch"
                  name="batch"
                  rules={[
                    {
                      required: true,
                      message: "please Enter batch no",
                    },
                  ]}
                >
                  <Input type="number" placeholder="batch" className="py-2" />
                </Form.Item>
              </Col>
              <Col lg={8}>
                <Form.Item
                  label="Enter discount price"
                  key="discount_price"
                  name="discount_price"
                  rules={[
                    {
                      required: true,
                      message: "please Enter batch no",
                    },
                  ]}
                >
                  <Input
                    type="number"
                    placeholder="discount_price"
                    className="py-2"
                  />
                </Form.Item>
              </Col>
              <Col lg={8}>
                <Form.Item
                  label="Enter Coupon Code"
                  key="coupon_code"
                  name="coupon_code"
                  rules={[
                    {
                      required: true,
                      message: "please Enter  coupon code",
                    },
                  ]}
                >
                  <Input placeholder="coupon_code" className="py-2" />
                </Form.Item>
              </Col>
              <Col lg={8}>
                <Form.Item
                  label="Enter Coupon Code Price"
                  key="coupon_code_price"
                  name="coupon_code_price"
                  rules={[
                    {
                      required: true,
                      message: "please Enter coupon code price",
                    },
                  ]}
                >
                  <Input
                    type="number"
                    placeholder="coupon_code_price"
                    className="py-2"
                  />
                </Form.Item>
              </Col>
              <Col lg={8}>
                <Form.Item
                  label="Enter End Date"
                  key="end_date"
                  name="end_date"
                  rules={[{ required: true, message: "Please input end_date" }]}
                >
                  <DatePicker
                    format="YYYY-MM-DD"
                    style={{ width: "100%", padding: "8px" }}
                    placeholder="end date"
                  />
                </Form.Item>
              </Col>
              <Col lg={8}>
                <Form.Item
                  label="Select Course Type"
                  name="status"
                  rules={[
                    { required: true, message: "Please select course type" },
                  ]}
                >
                  <Select
                    style={{ width: "100%" }}
                    options={[
                      { label: "online", value: "online" },
                      { label: "offline", value: "offline" },
                      { label: "video", value: "video" },
                    ]}
                    placeholder="please select a status"
                  />
                </Form.Item>
              </Col>
              <Col lg={8}>
                <Form.Item
                  label="Select Category"
                  name="category_id"
                  rules={[
                    { required: true, message: "Please select a category" },
                  ]}
                >
                  <Select
                    style={{ width: "100%" }}
                    options={options}
                    placeholder="please select a category"
                  />
                </Form.Item>
              </Col>
              <Col lg={8}>
                <Form.Item
                  label="Select Mentors"
                  key="mentorId[]"
                  name="mentorId[]"
                  rules={[
                    { required: true, message: "Please input mentors  " },
                  ]}
                >
                  <Select
                    mode="multiple"
                    options={mentorOptions}
                    placeholder="select mentor"
                  />
                </Form.Item>
              </Col>
              <Col lg={12}>
                <Form.Item
                  label="Enter Seat Left"
                  key="seat_left"
                  name="seat_left"
                  rules={[
                    {
                      required: true,
                      message: "please Enter seat left",
                    },
                  ]}
                >
                  <Input
                    type="number"
                    placeholder="seat left"
                    className="py-2"
                  />
                </Form.Item>
              </Col>
              <Col lg={12}>
                <Form.Item
                  label="Select Publish Status"
                  key="publish"
                  name="publish"
                  rules={[
                    {
                      required: true,
                      message: "please Enter Publish Status",
                    },
                  ]}
                >
                  <Select
                    style={{ width: "100%" }}
                    options={[
                      { label: "true", value: "1" },
                      { label: "false", value: "0" },
                    ]}
                    placeholder="please select a category"
                  />
                </Form.Item>
              </Col>
              <Col lg={24}>
                <Form.Item
                  label="course Thumbnail"
                  key="courseThumbnail"
                  name="courseThumbnail"
                  // rules={[
                  //   {
                  //     required: true,
                  //     message: "please select a courseThumbnail",
                  //   },
                  // ]}
                >
                  <UploadImage setFile={setFile} />
                </Form.Item>
              </Col>
              <Col lg={24}>
                <Form.Item
                  label="Enter Course Details"
                  key="courseDetails"
                  name="courseDetails"
                  rules={[
                    { required: true, message: "Please input course name" },
                  ]}
                >
                  <TextArea
                    showCount
                    maxLength={100}
                    placeholder="course details"
                    style={{ height: 200, resize: "none" }}
                  />
                </Form.Item>
              </Col>

              <Col lg={24}>
                <Form.Item
                  label="Enter Address"
                  key="address"
                  name="address"
                  rules={[{ required: true, message: "Please input address" }]}
                >
                  <TextArea
                    showCount
                    maxLength={50}
                    placeholder="address"
                    style={{ height: 100, resize: "none" }}
                  />
                </Form.Item>
              </Col>

              <Col lg={6}>
                <Form.List
                  name="careeropportunities[]"
                  key="careeropportunities[]"
                  initialValue={[{ key: "0", value: "" }]}
                >
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map((field, index) => (
                        <Form.Item
                          {...field}
                          label="Enter Carrier Opportunity"
                          rules={[
                            {
                              required: true,
                              message: "please Enter Carrier Opportunity",
                            },
                          ]}
                        >
                          <div className="flex items-cEnter gap-x-2">
                            <Input
                              value={
                                data?.data?.careeropportunities[field?.key]
                              }
                              className="py-2"
                              placeholder="Enter careeropportunities"
                            />
                            <button onClick={() => remove(index)}>
                              <CloseOutlined />
                            </button>
                            {index === fields.length - 1 && (
                              <button onClick={() => add()}>
                                <PlusOutlined />
                              </button>
                            )}
                          </div>
                        </Form.Item>
                      ))}
                    </>
                  )}
                </Form.List>
              </Col>
              <Col lg={6}>
                <Form.List name="carriculum[]" key="carriculum[]">
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map((field, index) => (
                        <Form.Item
                          {...field}
                          label="Enter carriculum"
                          rules={[
                            {
                              required: true,
                              message: "please Enter Curriculum",
                            },
                          ]}
                        >
                          <div className="flex items-center gap-x-2">
                            <Input
                              value={data?.data?.carriculum[field?.key]}
                              className="py-2"
                              placeholder="Enter carriculum"
                            />
                            <button onClick={() => remove(index)}>
                              <CloseOutlined />
                            </button>
                            {index === fields.length - 1 && (
                              <button onClick={() => add()}>
                                <PlusOutlined />
                              </button>
                            )}
                          </div>
                        </Form.Item>
                      ))}
                    </>
                  )}
                </Form.List>
              </Col>
              <Col lg={6}>
                <Form.List name="job_position[]" key="job_position[]">
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map((field, index) => (
                        <Form.Item
                          {...field}
                          label="Enter Job Positions"
                          rules={[
                            {
                              required: true,
                              message: "please Enter Job Position",
                            },
                          ]}
                        >
                          <div className="flex items-cEnter gap-x-2">
                            <Input
                              value={data?.data?.job_position[field?.key]}
                              className="py-2"
                              placeholder="Enter job_position"
                            />
                            <button onClick={() => remove(index)}>
                              <CloseOutlined />
                            </button>
                            {index === fields.length - 1 && (
                              <button onClick={() => add()}>
                                <PlusOutlined />
                              </button>
                            )}
                          </div>
                        </Form.Item>
                      ))}
                    </>
                  )}
                </Form.List>
              </Col>
              <Col lg={6}>
                <Form.List name="software[]" key="software[]">
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map((field, index) => (
                        <Form.Item
                          {...field}
                          label="Enter Softwares"
                          rules={[
                            {
                              required: true,
                              message: "please Enter Softwares",
                            },
                          ]}
                        >
                          <div className="flex items-cEnter gap-x-2">
                            <Input
                              value={data?.data?.software[field?.key]}
                              className="py-2"
                              placeholder="Enter softwares"
                            />
                            <button onClick={() => remove(index)}>
                              <CloseOutlined />
                            </button>
                            {index === fields.length - 1 && (
                              <button onClick={() => add()}>
                                <PlusOutlined />
                              </button>
                            )}
                          </div>
                        </Form.Item>
                      ))}
                    </>
                  )}
                </Form.List>
              </Col>
            </Row>
            <div className="flex justify-between">
              <div>
                <Form.Item>
                  <Button
                    size="large"
                    style={{
                      color: "white",
                      borderRadius: "4px",
                    }}
                    htmlType="submit"
                    className="bg-customPrimary"
                  >
                    Submit
                  </Button>
                </Form.Item>
              </div>
              <div>
                <Form.Item>
                  <Button
                    size="large"
                    htmlType="button"
                    onClick={onReset}
                    style={{
                      color: "white",
                      backgroundColor: "#D7263D",
                      borderRadius: "4px",
                    }}
                  >
                    cancel
                  </Button>
                </Form.Item>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </ConfigProvider>
  );
}
