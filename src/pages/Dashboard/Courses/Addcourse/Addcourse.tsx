/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, DatePicker, Form, Input, Row, SelectProps } from "antd";
import TextArea from "antd/es/input/TextArea";

import { useState } from "react";
import UploadImage from "../../../../component/UI/Form/UploadImage";
import SelectField from "../../../../component/UI/Form/SelectField";

export default function Addcourse() {
  const [form] = Form.useForm();
  const [courseType, setCourseType] = useState("Offline");
  const handleButtonClick = (type: string) => {
    setCourseType(type);
  };

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

  const options: SelectProps["options"] = [
    {
      value: "1",
      label: "mentor id 1",
    },
    {
      value: "2",
      label: "mentor id 2",
    },
  ];
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl  font-semibold mb-8 ">Add Course</h1>
        <div className=" flex  gap-x-4">
          <Button
            className={courseType === "Online" ? "bg-customPrimary" : ""}
            size="large"
            style={{
              fontWeight: 600,
              color: courseType === "Online" ? "white" : "",
            }}
            onClick={() => handleButtonClick("Online")}
          >
            Online
          </Button>
          <Button
            className={courseType === "Offline" ? "bg-customPrimary" : ""}
            size="large"
            style={{
              fontWeight: 600,
              color: courseType === "Offline" ? "white" : "",
            }}
            onClick={() => handleButtonClick("Offline")}
          >
            Offline
          </Button>
          <Button
            className={courseType === "Video" ? "bg-customPrimary" : ""}
            size="large"
            style={{
              fontWeight: 600,
              color: courseType === "Video" ? "white" : "",
            }}
            onClick={() => handleButtonClick("Video")}
          >
            Video
          </Button>
        </div>
      </div>
      <div className="add-course">
        <Form
          layout="vertical"
          form={form}
          name="add-course"
          //   style={{ maxWidth: 600 }}
          initialValues={{}}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Row gutter={16}>
            <Col lg={12}>
              <Form.Item
                key="courseName"
                name="courseName"
                rules={[
                  { required: true, message: "Please input course name" },
                ]}
              >
                <Input placeholder="enter course name" className="py-2" />
              </Form.Item>
            </Col>
            <Col lg={12}>
              <Form.Item
                key="language"
                name="language"
                rules={[
                  { required: true, message: "Please input course name" },
                ]}
              >
                <Input placeholder="language" className="py-2" />
              </Form.Item>
            </Col>
            <Col lg={24}>
              <Form.Item
                key="courseName"
                name="courseDetails"
                rules={[
                  { required: true, message: "Please input course name" },
                ]}
              >
                <TextArea
                  showCount
                  maxLength={100}
                  placeholder="course details"
                  style={{ height: 200, resize: "none" }}
                />
              </Form.Item>
            </Col>
            <Col lg={12}>
              <Form.Item
                key="startDate"
                name="startDate"
                rules={[{ required: true, message: "Please input start date" }]}
              >
                <DatePicker
                  style={{ width: "100%", padding: "8px" }}
                  placeholder="start date"
                />
              </Form.Item>
            </Col>
            <Col lg={12}>
              <Form.Item
                key="duration"
                name="duration"
                rules={[
                  {
                    required: true,
                    message: "Please input Course Time Length",
                  },
                ]}
              >
                <Input placeholder="Course Time Length*" className="py-2" />
              </Form.Item>
            </Col>
            <Col lg={12}>
              <Form.Item
                key="price"
                name="price"
                rules={[
                  {
                    required: true,
                    message: "Please input course price",
                  },
                ]}
              >
                <Input placeholder="Course name*" className="py-2" />
              </Form.Item>
            </Col>
            <Col lg={12}>
              <Form.Item key="mentor" name="mentor" rules={[]}>
                <SelectField options={options} placeholder="select mentor" />
              </Form.Item>
            </Col>
            <Col lg={12}>
              <Form.Item
                key="studentLength"
                name="studentLength"
                rules={[
                  {
                    required: true,
                    message: "Please input maximum student length",
                  },
                ]}
              >
                <Input
                  placeholder="Maximum Students Length*"
                  className="py-2"
                />
              </Form.Item>
            </Col>
            <Col lg={12}>
              <Form.Item key="skillLevel" name="skillLevel" rules={[]}>
                <Input placeholder="skillLevel" className="py-2" />
              </Form.Item>
            </Col>
            <Col lg={24}>
              <Form.Item
                key="address"
                name="address"
                rules={[{ required: true, message: "Please input address" }]}
              >
                <TextArea
                  showCount
                  maxLength={50}
                  placeholder="address"
                  style={{ height: 100, resize: "none" }}
                />
              </Form.Item>
            </Col>
            {courseType === "Video" ? (
              <>
                <Col lg={12}>
                  <Form.Item
                    label="Course Time"
                    key="image"
                    name="image"
                    rules={[{ required: true, message: "Please input iamge" }]}
                  >
                    <Input placeholder="Video hours" className="py-2" />
                  </Form.Item>
                </Col>
                <Col lg={12}>
                  <Form.Item
                    label="Upload"
                    key="image"
                    name="image"
                    rules={[
                      { required: true, message: "Please input address" },
                    ]}
                  >
                    <UploadImage />
                  </Form.Item>
                </Col>
              </>
            ) : (
              <Col lg={24}>
                <Form.Item
                  label="Upload"
                  key="Upload"
                  name="Upload"
                  rules={[{ required: true, message: "Please input address" }]}
                >
                  <UploadImage />
                </Form.Item>
              </Col>
            )}
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
