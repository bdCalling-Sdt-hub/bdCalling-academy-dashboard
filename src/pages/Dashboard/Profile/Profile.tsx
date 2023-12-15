/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Col, Row, Form, Input, DatePicker } from "antd";
import style from "./Profile.module.css";

import { message, Upload } from "antd";
import type { UploadChangeParam } from "antd/es/upload";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";

import { useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import CustomModal from "../../../component/UI/Modal/Modal";
import EditEvent from "../Events/EditEvent/EditEvent";
import ChangePassword from "../../../component/ChangePassword/ChangePassword";

export default function Profile() {
  //   const { id } = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();
  const [show, setshow] = useState(false);
  const [action, setAction] = useState("");
  console.log(action);
  const onFinish = (data: any) => {
    if (action === "save") {
      //save logic here
    } else if (action === "edit") {
      //edit logic
    }
  };
  const img = "https://t.ly/aBlAZ ";
  const onFinishFailed = (data: any) => {
    console.log(data);
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
  let role = "student";

  return (
    <div className="container mx-auto h-screen ">
      <CustomModal
        showCancelButton={false}
        showOkButton={false}
        title={""}
        isOpen={show}
        closeModal={() => setshow(false)}
      >
        <ChangePassword />
      </CustomModal>
      <div className="text-right">
        {role !== "admin" && (
          <Button
            onClick={() => setshow(true)}
            className="bg-customPrimary me-4"
            style={{
              color: "white",
              fontWeight: "600",
            }}
          >
            CHANGE PASSWORD
          </Button>
        )}
        <Button
          onClick={() => setAction("edit")}
          style={{
            backgroundColor: "#D7263D",
            color: "white",
            width: "9rem",
            fontWeight: "600",
          }}
        >
          EDIT
        </Button>
        {action === "edit" ? (
          <Button
            onClick={() => setAction("save")}
            className="bg-customPrimary ms-4"
            style={{
              color: "white",
              width: "9rem",
              fontWeight: "600",
            }}
          >
            SAVE
          </Button>
        ) : null}
      </div>
      <div className="mt-6">
        <Row>
          <Col lg={10} xl={10}>
            <div className={`${style.studentImageSection}  `}>
              <div className="relative">
                <div className="">
                  {img && (
                    <img
                      src={imageUrl ? imageUrl : img}
                      alt="avatar"
                      className="student-image"
                      style={{
                        width: "250px",
                        height: "250px",
                        borderRadius: "50%",
                        objectFit: "cover", // Ensure the image covers the container
                      }}
                    />
                  )}
                </div>
                <div className="absolute right-5 top-[225px]">
                  <Upload
                    name="avatar"
                    disabled={action === ""}
                    className={`avatar-uploader`}
                    showUploadList={false}
                    action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                    beforeUpload={beforeUpload}
                    onChange={handleChange}
                  >
                    <div
                      className=" bg-customPrimary"
                      style={{
                        width: "30px",
                        color: "white",
                        height: "30px",
                        textAlign: "center",
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
            </div>
          </Col>
          <Col lg={14} xl={14}>
            <div className={style.editStudentContainer}>
              <div>
                <Form
                  disabled={action === ""}
                  initialValues={{}}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                >
                  <Row gutter={16}>
                    <Col lg={12} xl={12}>
                      <Form.Item
                        rules={[
                          {
                            required: true,
                            message: "Please input student name",
                          },
                        ]}
                      >
                        <Input
                          size="large"
                          type="text"
                          placeholder="name"
                          className={style.input}
                        />
                      </Form.Item>
                    </Col>
                    <Col lg={12} xl={12}>
                      <Form.Item
                        rules={[
                          {
                            required: true,
                            message: "Please input student mobile number",
                          },
                        ]}
                      >
                        <Input
                          size="large"
                          type="number"
                          placeholder="mobile number"
                          className={style.input}
                        />
                      </Form.Item>
                    </Col>
                    <Col lg={12} xl={12}>
                      <Form.Item>
                        <Input
                          size="large"
                          type="text"
                          placeholder="email"
                          className={style.input}
                        />
                      </Form.Item>
                    </Col>
                    <Col lg={12} xl={12}>
                      <Form.Item>
                        <Input
                          size="large"
                          type="text"
                          placeholder="batchNo"
                          className={style.input}
                        />
                      </Form.Item>
                    </Col>
                    <Col lg={12} xl={12}>
                      <Form.Item>
                        <DatePicker
                          style={{ width: "100%", padding: "8px" }}
                          placeholder="start date"
                          className={style.input}
                        />
                      </Form.Item>
                    </Col>
                    <Col lg={12} xl={12}>
                      <Form.Item
                        rules={[
                          {
                            required: true,
                            message: "Please input date of birth",
                          },
                        ]}
                      >
                        <DatePicker
                          style={{ width: "100%", padding: "8px" }}
                          placeholder="date of birth"
                          className={style.input}
                        />
                      </Form.Item>
                    </Col>
                    <Col lg={12} xl={12}>
                      <Form.Item
                        rules={[
                          {
                            required: true,
                            message: "Please input course name",
                          },
                        ]}
                      >
                        <Input
                          size="large"
                          type="text"
                          placeholder="course title"
                          className={style.input}
                        />
                      </Form.Item>
                    </Col>
                    <Col lg={12} xl={12}>
                      <Form.Item rules={[]}>
                        <Input
                          size="large"
                          type="text"
                          placeholder="blood group"
                          className={style.input}
                        />
                      </Form.Item>
                    </Col>
                    <Col lg={24} xl={24}>
                      <Form.Item>
                        <Input
                          size="large"
                          type="text"
                          placeholder="address"
                          className={style.input}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
