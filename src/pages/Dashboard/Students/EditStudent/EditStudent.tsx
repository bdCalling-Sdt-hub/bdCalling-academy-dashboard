/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  ConfigProvider,
  Input,
  message,
  Row,
  Col,
  Form,
  DatePicker,
  Select,
  SelectProps,
} from "antd";
import React, { useEffect } from "react";
import { selectedFiledTheme } from "../../../../themes/Index";

import useImageUpload from "../../../../hooks/useImageUpload";
import { useForm } from "antd/es/form/Form";
import { EditOutlined } from "@ant-design/icons";
import CustomUpload from "../../../../component/UI/Upload/Upload";
import Loading from "../../../../component/UI/Loading/Loading";
import { useUpdateprofileMutation } from "../../../../redux/api/authApi";
import { IMAGE_BASE_URL } from "../../../../utils/Common";
import { useGetSingleStudentQuery } from "../../../../redux/api/StudentApi";
import dayjs from "dayjs";
import {
  useGetSingleCourseQuery,
  useGetallCourseQuery,
} from "../../../../redux/api/courseApi";

const EditStudent = ({ setshow, id }: any) => {
  const { setFile, imageUrl, imageFile } = useImageUpload();
  console.log(imageFile);
  const [form] = useForm();
  const [updateProfile, { isLoading }] = useUpdateprofileMutation();
  const { data: studentData }: any = useGetSingleStudentQuery(id);
  const { data: courses }: any = useGetallCourseQuery(undefined);
  const courseData = courses?.data?.data;
  const {
    image,
    fullName,
    userName,
    mobileNumber,
    email,
    dob,
    address,
    bloodGroup,
    course_id,
  } = studentData?.user || {};

  const { data }: any = useGetSingleCourseQuery(course_id);

  useEffect(() => {
    if (studentData?.user) {
      form.setFieldsValue({
        image, // Set imageUrl directly, assuming it's a URL
        fullName,
        userName,
        mobileNumber,
        email,
        address,
        bloodGroup,
        course_id: data?.data?.id,
        dob: dob ? dayjs(dob) : "",
      });
    }
  }, [
    form,
    address,
    image,
    fullName,
    mobileNumber,
    bloodGroup,
    data?.data,
    dob,
    email,
    studentData?.user,
    userName,
  ]);

  const onFinish = async (data: { [key: string]: string | Blob | number }) => {
    console.log("coursedata", data);
    const formatedData: any = {
      ...data,
      // @ts-ignore
      dob: data?.dob?.format("YYYY-MM-DD"),
    };
    const formdData = new FormData();
    if (imageFile) {
      formdData.append("image", imageFile);
    }
    for (const [key, value] of Object.entries(formatedData)) {
      // @ts-ignore
      formdData.append(key, value);
    }
    try {
      const res: any = await updateProfile({
        id: studentData?.user?.id,
        body: formdData,
      }).unwrap();

      if (res) {
        message.success(res?.message);
        form.resetFields();
        // window.location.reload();
        setshow(false);
      }
    } catch (error: any) {
      if (error?.data?.userName) {
        message.error(error.data.userName[0]);
      } else if (error?.data?.email) {
        console.log("error");
        message.error(error.data.email[0]);
      } else if (error?.data?.error) {
        message.error(error.data.error);
      } else if (error?.data?.message) {
        message.error(error.data.message);
      } else {
        message.error("Something Went Wrong");
      }
    }
  };
  const options: SelectProps["options"] = courseData?.map((course: any) => {
    return {
      value: course?.id,
      label: course?.courseName,
    };
  });
  return (
    <div>
      <ConfigProvider theme={selectedFiledTheme}>
        <div>
          <Form
            onFinish={onFinish}
            layout="vertical"
            initialValues={{ ...studentData?.user, dob: dayjs(dob) }}
            form={form}
          >
            <Form.Item
              key="image"
              name="image"
              rules={[
                {
                  required: true,
                  message: (
                    <p className="flex justify-center ">
                      Please Select An Image
                    </p>
                  ),
                },
              ]}
            >
              <div className="flex justify-center items-center py-6">
                <div className="relative">
                  <CustomUpload
                    name="avatar"
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
                        top: "90%",
                        left: "80%",
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
                    src={imageUrl || `${IMAGE_BASE_URL}/${image}`}
                    alt="avatar"
                    style={{
                      width: "140px",
                      height: "140px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </Form.Item>
            <Row gutter={16} justify={"center"} align={"middle"}>
              <Col lg={12}>
                <Form.Item
                  key="fullName"
                  name="fullName"
                  label="Full Name"
                  rules={[
                    {
                      required: true,
                      message: "Please input your user name ",
                    },
                  ]}
                >
                  <Input placeholder="full  name" className="py-2" />
                </Form.Item>
              </Col>
              <Col lg={12}>
                <Form.Item
                  key="userName"
                  name="userName"
                  label="User Name"
                  rules={[
                    {
                      required: true,
                      message: "Please input your full  name",
                    },
                  ]}
                >
                  <Input placeholder="user  name" className="py-2" />
                </Form.Item>
              </Col>
              <Col lg={12}>
                <Form.Item
                  key="mobileNumber"
                  name="mobileNumber"
                  label=" phone Number"
                  rules={[
                    {
                      required: true,
                      message: "Please input phone  number",
                    },
                    {
                      min: 11,
                      message: "Mobile number must be 11 digits",
                    },
                    {
                      max: 11,
                      message: "Mobile number must be 11 digits",
                    },
                  ]}
                >
                  <Input
                    type="number"
                    placeholder="mobile number"
                    className="py-2"
                  />
                </Form.Item>
              </Col>
              <Col lg={12}>
                <Form.Item
                  key="email"
                  name="email"
                  label="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input  email",
                    },
                  ]}
                >
                  <Input type="email" placeholder="email" className="py-2" />
                </Form.Item>
              </Col>

              <Col lg={12}>
                <Form.Item
                  key="dob"
                  name="dob"
                  label="Date of Birth"
                  rules={[
                    {
                      required: true,
                      message: "please input dob",
                    },
                  ]}
                >
                  <DatePicker
                    style={{ width: "100%", padding: "8px" }}
                    placeholder="date of birth"
                  />
                </Form.Item>
              </Col>
              <Col lg={12}>
                <Form.Item
                  key="bloodGroup"
                  name="bloodGroup"
                  label="Blood Group"
                  rules={
                    [
                      // {
                      //   required: true,
                      //   message: "please input expert",
                      // },
                    ]
                  }
                >
                  <Input placeholder="blood group" className="py-2" />
                </Form.Item>
              </Col>
              <Col lg={24}>
                <Form.Item
                  label="Select Course"
                  name="course_id"
                  key="course_id"
                  rules={[{ required: true, message: "Please Input Address" }]}
                >
                  <Select
                    style={{ width: "100%" }}
                    options={options}
                    placeholder="please select course"
                  />
                </Form.Item>
              </Col>
              <Col lg={24}>
                <Form.Item
                  label="Address"
                  name="address"
                  rules={[{ required: true, message: "Please Input Address" }]}
                >
                  {/* <Select
                style={{ width: "100%" }}
                options={options}
                placeholder="please select a category"
              /> */}
                  <Input placeholder="address" className="py-2" />
                </Form.Item>
              </Col>
            </Row>
            <div>
              <button
                type="submit"
                className="bg-customPrimary text-[#fff] px-10 py-2 rounded block mx-auto"
              >
                {isLoading ? <Loading /> : "EDIT"}
              </button>
            </div>
          </Form>
        </div>
      </ConfigProvider>
    </div>
  );
};

export default EditStudent;
