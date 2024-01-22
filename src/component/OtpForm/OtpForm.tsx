/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */

import { Button, Col, Input, InputRef, Row } from "antd";
import { useRef, useState } from "react";
import style from "./OtpForm.module.css";
interface IotpForm {
  containerStyle?: string;
  btnText?: string;
  btnStyle?: string;
  otpBoxStyle?: string;

  handleOtpSubmit: (otp: string | number, otpError: string) => void;
}
const OtpForm = ({
  btnText,
  btnStyle,
  otpBoxStyle,
  containerStyle,
  handleOtpSubmit,
}: IotpForm) => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [otpError, setOtpError] = useState("");
  const otpBoxReference: React.MutableRefObject<
    (InputRef | HTMLInputElement)[]
  > = useRef<(InputRef | HTMLInputElement)[]>([]);
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
  const handleSubmit = () => {
    handleOtpSubmit(otp.join(""), otpError);
  };
  console.log(btnStyle);
  const resendOtp = () => {};
  return (
    <div
      className={`${containerStyle} mt-2  flex flex-col`}
      style={{ height: "300px" }}
    >
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
                (otpBoxReference.current[index] = reference as InputRef)
              }
              className={`${style.otpInput} ${otpBoxStyle}`}
            />
          </Col>
        ))}
      </Row>
      <div className="flex justify-between my-2">
        <p>Don't received code?</p>
        <a
          className="reset-password-resend text-black font-semibold hover:text-customPrimary"
          onClick={resendOtp}
          href=""
        >
          Resend
        </a>
      </div>
      <div className={btnStyle}>
        <Button
          onClick={handleSubmit}
          type="primary"
          disabled={otp.join("").length !== 6}
          htmlType="submit"
          className={`${style.otpButton}  `}
          block
        >
          {btnText}
        </Button>
      </div>
    </div>
  );
};

export default OtpForm;
