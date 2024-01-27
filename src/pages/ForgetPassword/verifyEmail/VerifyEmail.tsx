/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getuserInfo } from "../../../service/auth.service";
import { useVerifyOtpMutation } from "../../../redux/api/authApi";
import { Spin, message } from "antd";

const VerifyEmail = () => {
  const { id } = useParams();
  const email = getuserInfo("email");
  const navigate = useNavigate();
  const [verifyOtp, { isLoading }] = useVerifyOtpMutation();
  const [errorMessage, setErrorMessage] = useState("");
  const verify = async () => {
    try {
      const res: any = await verifyOtp({
        email: email,
        verified_code: id,
      }).unwrap();
      if (res) {
        message.success(res.message);
        navigate("/resetpassword");
      }
    } catch (err: any) {
      setErrorMessage(err?.data?.error);
    }
  };
  useEffect(() => {
    verify();
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <p className="mb-4">
          <Spin size="large"></Spin>
        </p>
        <h1 className="text-2xl font-bold text-customPrimary">
          Your OTP is currently being verified. Please wait for the process to
          complete.
        </h1>
        <p className="text-red-500 mt-4"> {errorMessage}</p>
      </div>
    </div>
  );
};

export default VerifyEmail;
