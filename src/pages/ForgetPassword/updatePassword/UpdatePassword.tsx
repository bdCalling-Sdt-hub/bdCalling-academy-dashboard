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
                    <Form
                      name="update-password"
                      className=""
                      initialValues={{}}
                      onFinish={onSubmit}
                    >
                      <div>
                        <label htmlFor="email" className="font-semibold">
                          New password
                        </label>
                        <Form.Item
                          name="password"
                          rules={[
                            {
                              required: true,
                              message: "Please input your Password!",
                            },
                          ]}
                        >
                          <Input
                            prefix={
                              <LockOutlined className="site-form-item-icon" />
                            }
                            name="newPassword"
                            type="password"
                            placeholder="Password"
                            className={style.input}
                          />
                        </Form.Item>
                      </div>
                      <div>
                        <label htmlFor="email" className="font-semibold">
                          Confirm Password
                        </label>
                        <Form.Item
                          name="password"
                          rules={[
                            {
                              required: true,
                              message: "Please input your Password!",
                            },
                          ]}
                        >
                          <Input
                            name="confirmPassword"
                            prefix={
                              <LockOutlined className="site-form-item-icon" />
                            }
                            type="password"
                            placeholder="Password"
                            className={style.input}
                          />
                        </Form.Item>
                      </div>

                      <Form.Item>
                        <Button
                          type="primary"
                          htmlType="submit"
                          className="login-form-button"
                          block
                          style={{
                            height: "45px",
                            fontWeight: "400px",
                            fontSize: "18px",
                            background: "#2492EB",
                          }}
                        >
                          Confirm
                        </Button>
                      </Form.Item>
                    </Form>
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
