/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
} from "@ant-design/icons";
import { Button, Col, Form, Input, Row } from "antd";

export default function ChangePassword() {
  const [form] = Form.useForm();

  const onFinish = (data: any) => {
    console.log(data);
  };
  const onFinishFailed = (error: any) => {
    console.log(error);
  };

  return (
    <div>
      <Form
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
      >
        <h1 className="text-2xl font-semibold mb-6">Change your Password </h1>
        <Row gutter={16} justify={"center"} align={"middle"}>
          <Col lg={24}>
            <Form.Item
              key="old password"
              name="oldPassword"
              label="Enter your old password"
              rules={[
                {
                  required: true,
                  message: "Please input your old password",
                },
              ]}
            >
              <Input.Password
                prefix={
                  <LockOutlined
                    style={{ color: "gray ", marginRight: "6px" }}
                  />
                }
                style={{
                  padding: "10px",
                }}
                placeholder="input old password "
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>
          </Col>
          <Col lg={24}>
            <Form.Item
              label="Enter your new password"
              key="new password"
              name="newPassword"
              rules={[
                {
                  required: true,
                  message: "Please input your old password",
                },
              ]}
            >
              <Input.Password
                style={{
                  padding: "10px",
                }}
                prefix={
                  <LockOutlined
                    style={{ color: "gray ", marginRight: "6px" }}
                  />
                }
                placeholder="input old password "
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>
          </Col>
          <Col lg={24}>
            <Form.Item
              label="Re-enter the new password"
              key="confirm password"
              name="confirmPassword"
              rules={[
                {
                  required: true,
                  message: "Please input your old password",
                },
              ]}
            >
              <Input.Password
                prefix={
                  <LockOutlined
                    style={{ color: "gray ", marginRight: "6px" }}
                  />
                }
                style={{
                  padding: "10px",
                }}
                placeholder="input old password "
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>
          </Col>
        </Row>
        <div className="text-center">
          <Button
            size="large"
            className="bg-customPrimary"
            style={{ color: "white" }}
            htmlType="submit"
          >
            SAVE
          </Button>
        </div>
      </Form>
    </div>
  );
}
