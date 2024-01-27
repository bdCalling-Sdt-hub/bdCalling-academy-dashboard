/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Col,
  ConfigProvider,
  Input,
  Row,
  message,
  Form,
  DatePicker,
} from "antd";
import CustomUpload from "../../../../component/UI/Upload/Upload";
import { selectedFiledTheme } from "../../../../themes/Index";
import { useState } from "react";
import useImageUpload from "../../../../hooks/useImageUpload";
import { useRegisterMutation } from "../../../../redux/api/authApi";
import { useForm } from "antd/es/form/Form";
import { EditOutlined } from "@ant-design/icons";
import personimage from "../../../../assets/table/person.svg";
import Loading from "../../../../component/UI/Loading/Loading";

export default function CreateStudents({ setshow }: any) {
  const { setFile, imageUrl, imageFile, setImageUrl } = useImageUpload();
  const [register, { isLoading }] = useRegisterMutation();
  const [form] = useForm();
  const onFinish = async (data: { [key: string]: string | Blob | number }) => {
    if (data?.password !== data?.password_confirmation) {
      message.error("re entered password did not match");
      return;
    }
    const formatedData: any = {
      ...data,
      // @ts-ignore
      dob: data?.dob?.format("YYYY-MM-DD"),
    };
    formatedData.userType = "STUDENT";
    formatedData.approve = 1;
    const formdData = new FormData();
    console.log("data from ", data);
    if (imageFile) {
      formdData.append("image", imageFile);
    }
    for (const [key, value] of Object.entries(formatedData)) {
      // @ts-ignore
      formdData.append(key, value);
    }
    try {
      const res: any = await register({ body: formdData }).unwrap();
      console.log(res);
      if (res?.message) {
        message.success(res?.message);
        form.resetFields();
        setImageUrl(null);
        setshow(false);
      }
    } catch (error: any) {
      message.error(error?.data?.userName[0]);
      message.error(error?.data?.email[0]);
    }
  };
  const onFinishFailed = (error: any) => {
    console.log(error);
  };
  return (
    <div>
      <ConfigProvider theme={selectedFiledTheme}>
        <div>
          <Form
            onFinish={onFinish}
            layout="vertical"
            onFinishFailed={onFinishFailed}
            initialValues={{}}
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
                      Please select an image{" "}
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
                    src={imageUrl ? imageUrl : personimage}
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
                  key="password"
                  name="password"
                  label="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input  password",
                    },
                    {
                      min: 6,
                      message: "password must be at least 6 characters",
                    },
                  ]}
                >
                  <Input.Password
                    type="password"
                    placeholder="password"
                    className="py-2"
                  />
                </Form.Item>
              </Col>
              <Col lg={12}>
                <Form.Item
                  key="password_confirmation"
                  name="password_confirmation"
                  label="Confirm Password"
                  rules={[
                    {
                      required: true,
                      message: "Please re enter password",
                    },
                    {
                      min: 6,
                      message: "password must be at least 6 characters",
                    },
                  ]}
                >
                  <Input.Password
                    type="password"
                    placeholder="password"
                    className="py-2"
                  />
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
                    placeholder="start date"
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
                  <Input placeholder="dob" className="py-2" />
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
                {isLoading ? <Loading /> : "CREATE"}
              </button>
            </div>
          </Form>
        </div>
      </ConfigProvider>
    </div>
  );
}
