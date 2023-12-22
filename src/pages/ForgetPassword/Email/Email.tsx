/* eslint-disable @typescript-eslint/no-explicit-any */
import { MailOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Form, Input, message } from "antd";
import forget1Image from "../../../assets/forget-password/forget1.svg";
import logo from "../../../assets/logo.svg";
import style from "./email.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Flex } from "antd";
import { inputTheme } from "../../../themes/Index";

export default function Email() {
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    try {
      message.success("email send successfully");
      navigate("/forgetpassword/otp");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const redirectSignin = () => {
    navigate("/signin");
  };
  return (
    <ConfigProvider theme={inputTheme}>
      <div className="container mx-auto ">
        <Flex
          align="center"
          style={{
            minHeight: "100vh",
          }}
          justify="space-around"
        >
          <div>
            <img src={forget1Image} alt="signup-image" />
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
                      onClick={redirectSignin}
                      className="cursor-pointer font-bold me-2 mt-1"
                    >
                      <IoIosArrowBack />
                    </span>{" "}
                    Forget Password
                  </h1>
                  <p className="">
                    Enter the email address associated with your account. <br />{" "}
                    We'll send you an OTP in your email.{" "}
                  </p>
                </div>
                {/* form */}
                <div className={`${style.formContainer} mt-2`}>
                  <Form
                    name="forgetPasswordEmailFrom"
                    className="forgetPassword-form mt-2"
                    initialValues={{}}
                    onFinish={onSubmit}
                  >
                    <div>
                      <label htmlFor="email" className="font-bold">
                        Email
                      </label>
                      <Form.Item
                        name="email"
                        id="email"
                        rules={[
                          {
                            required: true,
                            message: "Please input your email!",
                          },
                        ]}
                      >
                        <Input
                          prefix={
                            <MailOutlined className="site-form-item-icon" />
                          }
                          placeholder="Email"
                          type="email"
                          className={`${style.input}`}
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
                        SEND OTP
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </Flex>
      </div>
    </ConfigProvider>
  );
}
