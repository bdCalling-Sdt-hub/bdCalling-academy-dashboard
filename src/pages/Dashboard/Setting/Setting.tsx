/* eslint-disable @typescript-eslint/no-explicit-any */
import { RightOutlined } from "@ant-design/icons";
import { Switch } from "antd";
import { Link } from "react-router-dom";
import CustomModal from "../../../component/UI/Modal/Modal";
import { useState } from "react";
import ChangePassword from "../../../component/ChangePasswordForm/ChangePasswordForm";

import { useAppSelector } from "../../../redux/hooks";
import { useCurrentUser } from "../../../redux/features/auth/authSlice";

export default function Setting() {
  const [open, setOpen] = useState(false);

  const user: any = useAppSelector(useCurrentUser);

  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
  const handleChangePassword = (data: any) => {
    console.log(data);
  };

  const handleOtpModal = () => {
    setOpen(false);
  };

  return (
    <div className="h-screen">
      {/* modal for change password */}
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
          setshow={handleOtpModal}
        />
      </CustomModal>
      {/* modal for otp */}

      <div className="flex bg-[#fff] justify-between items-center p-4 rounded ">
        <p className="text-[#333] text-lg">Profile</p>
        <Link to={`/profile/${user?.id}`}>
          <RightOutlined style={{ fontSize: "18px", cursor: "pointer" }} />
        </Link>
      </div>
      <div className="flex bg-[#fff]  my-[20px] justify-between p-4 rounded ">
        <p className="text-[#333] text-lg">Notification</p>
        <Switch defaultChecked onChange={onChange} />
      </div>
      {/* <div className="flex bg-[#fff] my-[20px] justify-between p-4 rounded ">
        <p className="text-[#333] text-lg">Change Password</p>
        <RightOutlined
          onClick={() => setOpen(true)}
          style={{ fontSize: "18px", cursor: "pointer" }}
        />
      </div> */}
      {/* <div className="flex bg-[#fff] justify-between p-4 rounded ">
        <p className="text-[#333] text-lg">Login Activity</p>
        <Link to={"/setting/login-activity"}>
          <RightOutlined style={{ fontSize: "18px", cursor: "pointer" }} />
        </Link>
      </div> */}
    </div>
  );
}
