/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-empty */
import { LockOutlined } from "@ant-design/icons";
import updatePasswordImage from "../../../assets/forget-password/updatepassword.svg";
import logo from "../../../assets/logo.svg";
import style from "./updatePassword.module.css";
import { Button, Form, Input, Row, Col, ConfigProvider } from "antd";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { inputTheme } from "../../../themes/Index";
import ChangePasswordForm from "../../../component/ChangePasswordForm/ChangePasswordForm";

export default function UpdatePassword() {
  const navigate = useNavigate();
  const onSubmit = async (data: any) => {
    try {
      console.log("something", data);
    } catch (error) {}
  };

  return (
    <ConfigProvider theme={inputTheme}>
      <div className="container mx-auto ">
        <div style={{}}>
          <div
            className="flex justify-around items-center"
            style={{ minHeight: "100vh" }}
          >
            <div>
              <img src={updatePasswordImage} alt="update-possword" />
            </div>
            <div>
              <div>
                <div className={`${style.updatePasswordContainer} mt-2`}>
                  <div className="logo-image">
                    <img src={logo} alt="" />
                  </div>
                  <div className="title">
                    <h1 className="text-2xl  font-bold mt-5 mb-2 flex items-center ">
                      {" "}
                      <span className="cursor-pointer font-bold me-2 mt-1">
                        <IoIosArrowBack />
                      </span>{" "}
                      Update Password
                    </h1>
                  </div>
                  {/* form */}
                  <div>
                    <ChangePasswordForm onSubmit={onSubmit} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
}
