import { Button, Form, Input } from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
} from "@ant-design/icons";
import style from "./updatePasswordForm.module.css";
interface IpasswordObject {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}
interface IUpdatepasswordForm {
  onSubmit: (value: IpasswordObject) => void;
  containerStyle?: string;
  btnStyle?: string;
}

const UpdatePasswordForm = ({
  onSubmit,
  containerStyle,
  btnStyle,
}: IUpdatepasswordForm) => {
  const onFinish = (value: IpasswordObject) => {
    console.log(value);
    onSubmit(value);
  };
  return (
    <Form
      name="update-password"
      className={`${containerStyle} flex flex-col`}
      initialValues={{}}
      onFinish={onFinish}
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
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            name="newPassword"
            type="password"
            placeholder="Password"
            className={style.input}
            iconRender={(visible: boolean) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>
      </div>
      <div>
        <label htmlFor="email" className="font-semibold">
          Confirm Password
        </label>
        <Form.Item
          key="confirmPassword"
          name="confirmPassword"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input.Password
            name="confirmPassword"
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            className={style.input}
            iconRender={(visible: boolean) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>
      </div>

      <div className={btnStyle}>
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
      </div>
    </Form>
  );
};

export default UpdatePasswordForm;
