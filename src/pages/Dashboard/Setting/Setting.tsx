/* eslint-disable @typescript-eslint/no-explicit-any */
import { RightOutlined } from "@ant-design/icons";
import { Switch } from "antd";
import { Link } from "react-router-dom";
import CustomModal from "../../../component/UI/Modal/Modal";
import { useState } from "react";
import ChangePassword from "../../../component/ChangePassword/ChangePassword";
import OtpForm from "../../../component/OtpForm/OtpForm";
import { getuser } from "../../../service/auth.service";

export default function Setting() {
  const [open, setOpen] = useState(false);
  const [openOtpModal, setOpenOtpModal] = useState(false);
  const { email } = getuser("user") || {};
  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
  const handleChangePassword = (data: any) => {
    console.log(data);
  };
  const handleOtpSubmit = (data: any) => {
    console.log(data);
  };
  const handleOtpModal = () => {
    setOpenOtpModal(true);
    setOpen(false);
  };
  return (
    <div className="h-screen">
      <CustomModal
        showCancelButton={false}
        showOkButton={false}
        title={""}
        isOpen={open}
        closeModal={() => setOpen(false)}
      >
        <ChangePassword
          btnText="confirm"
          onSubmit={handleChangePassword}
          showForgotPassword={true}
          setOpenOtpModal={handleOtpModal}
        />
      </CustomModal>
      <CustomModal
        showCancelButton={false}
        showOkButton={false}
        title={""}
        isOpen={openOtpModal}
        closeModal={() => setOpenOtpModal(false)}
      >
        <div>
          <h1 className="text-2xl font-semibold text-customPrimary">
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
      <div className="flex bg-[#fff] justify-between p-4 rounded ">
        <p className="text-[#333] text-lg">Notification</p>
        <Switch defaultChecked onChange={onChange} />
      </div>
      <div className="flex bg-[#fff] my-[20px] justify-between p-4 rounded ">
        <p className="text-[#333] text-lg">Change Password</p>
        <RightOutlined
          onClick={() => setOpen(true)}
          style={{ fontSize: "18px", cursor: "pointer" }}
        />
      </div>
      <div className="flex bg-[#fff] justify-between p-4 rounded ">
        <p className="text-[#333] text-lg">Login Activity</p>
        <Link to={"/setting/login-activity"}>
          <RightOutlined style={{ fontSize: "18px", cursor: "pointer" }} />
        </Link>
      </div>
    </div>
  );
}
