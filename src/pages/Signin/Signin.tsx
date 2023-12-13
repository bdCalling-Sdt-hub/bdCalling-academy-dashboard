/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-empty */
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import singupImage from '../../assets/auth/isometric.svg'
import logo from '../../assets/auth/Component 2.svg'
import style from './Signin.module.css'
import { Button, Checkbox, Form, Input,Row,Col } from "antd";
import { useNavigate } from "react-router-dom";
export default function SignIn() {
  const navigate  = useNavigate()
const onSubmit = async() => {
  try{
console.log("something")
  }
  catch(error){
    
  }
}


const handleForget = () => {
  navigate("/forgetpassword/email");
};

  return (
    <div className='container mx-auto '>
 <Row justify="center" align={'middle'} style={{
  minHeight:'100vh'
 }}>
      <Col  lg={12}>

  <img  src={singupImage} alt='signup-image' />

      </Col>
      <Col  lg={12}>
      <div>
  

  <div>
    <div className='logo-image'>
      <img src={logo} alt="" />
    </div>
    <div className='title'>
<h1 className='text-2xl  font-bold mt-5 mb-2 '>Hello,Welcome!</h1>
<p className=''>Please Enter Your Details Below to Continue</p>

    </div>
    {/* form */}
    <div className={`${style.formContainer} mt-2`} >
    <Form
          name="loginForm"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onSubmit}
        >
          <div>
            <label htmlFor="email" className=''>
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
                prefix={<MailOutlined className="site-form-item-icon" />}
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
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                className={style.input}
              />
            </Form.Item>
          </div>
          <div className={style.rememberAndPass}>
            <Form.Item name="remember" valuePropName="checked" noStyle>
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
              Sign In
            </Button>
          </Form.Item>
        </Form>
    </div>
  </div>
  </div>
      </Col>
  
    </Row>

 </div>


  )
}
