/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
} from "@ant-design/icons";
import { Col, Form, Input, Row, message } from "antd";
import style from "./changePassword.module.css";
import { useUpdatePasswordMutation } from "../../redux/api/authApi";
import Loading from "../UI/Loading/Loading";
import UpdatePasswordForm from "../UpdatePasswordForm/UpdatePasswordForm";
import CustomModal from "../UI/Modal/Modal";
import { useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentUser } from "../../redux/features/auth/authSlice";
import OtpForm from "../OtpForm/OtpForm";
interface IChangePassword {
  onSubmit: (data: any) => void;
  btnText: string;
  showForgotPassword?: boolean;
  setshow: (value: boolean) => void;
}
export default function ChangePassword({
  onSubmit,
  btnText,

  setshow,
}: IChangePassword) {
  const [form] = Form.useForm();
  const [openUpdatePasswordModal, setOpenUpdatePasswordModal] = useState(false);
  const { email }: any = useAppSelector(useCurrentUser);
  const [openOtpModal, setOpenOtpModal] = useState(false);
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
  const handleOtpSubmit = (data: any) => {
    if (data) {
      setOpenUpdatePasswordModal(true);
    }
  };
  const handleUpdatePasswordSubmit = (data: any) => {
    console.log(data);
    setOpenUpdatePasswordModal(false);
  };

  return (
    <div>
      <CustomModal
        showCancelButton={false}
        showOkButton={false}
        title={""}
        isOpen={openOtpModal}
        closeModal={() => setOpenOtpModal(false)}
      >
        <div>
          <h1 className="text-2xl font-semibold text-customHeader">
            Verify Otp
          </h1>
          <p className="py-4">
            Please enter 6-digit verification code that was sent.{" "}
            <span className="font-bold text-customPrimary">{email}</span>. the
            code is valid for 15 minute.
          </p>
          <OtpForm
            handleOtpSubmit={handleOtpSubmit}
            btnText="Continue"
            containerStyle="h-[300px]"
            btnStyle="mt-auto"
          />
        </div>
      </CustomModal>
      {/* modal for update password */}
      <CustomModal
        showCancelButton={false}
        showOkButton={false}
        title={""}
        isOpen={openUpdatePasswordModal}
        closeModal={() => setOpenUpdatePasswordModal(false)}
      >
        <div className="">
          <h1 className="text-2xl text-customHeader font-semibold my-2">
            Update Your Password
          </h1>

          <UpdatePasswordForm
            onSubmit={handleUpdatePasswordSubmit}
            containerStyle="h-[300px] mt-10"
            btnStyle="mt-auto"
          />
        </div>
      </CustomModal>
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
        {setOpenOtpModal && (
          <p
            onClick={() => {
              setOpenOtpModal(true), setshow(false);
            }}
            className="text-end font-semibold mb-2 text-customHeader hover:text-customPrimary cursor-pointer"
          >
            Forgot Password
          </p>
        )}
        <div className="text-center">
          <button className={style.saveBtn} type="submit">
            {isLoading ? <Loading /> : btnText}
          </button>
        </div>
      </Form>
    </div>
  );
}
