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
import { useGetallCategoriesQuery } from "../../../../redux/api/categoryapi";
import { useGetallmentorsQuery } from "../../../../redux/api/mentorApi";
import { selectedFiledTheme } from "../../../../themes/Index";
import { CloseOutlined, PlusOutlined } from "@ant-design/icons";
import {
  useAddCourseMutation,
  useUpdateCourseMutation,
} from "../../../../redux/api/courseApi";
import { useNavigate } from "react-router-dom";
export default function Addcourse({ type, editableData }: any) {
  const [form] = Form.useForm();
  // const [courseType, setCourseType] = useState("Offline");
  const [file, setFile] = useState<File | null>(null);
  const navigate = useNavigate();
  const { data: categoryData }: any = useGetallCategoriesQuery(undefined);
  const { data: mentorData }: any = useGetallmentorsQuery(undefined);
  const [addCourse, { isLoading }] = useAddCourseMutation();
  const [editCourse] = useUpdateCourseMutation();
  // const handleButtonClick = (type: string) => {
  //   setCourseType(type);
  // };

  useEffect(() => {
    if (type === "edit" && editableData) {
      form.setFieldsValue({
        courseName: editableData?.courseName,
        language: editableData?.language,
        courseDetails: editableData?.courseDetails,
        startDate: editableData?.startDate,
        courseTimeLength: editableData?.courseTimeLength,
        price: editableData?.price,
        mentorId: editableData?.mentorId,
        maxStudentLength: editableData?.maxStudentLength,
        skillLevel: editableData?.skillLevel,
        address: editableData?.address,
        category_id: editableData?.category_id,
        status: editableData?.status,
        batch: editableData?.batch,
        discount_price: editableData?.discount_price,
        coupon_code: editableData?.coupon_code,
        coupon_code_price: editableData?.coupon_code_price,
        end_date: editableData?.end_date,
        seat_left: editableData?.seat_left,
        courseThumbnail: editableData?.courseThumbnail,
        careeropportunities: editableData?.careeropportunities || [], // Check if it exists
        carriculum: editableData?.carriculum || [], // Check if it exists
        job_position: editableData?.job_position || [], // Check if it exists
        software: editableData?.software || [], // Check if it exists
      });
    }
  }, [type, editableData, form]);

  console.log(file, "file");
  const onFinish = async (values: any) => {
    const finalData = {
      ...values,
      startDate: values.startDate.format("YYYY-MM-DD"),
      end_date: values.startDate.format("YYYY-MM-DD"),
      publish: 0,
    };

    if (!file) {
      message.error("please select a course thumbnail");
      return;
    }

    const formData = new FormData();
    if (file) {
      formData.append("courseThumbnail", file);
    }
    for (const [key, value] of Object.entries(finalData)) {
      // @ts-ignore

      formData.append(key, value);
    }

    try {
      if (type === "edit" && editableData) {
        const res = await editCourse(formData).unwrap();
        console.log(res);
      }
      const res: any = await addCourse(formData).unwrap();
      if (res) {
        message.success(res?.message);
        form.resetFields();
        navigate("/SUPER_ADMIN/courses");
      }
    } catch (err: any) {
      message.error(
        err.data.message ||
          err?.data?.error ||
          "something went wrong. please provide valid information"
      );
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
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
            Add Course
          </h1>
          {/* <div className="flex gap-x-4">
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
          </div> */}
        </div>
        <div className={`${style.AddcourseContainer} px-[30px] pt-[30px] mb-6`}>
          <Form
            layout="vertical"
            form={form}
            name="add-course"
            initialValues={editableData ? editableData : {}}
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
                  label="Enter Language"
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
                    style={{ width: "100%", padding: "8px" }}
                    placeholder="start date"
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
                    style={{ width: "100%", padding: "8px" }}
                    placeholder="end date"
                  />
                </Form.Item>
              </Col>
              <Col lg={12}>
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
              <Col lg={12}>
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
              <Col lg={12}>
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
              {/* <Col lg={12}>
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
              </Col> */}
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
                    { min: 10, message: "Course Details " },
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
                <Form.List
                  name="carriculum[]"
                  key="carriculum[]"
                  initialValue={[{ key: "0", value: "" }]}
                >
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
                <Form.List
                  name="job_position[]"
                  key="job_position[]"
                  initialValue={[{ key: "0", value: "" }]}
                >
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
                <Form.List
                  name="software[]"
                  key="software[]"
                  initialValue={[{ key: "0", value: "" }]}
                >
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
