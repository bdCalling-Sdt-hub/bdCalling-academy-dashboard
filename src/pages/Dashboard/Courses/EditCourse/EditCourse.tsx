/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, DatePicker, Form, Input, Row, SelectProps } from "antd";
import TextArea from "antd/es/input/TextArea";

import React, { useState } from "react";
import UploadImage from "../../../../component/UI/Form/UploadImage";
import SelectField from "../../../../component/UI/Form/SelectField";
import { useParams } from "react-router-dom";
import style from "../courses.module.css";
export default function EditCourse() {
  const { id } = useParams();
  const [courseType, setCourseType] = useState("Online");
  const [file, setFile] = useState<File | null>(null);
  const [selectedValue, setSelectedValue] = useState();
  console.log(selectedValue);
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    const finalData = {
      ...values,
      mentors: selectedValue,
      startDate: values.startDate.format("DD-MM-YYYY"),
    };
    console.log(finalData);
    const formData = new FormData();
    if (file) {
      formData.append("file", file);
    }
    formData.append("data", finalData);
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
    <div>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-[24px]  text-#333 font-[600] mb-[30px] ">
            Edit Course
          </h1>
        </div>
        <div className={style.editCourseContainer}>
          <div className="px-[30px] pt-[30px] mb-6">
            <Form
              layout="vertical"
              form={form}
              name="add-course"
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
                      { required: true, message: "Please input language" },
                    ]}
                  >
                    <Input placeholder="language" className="py-2" />
                  </Form.Item>
                </Col>
                <Col lg={24}>
                  <Form.Item
                    key="courseDetails"
                    name="courseDetails"
                    rules={[
                      {
                        required: true,
                        message: "Please input course Details",
                      },
                    ]}
                  >
                    <TextArea
                      showCount
                      maxLength={500}
                      placeholder="course details"
                      style={{ height: 150, resize: "none" }}
                    />
                  </Form.Item>
                </Col>
                <Col lg={12}>
                  <Form.Item
                    key="startDate"
                    name="startDate"
                    rules={[
                      { required: true, message: "Please input start date" },
                    ]}
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
                  <Form.Item key="mentors" name="mentors" rules={[]}>
                    <SelectField
                      setSelectedValue={setSelectedValue}
                      options={options}
                      placeholder="select mentor"
                    />
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
                    rules={[
                      { required: true, message: "Please input address" },
                    ]}
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
                        key=""
                        name="image"
                        rules={[
                          {
                            required: true,
                            message: "Please input course Time",
                          },
                        ]}
                      >
                        <Input placeholder="Video hours" className="py-2" />
                      </Form.Item>
                    </Col>
                    <Col lg={12}>
                      <Form.Item
                        label="image"
                        key="image"
                        name="image"
                        rules={[]}
                      >
                        <UploadImage setFile={setFile} />
                      </Form.Item>
                    </Col>
                  </>
                ) : (
                  <Col lg={24}>
                    <Form.Item
                      label="upload"
                      key="image"
                      name="image"
                      rules={[]}
                    >
                      <UploadImage setFile={setFile} />
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
      </div>
    </div>
  );
}
