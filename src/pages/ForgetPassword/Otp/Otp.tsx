/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import { Button, Col, Form, Input, InputRef, Row, Typography } from "antd";

import logo from "../../../assets/logo.svg";
import style from "./otp.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Flex } from "antd";
const { Text } = Typography;
import otpImage from "../../../assets/forget-password/forget3.svg";

import { useRef, useState } from "react";
import AccordionPanel from "../../../component/UI/According/According";

export default function Otp() {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [otpError, setOtpError] = useState(null);
  const otpBoxReference: React.MutableRefObject<
    (InputRef | HTMLInputElement)[]
  > = useRef<(InputRef | HTMLInputElement)[]>([]);
  const navigate = useNavigate();
  const handleChange = (value: string, index: number) => {
    let newArr = [...otp];
    newArr[index] = value;
    setOtp(newArr);
    if (value && index < 6 - 1) {
      otpBoxReference.current[index + 1].focus();
    }
  };

  const handleBackspaceAndEnter = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
      otpBoxReference.current[index - 1].focus();
    }
    if (e.key === "Enter" && e.currentTarget.value && index < 6 - 1) {
      otpBoxReference.current[index + 1].focus();
    }
  };
  const onSubmit = () => {
    try {
      console.log("submit");
    } catch (error) {
      console.log(error);
    }
  };
  const resendOtp = () => {};

  const redirectEmail = () => {
    navigate("/forgetpassword/email");
  };
  return (
    <div className="container mx-auto ">
      <Flex
        align="center"
        style={{
          minHeight: "100vh",
        }}
        justify="space-around"
      >
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
              {/* form */}
              <div className={`${style.formContainer} mt-2`}>
                <Row>
                  {otp.map((digit, index) => (
                    <Col lg={4} className="text-center">
                      <Input
                        key={index}
                        value={digit}
                        maxLength={1}
                        onChange={(e) => handleChange(e.target.value, index)}
                        onKeyUp={(e) => handleBackspaceAndEnter(e, index)}
                        ref={(reference) =>
                          (otpBoxReference.current[index] =
                            reference as InputRef)
                        }
                        className={`${style.otpInput}`}
                      />
                    </Col>
                  ))}
                </Row>
                <div className="flex justify-between">
                  <Text>Don't received code?</Text>
                  <a
                    className="reset-password-resend text-black font-semibold"
                    onClick={resendOtp}
                    href=""
                  >
                    Resend
                  </a>
                </div>
                <Button
                  type="primary"
                  htmlType="submit"
                  className={style.otpButton}
                  block
                >
                  Verify
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Flex>
    </div>
  );
}
