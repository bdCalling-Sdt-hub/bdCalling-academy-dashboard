/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { EditOutlined } from "@ant-design/icons";
import {
  Col,
  ConfigProvider,
  Form,
  Input,
  Row,
  Select,
  SelectProps,
  message,
} from "antd";
import style from "../EditMentor/editmentor.module.css";
import personimage from "../../../../assets/table/person.svg";
import { useState } from "react";
import CustomUpload from "../../../../component/UI/Upload/Upload";
import { useRegisterMutation } from "../../../../redux/api/authApi";
import { useGetallCategoriesQuery } from "../../../../redux/api/categoryapi";
import { selectedFiledTheme } from "../../../../themes/Index";
import { useForm } from "antd/es/form/Form";
import errorResponse from "../../../../utils/errorResponse";
import Loading from "../../../../component/UI/Loading/Loading";
import useImageUpload from "../../../../hooks/useImageUpload";

export default function CreateMentor({ setshow }: any) {
  const { setFile, imageUrl, imageFile, setImageUrl } = useImageUpload();
  const [register, { isLoading }] = useRegisterMutation();
  const [form] = useForm();

  const { data: categoryData }: any = useGetallCategoriesQuery(undefined);
  const onFinish = async (data: { [key: string]: string | Blob | number }) => {
    if (data?.password !== data?.password_confirmation) {
      message.error("re entered password did not match");
      return;
    }
    data.userType = "MENTOR";
    data.approve = 1;
    const formdData = new FormData();
    console.log("data from ", data);
    if (imageFile) {
      formdData.append("image", imageFile);
    }
    for (const [key, value] of Object.entries(data)) {
      // @ts-ignore
      formdData.append(key, value);
    }
    try {
      const res: any = await register({ body: formdData }).unwrap();
      console.log(res);
      if (res?.message) {
        message.info(res?.message);
        form.resetFields();
        setshow(false);
        setImageUrl(null);
      }
    } catch (error: any) {
      message.error(error?.data?.email[0]);
      message.error(error?.data?.userName[0]);
    }
  };
  const onFinishFailed = (error: any) => {
    console.log(error);
  };
  const options: SelectProps["options"] = categoryData?.data?.map(
    (category: any) => {
      return {
        value: category?.id,
        label: category?.category_name,
      };
    }
  );
  return (
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
                    Please input mentor image{" "}
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
                key="designation"
                name="designation"
                label="Designation"
                rules={[
                  {
                    required: true,
                    message: "please input Designation",
                  },
                ]}
              >
                <Input placeholder="Designation" className="py-2" />
              </Form.Item>
            </Col>
            <Col lg={12}>
              <Form.Item
                key="expert"
                name="expert"
                label="Expert"
                rules={[
                  {
                    required: true,
                    message: "please input expert",
                  },
                ]}
              >
                <Input placeholder="expert" className="py-2" />
              </Form.Item>
            </Col>
            <Col lg={24}>
              <Form.Item
                label="Please select category"
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
          </Row>
          <div className={style.buttonContainer}>
            <button type="submit" className={style.mentorsCardEditBtn}>
              {isLoading ? <Loading /> : "CREATE"}
            </button>
          </div>
        </Form>
      </div>
    </ConfigProvider>
  );
}
