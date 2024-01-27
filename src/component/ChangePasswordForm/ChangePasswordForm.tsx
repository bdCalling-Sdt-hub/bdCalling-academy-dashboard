/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
} from "@ant-design/icons";
import { Col, Form, Input, Row, message } from "antd";
import style from "./changePassword.module.css";
import {
  useForgetPasswordMutation,
  useUpdatePasswordMutation,
} from "../../redux/api/authApi";
import Loading from "../UI/Loading/Loading";
import { useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentUser } from "../../redux/features/auth/authSlice";
import { storeUserInfo } from "../../service/auth.service";
interface IChangePassword {
  onSubmit: (data: any) => void;
  btnText: string;
  showForgotPassword?: boolean;
  setshow: (value: boolean) => void;
}
export default function ChangePassword({
  // onSubmit,
  btnText,

  setshow,
}: IChangePassword) {
  const [form] = Form.useForm();
  const [openUpdatePasswordModal, setOpenUpdatePasswordModal] = useState(false);
  const { email }: any = useAppSelector(useCurrentUser);
  const [sendEmail, { isLoading: isotpLoading }] = useForgetPasswordMutation();
  const [updatePassowrd, { isLoading }] = useUpdatePasswordMutation();
  const onFinish = async (data: any) => {
    if (data?.new_password !== data?.confirm_password) {
      message.error("The new password and confirm password do not match.");
      return;
    }
    if (data?.current_password === data?.new_password) {
      message.error("The current password and new password must be different");
      return;
    }
    try {
      const res: any = await updatePassowrd(data).unwrap();
      if (res) {
        message.success(res.message);
        form.resetFields();
        setshow(false);
      }
    } catch (error: any) {
      message.error(error?.data?.message);
    }
  };
  message;
  const onFinishFailed = (error: any) => {
    console.log(error);
    message.error(error.message);
  };

  const handleSendOtpEmail = async () => {
    try {
      const res: any = await sendEmail({ email: email }).unwrap();

      if (res.message) {
        message.info(res.message);
        storeUserInfo("email", email);
        // navigate("/verified/otp");
      }
    } catch (err: any) {
      message.error(err?.data?.error);
    }
  };
  return (
    <div>
      {/* modal for update password */}

      <Form
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
      >
        <h1 className="text-2xl font-semibold mb-6">Change your Password </h1>
        <Row gutter={16} justify={"center"} align={"middle"}>
          <Col lg={24}>
            <Form.Item
              key="current_password"
              name="current_password"
              label="Enter your old password"
              rules={[
                {
                  required: true,
                  message: "Please input your old password",
                },
              ]}
            >
              <Input.Password
                prefix={
                  <LockOutlined
                    style={{ color: "gray ", marginRight: "6px" }}
                  />
                }
                style={{
                  padding: "10px",
                }}
                placeholder="input old password "
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>
          </Col>
          <Col lg={24}>
            <Form.Item
              label="Enter your new password"
              key="new_password"
              name="new_password"
              rules={[
                {
                  required: true,
                  message: "Please input your old password",
                },
                {
                  min: 6,
                  message: "password must be at least 6 characters",
                },
              ]}
            >
              <Input.Password
                style={{
                  padding: "10px",
                }}
                prefix={
                  <LockOutlined
                    style={{ color: "gray ", marginRight: "6px" }}
                  />
                }
                placeholder="input old password "
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>
          </Col>
          <Col lg={24}>
            <Form.Item
              label="Re-enter the new password"
              key="confirm_password"
              name="confirm_password"
              rules={[
                {
                  required: true,
                  message: "Please input your old password",
                },
                {
                  min: 6,
                  message: "password must be at least 6 characters",
                },
              ]}
            >
              <Input.Password
                prefix={
                  <LockOutlined
                    style={{ color: "gray ", marginRight: "6px" }}
                  />
                }
                style={{
                  padding: "10px",
                }}
                placeholder="input old password "
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>
          </Col>
        </Row>

        <p
          onClick={handleSendOtpEmail}
          className="text-end font-semibold mb-2 text-customHeader hover:text-customPrimary cursor-pointer"
        >
          Forgot Password
        </p>

        <div className="text-center">
          <button className={style.saveBtn} type="submit">
            {isLoading ? <Loading /> : btnText}
          </button>
        </div>
      </Form>
    </div>
  );
}
