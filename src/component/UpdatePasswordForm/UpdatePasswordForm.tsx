import { Button, Form, Input } from "antd";
import { LockOutlined } from "@ant-design/icons";
import style from "./updatePasswordForm.module.css";
interface IpasswordObject {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}
interface IUpdatepasswordForm {
  onSubmit: (value: IpasswordObject) => void;
}

const ChangePasswordForm = ({ onSubmit }: IUpdatepasswordForm) => {
  const onFinish = (value: IpasswordObject) => {
    console.log(value);
    onSubmit(value);
  };
  return (
    <Form
      name="update-password"
      className=""
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
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
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
            prefix={<LockOutlined className="site-form-item-icon" />}
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
  );
};

export default ChangePasswordForm;
