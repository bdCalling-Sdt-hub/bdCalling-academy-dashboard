/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Col, Row, Form, Input, DatePicker } from "antd";
import style from "./Profile.module.css";
import { useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import CustomModal from "../../../component/UI/Modal/Modal";

import ChangePassword from "../../../component/ChangePassword/ChangePassword";
import CustomUpload from "../../../component/UI/Upload/Upload";

export default function Profile() {
  // const { id } = useSearchParams();
  const img = "https://t.ly/aBlAZ ";
  let role = "student";
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [show, setshow] = useState(false);
  const [action, setAction] = useState("");
  const [form] = Form.useForm();
  const onFinish = (data: any) => {
    const finalData = {
      ...data,
      dateOfBirth: data.dateOfBirth.format("DD-MM-YYYY"),
      registrationDate: data.registrationDate.format("DD-MM-YYYY"),
    };
    console.log(finalData);
  };

  const onFinishFailed = (data: any) => {
    console.log(data);
  };

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
            onClick={() => {
              form.submit();
              setAction("save");
            }}
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
                  <CustomUpload
                    name="avatar"
                    disabled={action === "" || action === "save"}
                    className={`avatar-uploader`}
                    showUploadList={false}
                    setLoading={setLoading}
                    setImageUrl={setImageUrl}
                    setImageFile={setImageFile}
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
                      <span
                        className="font-bold text-lg cursor-pointer"
                        style={{}}
                      >
                        <EditOutlined />
                      </span>
                    </div>
                  </CustomUpload>
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
                  form={form}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                >
                  <Row gutter={16}>
                    <Col lg={12} xl={12}>
                      <Form.Item
                        name="name"
                        key="name"
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
                          name="name"
                          placeholder="name"
                          className={style.input}
                        />
                      </Form.Item>
                    </Col>
                    <Col lg={12} xl={12}>
                      <Form.Item
                        name="phone"
                        key="phone"
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
                          name="phone"
                          placeholder="mobile number"
                          className={style.input}
                        />
                      </Form.Item>
                    </Col>
                    <Col lg={12} xl={12}>
                      <Form.Item
                        name="email"
                        key="email"
                        rules={[
                          {
                            required: true,
                            message: "Please input student email",
                          },
                        ]}
                      >
                        <Input
                          size="large"
                          type="text"
                          name="email"
                          placeholder="email"
                          className={style.input}
                        />
                      </Form.Item>
                    </Col>
                    <Col lg={12} xl={12}>
                      <Form.Item
                        name="batchNo"
                        key="batchNo"
                        rules={[
                          {
                            required: true,
                            message: "Please input  batchNo",
                          },
                        ]}
                      >
                        <Input
                          size="large"
                          type="text"
                          placeholder="batchNo"
                          className={style.input}
                        />
                      </Form.Item>
                    </Col>
                    <Col lg={12} xl={12}>
                      <Form.Item
                        name="registrationDate"
                        key="registrationDate"
                        rules={[]}
                      >
                        <DatePicker
                          style={{ width: "100%", padding: "8px" }}
                          placeholder="start date"
                          className={style.input}
                        />
                      </Form.Item>
                    </Col>
                    <Col lg={12} xl={12}>
                      <Form.Item
                        name="dateOfBirth"
                        key="dateOfBirth"
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
                      <Form.Item rules={[]} name="blood" key="blood">
                        <Input
                          size="large"
                          type="text"
                          name="blood"
                          placeholder="blood group"
                          className={style.input}
                        />
                      </Form.Item>
                    </Col>
                    <Col lg={24} xl={24}>
                      <Form.Item
                        name="address"
                        key="address"
                        rules={[
                          {
                            required: true,
                            message: "Please input address",
                          },
                        ]}
                      >
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
