/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-empty */
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import axios from "axios";
import singupImage from "../../assets/auth/isometric.svg";
import logo from "../../assets/auth/Component 2.svg";
import style from "./Signin.module.css";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Row,
  Col,
  ConfigProvider,
  message,
} from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { inputTheme } from "../../themes/Index";

import { useLoginMutation } from "../../redux/api/authApi";

import { useAppDispatch } from "../../redux/hooks";
import { setUser } from "../../redux/features/auth/authSlice";
import { useState } from "react";
import Loading from "../../component/UI/Loading/Loading";

export default function SignIn() {
  const navigate = useNavigate();
  const [signin] = useLoginMutation();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const onSubmit = async (data: any) => {
    try {
      const result: any = await signin(data).unwrap();
      if (result) {
        setLoading(true);
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_API}/profile/`,
          {
            headers: {
              Authorization: `Bearer ${result?.access_token}`,
            },
          }
        );
        let newUser: any = {};
        if (response?.data?.user) {
          newUser = { ...response?.data?.user };
          if (response?.data?.user?.userType === "SUPER ADMIN") {
            newUser = { ...response?.data?.user, userType: "SUPER_ADMIN" };
          }
          dispatch(setUser({ token: result.access_token, user: newUser }));
          setLoading(false);
          navigate(`/${newUser?.userType}/dashboard`);
        }
      }
      // console.log(result);

      // console.log(newUser);
    } catch (error: any) {
      message.error(error?.data?.error || error?.data?.message);
    }
  };

  const handleForget = () => {
    navigate("/forgetpassword/email");
  };

  return (
    <ConfigProvider theme={inputTheme}>
      <div className="container mx-auto ">
        <Row
          justify="center"
          align={"middle"}
          style={{
            minHeight: "100vh",
          }}
        >
          <Col lg={12}>
            <img src={singupImage} alt="signup-image" />
          </Col>
          <Col lg={12}>
            <div>
              <div>
                <div className="logo-image">
                  <img src={logo} alt="" />
                </div>
                <div className="title">
                  <h1 className="text-2xl  font-bold mt-5 mb-2 ">
                    Hello,Welcome!
                  </h1>
                  <p className="">
                    Please Enter Your Details Below to Continue
                  </p>
                </div>
                {/* form */}
                <div className={`${style.formContainer} mt-2`}>
                  <Form
                    name="loginForm"
                    className="login-form"
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={onSubmit}
                  >
                    <div>
                      <label htmlFor="email" className="">
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
                          className={style.input}
                        />
                      </Form.Item>
                    </div>

                    <div>
                      <label htmlFor="email" className={style.label}>
                        Password
                      </label>
                      <Form.Item name="password">
                        <Input.Password
                          prefix={
                            <LockOutlined className="site-form-item-icon" />
                          }
                          type="password"
                          placeholder="Password"
                          className={style.input}
                        />
                      </Form.Item>
                    </div>
                    <div className={style.rememberAndPass}>
                      <Form.Item
                        name="remember"
                        valuePropName="checked"
                        noStyle
                      >
                        <Checkbox>Remember me</Checkbox>
                      </Form.Item>

                      <a
                        className="login-form-forgot"
                        style={{ color: "#000B90" }}
                        href=""
                        onClick={handleForget}
                      >
                        Forgot password
                      </a>
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
                        {loading ? <Loading /> : " Sign In"}
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </ConfigProvider>
  );
}
