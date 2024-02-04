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
import { CloseOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import {
  useGetSingleCourseQuery,
  useUpdateCourseMutation,
} from "../../../../redux/api/courseApi";

import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import moment from "moment";
import { USER_ROLE } from "../../../../constants/role";
import { IMAGE_BASE_URL } from "../../../../utils/Common";
import CustomUpload from "../../../../component/UI/Upload/Upload";
import useImageUpload from "../../../../hooks/useImageUpload";
import Loading from "../../../../component/UI/Loading/Loading";
export default function EditCourse() {
  const { id } = useParams();

  const [form] = Form.useForm();
  const [courseType, setCourseType] = useState("Offline");

  const { data: categoryData }: any = useGetallCategoriesQuery(undefined);
  const { data: mentorData }: any = useGetallmentorsQuery(undefined);
  const { setFile, imageUrl, imageFile } = useImageUpload();
  const { data }: any = useGetSingleCourseQuery(id);
  console.log(data, "data");
  const [editCourse, { isLoading }] = useUpdateCourseMutation();
  const handleButtonClick = (type: string) => {
    setCourseType(type);
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (data?.data) {
      form.setFieldsValue({
        courseName: data?.data?.courseName,
        popular: data?.data?.popular,
        // publish: data?.data?.publish,
        language: data?.data?.language,
        courseDetails: data?.data?.courseDetails,
        startDate: dayjs(data?.data?.startDate),
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
        end_date: dayjs(data?.data?.end_date),
        seat_left: data?.data?.seat_left,
        courseThumbnail: data?.data?.courseThumbnail,
        "careeropportunities[]": data?.data?.careeropportunities || [], // Check if it exists
        "carriculum[]": data?.data?.carriculum || [], // Check if it exists
        "job_position[]": data?.data?.job_position || [], // Check if it exists
        "software[]": data?.data?.software || [], // Check if it exists
      });
    }
  }, [data?.data, form, imageFile]);
  const onFinish = async (values: any) => {
    const finalData = {
      ...values,
      startDate: values?.startDate.format("YYYY-MM-DD"),
      end_date: values?.end_date.format("YYYY-MM-DD"),
    };
    console.log("finalData", finalData);
    if (!imageFile) {
      delete finalData?.courseThumbnail;
    }
    try {
      const formData = new FormData();
      if (imageFile) {
        formData.append("courseThumbnail", imageFile);
      }
      for (const [key, value] of Object.entries(finalData)) {
        if (Array.isArray(value)) {
          for (const item of value) {
            formData.append(key, item);
          }
        } else {
          // @ts-ignore
          formData.append(key, value);
        }
      }

      const res: any = await editCourse({
        id: data?.data?.id,
        body: formData,
      }).unwrap();
      if (res) {
        message.success(res?.message);
        form.resetFields();
        navigate(`/${USER_ROLE.ADMIN}/courses`);
      }
    } catch (err: any) {
      message.error(
        err.data.message || err?.data?.error || "something went wrong"
      );
    }
  };

  const onFinishFailed = () => {};
  const onReset = () => {
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
  console.log("dsfsdfdsf", mentorOptions);

  return (
    <ConfigProvider theme={selectedFiledTheme}>
      <div className="">
        {/* <div className="flex justify-between items-cEnter mb-[30px]">
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
        </div> */}
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
              <Col lg={24}>
                <Form.Item
                  key="courseThumbnail"
                  name="courseThumbnail"
                  rules={[
                    {
                      required: true,
                      message: (
                        <p className="flex justify-center ">
                          Please input mentor image{" "}
                        </p>
                      ),
                    },
                  ]}
                >
                  <div className="flex justify-center  py-6">
                    <div className="relative w-[400px]">
                      <CustomUpload
                        name="avatar"
                        // listType="picture-card"
                        className={`avatar-uploader`}
                        showUploadList={false}
                        setLoading={() => {}}
                        setImageUrl={() => {}}
                        setImageFile={setFile}
                      >
                        <div
                          className=" bg-customPrimary absolute"
                          style={{
                            width: "30px",
                            color: "white",
                            height: "30px",
                            textAlign: "center",
                            borderRadius: "50%",
                            top: "95%",
                            left: "98%",
                            transform: "translate(-50%, -50%)",
                          }}
                        >
                          <span
                            className="font-bold text-lg cursor-pointer"
                            style={{}}
                          >
                            <EditOutlined />
                          </span>
                        </div>
                      </CustomUpload>
                      <img
                        className=""
                        src={
                          imageUrl ||
                          ` ${IMAGE_BASE_URL}/${data?.data?.courseThumbnail}`
                        }
                        alt="avatar"
                        style={{
                          // width: "140px",
                          // height: "140px",
                          top: "40%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </div>
                </Form.Item>
              </Col>

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
                  label="Select Popularity"
                  name="popular"
                  key="popular"
                  rules={[
                    { required: true, message: "Please select Popularity" },
                  ]}
                >
                  <Select
                    style={{ width: "100%" }}
                    options={[
                      { label: "true", value: 1 },
                      { label: "false", value: 0 },
                    ]}
                    placeholder="please select Popularity"
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
                      { label: "true", value: 1 },
                      { label: "false", value: 0 },
                    ]}
                    placeholder="please select a category"
                  />
                </Form.Item>
              </Col> */}

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
                    maxLength={5000}
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
                    maxLength={200}
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
                        <Row key={field.key} gutter={16} align="middle">
                          <Col lg={20}>
                            <Form.Item
                              {...field}
                              // name={[field.name, "careeropportunities[]"]}
                              label="Enter Carrier Opportunity"
                              rules={[
                                {
                                  required: true,
                                  message: "please Enter Carrier Opportunity",
                                },
                              ]}
                            >
                              <Input
                                className="py-2"
                                placeholder="Enter careeropportunities"
                              />
                            </Form.Item>
                          </Col>
                          <Col lg={2}>
                            <div className="flex gap-x-2">
                              <button onClick={() => remove(index)}>
                                <CloseOutlined />
                              </button>
                              {index === fields.length - 1 && (
                                <button onClick={() => add()}>
                                  <PlusOutlined />
                                </button>
                              )}
                            </div>
                          </Col>
                        </Row>
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
                        <Row key={field.key} gutter={16} align="middle">
                          <Col lg={20}>
                            <Form.Item
                              {...field}
                              // name={[field.name, "careeropportunities[]"]}
                              label="Enter carriculum"
                              rules={[
                                {
                                  required: true,
                                  message: "please Enter curriculum",
                                },
                              ]}
                            >
                              <Input
                                className="py-2"
                                placeholder="Enter curriculum"
                              />
                            </Form.Item>
                          </Col>
                          <Col lg={2}>
                            <div className="flex gap-x-2">
                              <button onClick={() => remove(index)}>
                                <CloseOutlined />
                              </button>
                              {index === fields.length - 1 && (
                                <button onClick={() => add()}>
                                  <PlusOutlined />
                                </button>
                              )}
                            </div>
                          </Col>
                        </Row>
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
                        <Row key={field.key} gutter={16} align="middle">
                          <Col lg={20}>
                            <Form.Item
                              {...field}
                              // name={[field.name, "careeropportunities[]"]}
                              label="Enter job positions"
                              rules={[
                                {
                                  required: true,
                                  message: "please Enter job positions",
                                },
                              ]}
                            >
                              <Input
                                className="py-2"
                                placeholder="Enter job positions"
                              />
                            </Form.Item>
                          </Col>
                          <Col lg={2}>
                            <div className="flex gap-x-2">
                              <button onClick={() => remove(index)}>
                                <CloseOutlined />
                              </button>
                              {index === fields.length - 1 && (
                                <button onClick={() => add()}>
                                  <PlusOutlined />
                                </button>
                              )}
                            </div>
                          </Col>
                        </Row>
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
                        <Row key={field.key} gutter={16} align="middle">
                          <Col lg={20}>
                            <Form.Item
                              {...field}
                              // name={[field.name, "careeropportunities[]"]}
                              label="Enter Softwares"
                              rules={[
                                {
                                  required: true,
                                  message: "please Enter software",
                                },
                              ]}
                            >
                              <Input
                                className="py-2"
                                placeholder="Enter software"
                              />
                            </Form.Item>
                          </Col>
                          <Col lg={2}>
                            <div className="flex gap-x-2">
                              <button onClick={() => remove(index)}>
                                <CloseOutlined />
                              </button>
                              {index === fields.length - 1 && (
                                <button onClick={() => add()}>
                                  <PlusOutlined />
                                </button>
                              )}
                            </div>
                          </Col>
                        </Row>
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
                    {isLoading ? <Loading /> : "Submit"}
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
