import React from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Col, DatePicker, Form, Input, Row, TimePicker } from "antd";

import { MdMyLocation } from "react-icons/md";

import style from "../Events.module.css";
import { useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import CustomUpload from "../../../../component/UI/Upload/Upload";
export default function AddEvents({ setshow }: any) {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [form] = Form.useForm();

  const onFinish = (data: any) => {
    const finalData = {
      ...data,
      date: data.date.format("DD.MM.YYYY"),
      time: data.time.format("HH:mm:ss"),
    };
    console.log(finalData);
    const formData = new FormData();
    if (imageFile) {
      formData.append("image", imageFile);
    }
    formData.append("data", finalData);
    setshow(false);
  };
  const onFinishFailed = (error: any) => {
    console.log(error);
  };

  return (
    <div>
      <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Form.Item>
          <div className="flex justify-center items-center ">
            <div className="relative">
              <CustomUpload
                name="avatar"
                className={`avatar-uploader`}
                showUploadList={false}
                setLoading={setLoading}
                setImageUrl={() => {}}
                setImageFile={() => {}}
              >
                <div
                  className=" bg-customPrimary absolute"
                  style={{
                    width: "30px",
                    color: "white",
                    height: "30px",
                    textAlign: "center",
                    borderRadius: "50%",
                    top: "95%",

                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <span className="font-bold text-lg cursor-pointer" style={{}}>
                    <EditOutlined />
                  </span>
                </div>
              </CustomUpload>
              <img
                className="w-[274px] h-[146px] rounded"
                src={imageUrl}
                alt=""
              />
            </div>
          </div>
        </Form.Item>
        <Row gutter={16} justify={"center"} align={"middle"}>
          <Col lg={24}>
            <Form.Item className="text-center"></Form.Item>
          </Col>
          <Col lg={12}>
            <Form.Item
              key="date"
              name="date"
              rules={[
                {
                  required: true,
                  message: "Please input date",
                },
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
              key="time"
              name="time"
              rules={[
                {
                  required: true,
                  message: "Please input time",
                },
              ]}
            >
              <TimePicker style={{ width: "100%", padding: "8px" }} />
            </Form.Item>
          </Col>
          <Col lg={24}>
            <Form.Item
              key="location"
              name="location"
              rules={[
                {
                  required: true,
                  message: "please input location",
                },
              ]}
            >
              <Input
                placeholder="location"
                className="py-2"
                suffix={<MdMyLocation style={{ color: "gray" }} />}
              />
            </Form.Item>
          </Col>
          <Col lg={24}>
            <Form.Item
              key="courseName"
              name="courseName"
              rules={[
                {
                  required: true,
                  message: "please input courseName",
                },
              ]}
            >
              <Input placeholder="courseName" className="py-2" />
            </Form.Item>
          </Col>
        </Row>
        <div className={style.buttonContainer}>
          <button type="submit" className={style.eventSaveCardBtn}>
            CREATE
          </button>
        </div>
      </Form>
    </div>
  );
}
