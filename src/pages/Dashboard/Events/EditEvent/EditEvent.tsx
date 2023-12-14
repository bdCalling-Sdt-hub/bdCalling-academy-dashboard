/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Col, DatePicker, Form, Input, Row, TimePicker } from "antd";
import { message, Upload } from "antd";
import type { UploadChangeParam } from "antd/es/upload";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import { MdMyLocation } from "react-icons/md";

import style from "../Events.module.css";
import { useState } from "react";
import { EditOutlined } from "@ant-design/icons";
export default function EditEvent(props: any) {
  const { img, date, time, location, title } = props.data;
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();
  const [form] = Form.useForm();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  console.log(props);
  const onFinish = (data: any) => {
    console.log(data);
  };
  const onFinishFailed = (error: any) => {
    console.log(error);
  };
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
    setSelectedImage(file);
    return isJpgOrPng && isLt2M;
  };
  const onReset = () => {
    form.resetFields();
    setImageUrl("");
  };
  const handleChange: UploadProps["onChange"] = (
    info: UploadChangeParam<UploadFile>
  ) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj as RcFile, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  return (
    <div>
      <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Form.Item>
          <div className="flex justify-center items-center ">
            <div className="relative"></div>
          </div>
        </Form.Item>
        <Row gutter={16} justify={"center"} align={"middle"}>
          <Col lg={24}>
            <Form.Item className="text-center">
              <Upload
                name="avatar"
                className="avatar-uploader"
                showUploadList={false}
                action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                beforeUpload={beforeUpload}
                onChange={handleChange}
              >
                <div className="relative">
                  <img
                    className="w-[274px] h-[146px] rounded"
                    src={imageUrl ? imageUrl : img}
                    alt=""
                  />
                  <div
                    className=" bg-customPrimary absolute w-[30px] h-[30px] flex justify-center items-center top-[90%] -left-[10px]"
                    style={{
                      color: "white",
                      borderRadius: "50%",
                    }}
                  >
                    <span className="font-bold text-lg" style={{}}>
                      <EditOutlined />
                    </span>
                  </div>
                </div>
              </Upload>
            </Form.Item>
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
            SAVE
          </button>
          <button onClick={onReset} className={style.eventcancelCardBtn}>
            CANCEL
          </button>
        </div>
      </Form>
    </div>
  );
}
