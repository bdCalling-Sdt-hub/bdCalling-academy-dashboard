
import { Button, Form, Input,Typography } from "antd";

import logo from '../../../assets/logo.svg'
import style from './otp.module.css'
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Flex } from 'antd';
const {  Text } = Typography;
import otpImage from '../../../assets/forget-password/forget3.svg'

export default function Otp() {

const navigate = useNavigate()

    const onSubmit = () => {
        try{
     console.log("submit")
        }
        catch(error){
            console.log(error)
        }
    }
    const resendOtp = () => {

    }

    const redirectEmail = () => {navigate('/forgetpassword/email')}
  return (
    <div className='container mx-auto '>
   <Flex  align="center"  style={{
    minHeight:"100vh"
   }} justify="space-around" >

<div >
   
     <img  src={otpImage} alt='signup-image' />
   </div>
         <div  >
         <div>
     
   
     <div>
       <div className='logo-image'>
         <img src={logo} alt="" />
       </div>
       <div className='title'>
   <h1 className='text-2xl  font-bold mt-5 mb-2 flex items-center '> <span onClick={redirectEmail} className="cursor-pointer font-bold me-2 mt-1"><IoIosArrowBack /></span> Verify OTP</h1>
   <p className="my-4">We'll send a verification code to your email. Check your inbox <br /> and enter the code here.</p>
   
       </div>
       {/* form */}
       <div className={`${style.formContainer} mt-2`} >
       <Form 
       onFinish={onSubmit}>
          <Input.Group
            className="flex gap-x-2 justify-center"
          >
            <Input className={style.otpInput} />
            <Input className={style.otpInput} />
            <Input className={style.otpInput} />
            <Input className={style.otpInput} />
            <Input className={style.otpInput} />
            <Input className={style.otpInput} />
          </Input.Group>

          <div className="flex justify-between">
            <Text >Don't received code?</Text>
            <a
              className="reset-password-resend text-black font-semibold"
              onClick={resendOtp}
              
              href=""
            >
              Resend
            </a>
          </div>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="send-otp-button"
              block
              style={{
                height: "45px",
                fontWeight: "400px",
                fontSize: "18px",
                background: "#2492EB",
                alignSelf: "bottom",
                marginTop: "20px",
              }}
            >
              Verify
            </Button>
          </Form.Item>
        </Form>
       </div>
     </div>
     </div>
         </div>
     
     
   </Flex>
   
    </div>
  )
}
