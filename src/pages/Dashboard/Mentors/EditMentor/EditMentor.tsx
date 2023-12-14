/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { EditOutlined } from "@ant-design/icons";
import { Col, Form, Input, Row, message } from "antd";
import style from "./editmentor.module.css";
import Upload, {
  RcFile,
  UploadChangeParam,
  UploadFile,
  UploadProps,
} from "antd/es/upload";
import React, { useState } from "react";

export default function EditMentor({ img, id }: any) {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();
  const getBase64 = (img: RcFile, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result as string));
    reader.readAsDataURL(img);
  };

  const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };
  const handleChange: UploadProps["onChange"] = (
    info: UploadChangeParam<UploadFile>
  ) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  const onFinish = (data) => {};
  const onFinishFailed = (error) => {};
  return (
    <div>
      <div>
        <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Form.Item>
            <div className="flex justify-center items-center py-6">
              <div className="relative">
                <Upload
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  name="avatar"
                  listType="picture-circle"
                  className="avatar-uploader"
                  showUploadList={false}
                  action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                  beforeUpload={beforeUpload}
                  onChange={handleChange}
                >
                  {img && (
                    <img
                      src={imageUrl ? imageUrl : img}
                      alt="avatar"
                      style={{ width: "100%", borderRadius: "50%" }}
                    />
                  )}
                  <div
                    className="absolute bg-customPrimary"
                    style={{
                      width: "30px",
                      color: "white",
                      height: "30px",
                      borderRadius: "50%",
                      top: "80%",
                      left: "80%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <span className="font-bold text-lg" style={{}}>
                      <EditOutlined />
                    </span>
                  </div>
                </Upload>
              </div>
            </div>
          </Form.Item>
          <Row gutter={16} justify={"center"} align={"middle"}>
            <Col lg={12}>
              <Form.Item
                key="firstName"
                name="firstName"
                rules={[
                  {
                    required: true,
                    message: "Please input first name",
                  },
                ]}
              >
                <Input placeholder="first name" className="py-2" />
              </Form.Item>
            </Col>
            <Col lg={12}>
              <Form.Item
                key="lastName"
                name="lastName"
                rules={[
                  {
                    required: true,
                    message: "Please input last name",
                  },
                ]}
              >
                <Input placeholder="last name*" className="py-2" />
              </Form.Item>
            </Col>
            <Col lg={24}>
              <Form.Item
                key="Designation"
                name="Designation"
                rules={[
                  {
                    required: true,
                    message: "please input Designation",
                  },
                ]}
              >
                <Input placeholder="Designation" className="py-2" />
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
            <button type="submit" className={style.mentorsCardEditBtn}>
              EDIT
            </button>
            <button className={style.mentorDeleteBtn}>Cancel</button>
          </div>
        </Form>
      </div>
    </div>
  );
}
