/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, DatePicker, Form, Input, Row } from "antd";
import TextArea from "antd/es/input/TextArea";

import { DownOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";
import { CgMailOpen } from "react-icons/cg";
import { IoPeopleOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";

export default function EditDepartment() {
  const { id } = useParams();
  console.log(id);
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const onReset = () => {
    console.log(form);
    form.resetFields();
  };

  return (
    <div>
      <h1 className="text-xl mb-6 font-bold">Edit Department</h1>
      <div>
        <Form
          layout="vertical"
          form={form}
          name="add-course"
          //   style={{ maxWidth: 600 }}
          initialValues={{
            department: "",
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Row gutter={16}>
            <Col lg={24}>
              <Form.Item
                key="department"
                name="department"
                rules={[
                  { required: true, message: "Please input course name" },
                ]}
              >
                <Input
                  placeholder="Department Name"
                  className="py-2"
                  suffix={<DownOutlined style={{ color: "gray" }} />}
                />
              </Form.Item>
            </Col>
            <Col lg={24}>
              <Form.Item
                key="head"
                name="head"
                rules={[
                  {
                    required: true,
                    message: "Please input head of department name",
                  },
                ]}
              >
                <Input
                  placeholder="Head of Department"
                  className="py-2"
                  suffix={<UserOutlined style={{ color: "gray" }} />}
                />
              </Form.Item>
            </Col>
            <Col lg={24}>
              <Form.Item
                key="phone"
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Please input Phone Number",
                  },
                ]}
              >
                <Input
                  placeholder="Phone"
                  className="py-2"
                  suffix={<PhoneOutlined style={{ color: "gray" }} />}
                />
              </Form.Item>
            </Col>
            <Col lg={24}>
              <Form.Item
                key="email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input Email",
                  },
                ]}
              >
                <Input
                  placeholder="email"
                  className="py-2"
                  suffix={<CgMailOpen style={{ color: "gray" }} />}
                />
              </Form.Item>
            </Col>
            <Col lg={24}>
              <Form.Item
                key="startingDate"
                name="startingDate"
                rules={[{ required: true, message: "Please input start date" }]}
              >
                <DatePicker
                  style={{ width: "100%", padding: "8px" }}
                  placeholder="startingDate"
                />
              </Form.Item>
            </Col>
            <Col lg={24}>
              <Form.Item
                key="totalStudents"
                name="totalStudents"
                rules={[
                  {
                    required: true,
                    message: "Please input totalStudents",
                  },
                ]}
              >
                <Input
                  placeholder="totalStudents"
                  className="py-2"
                  suffix={<IoPeopleOutline style={{ color: "gray" }} />}
                />
              </Form.Item>
            </Col>
            <Col lg={24}>
              <Form.Item
                key="courseDetails"
                name="courseDetails"
                rules={[
                  { required: true, message: "Please input courseDetails" },
                ]}
              >
                <TextArea
                  showCount
                  maxLength={500}
                  placeholder="courseDetails"
                  style={{ height: 150, resize: "none" }}
                />
              </Form.Item>
            </Col>
          </Row>
          <div className="flex justify-between">
            <div>
              <Form.Item>
                <Button
                  size="large"
                  style={{
                    color: "white",
                    borderRadius: "4px",
                  }}
                  htmlType="submit"
                  className="bg-customPrimary"
                >
                  Submit
                </Button>
              </Form.Item>
            </div>
            <div>
              <Form.Item>
                <Button
                  size="large"
                  htmlType="button"
                  onClick={onReset}
                  style={{
                    color: "white",
                    backgroundColor: "#D7263D",
                    borderRadius: "4px",
                  }}
                >
                  cancel
                </Button>
              </Form.Item>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
