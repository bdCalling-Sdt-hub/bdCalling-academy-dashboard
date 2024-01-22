/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */

import logo from "../../../assets/logo.svg";

import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import otpImage from "../../../assets/forget-password/forget3.svg";

import OtpForm from "../../../component/OtpForm/OtpForm";

export default function Otp() {
  const navigate = useNavigate();

  const handleSubmit = (otp: string | number, otpError: string) => {
    console.log(otp, otpError);
  };
  const resendOtp = () => {};

  const redirectEmail = () => {
    navigate("/forgetpassword/email");
  };
  return (
    <div className="container mx-auto  h-screen  flex justify-around items-center ">
      <div>
        <img src={otpImage} alt="signup-image" />
      </div>
      <div>
        <div>
          <div>
            <div className="logo-image">
              <img src={logo} alt="" />
            </div>
            <div className="title">
              <h1 className="text-2xl  font-bold mt-5 mb-2 flex items-center ">
                {" "}
                <span
                  onClick={redirectEmail}
                  className="cursor-pointer font-bold me-2 mt-1"
                >
                  <IoIosArrowBack />
                </span>{" "}
                Verify OTP
              </h1>
              <p className="my-4">
                We'll send a verification code to your email. Check your inbox{" "}
                <br /> and enter the code here.
              </p>
            </div>
            <OtpForm handleOtpSubmit={handleSubmit} btnText="verify" />
          </div>
        </div>
      </div>
    </div>
  );
}
