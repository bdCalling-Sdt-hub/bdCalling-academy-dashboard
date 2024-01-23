/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-empty */

import updatePasswordImage from "../../../assets/forget-password/updatepassword.svg";
import logo from "../../../assets/logo.svg";

import { Col, ConfigProvider, Row } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { inputTheme } from "../../../themes/Index";
import ChangePasswordForm from "../../../component/UpdatePasswordForm/UpdatePasswordForm";
import { getuserInfo } from "../../../service/auth.service";
import { useVerifyOtpMutation } from "../../../redux/api/authApi";

export default function ResetPassword() {
  const navigate = useNavigate();
  const { otp } = useParams();
  const email = getuserInfo("email");
  const [verifyOtp, { isLoading }] = useVerifyOtpMutation();

  const onSubmit = async (data: any) => {
    try {
      console.log("something", data);
    } catch (error) {}
  };

  return (
    <ConfigProvider theme={inputTheme}>
      <div className="container mx-auto ">
        <Row justify="center" align={"middle"} className="h-screen ">
          <Col lg={12}>
            <div>
              <img src={updatePasswordImage} alt="update-possword" />
            </div>
          </Col>
          <Col lg={12}>
            <div className="title">
              <h1 className="text-2xl  font-bold mt-5 mb-2 flex items-center ">
                {/* <span className="cursor-pointer font-bold me-2 mt-1">
                  <IoIosArrowBack />
                </span>{" "} */}
                Reset Password
              </h1>
            </div>
            {/* form */}
            <div>
              <ChangePasswordForm onSubmit={onSubmit} />
            </div>
          </Col>
        </Row>
      </div>
    </ConfigProvider>
  );
}
