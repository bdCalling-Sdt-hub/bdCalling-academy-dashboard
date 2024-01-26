/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Col, Row, Form, Input, DatePicker, Button, message } from "antd";
import style from "./Profile.module.css";
import { useEffect, useState } from "react";
import personImage from "../../../assets/students/student.svg";
import { EditOutlined } from "@ant-design/icons";
import CustomModal from "../../../component/UI/Modal/Modal";
import ChangePassword from "../../../component/ChangePasswordForm/ChangePasswordForm";
import CustomUpload from "../../../component/UI/Upload/Upload";
import {
  useGetmyprofileQuery,
  useUpdateprofileMutation,
} from "../../../redux/api/authApi";
import { IMAGE_BASE_URL } from "../../../utils/Common";
import useImageUpload from "../../../hooks/useImageUpload";
export default function Profile() {
  const [loading, setLoading] = useState(false);
  const { imageUrl, setFile, setImageUrl, imageFile } = useImageUpload();
  const [show, setshow] = useState(false);
  const [action, setAction] = useState("");
  const [form] = Form.useForm();
  const { data: profileData }: any = useGetmyprofileQuery(undefined);
  const [updateProfile] = useUpdateprofileMutation();
  useEffect(() => {
    form.setFieldsValue({
      image: profileData?.user?.image, // Set imageUrl directly, assuming it's a URL
      fullName: profileData?.user?.fullName,
      mobileNumber: profileData?.user?.mobileNumber,
      bloodGroup: profileData?.user?.bloodGroup,
      address: profileData?.user?.address,
      email: profileData?.user?.email,
    });
  }, [profileData?.user, form]);
  const onFinish = async (data: any) => {
    const formData = new FormData();
    if (imageFile) {
      formData.append("image", imageFile);
    }

    for (const [key, value] of Object.entries(data)) {
      console.log(key, value);
      // @ts-ignore
      formData.append(key, value);
    }
    try {
      const res: any = await updateProfile({
        id: profileData?.user?.id,
        body: formData,
      }).unwrap();
      if (res) {
        message.info(res?.message);
        // form.resetFields();
      }
      console.log(res);
    } catch (err) {
      message.error("something went wrong. please try again later");
    }
  };

  const onFinishFailed = (data: any) => {
    console.log(data);
  };
  const handleChagePassword = (value: any) => {
    console.log(value);
  };

  const handleCancel = () => {
    setAction("");
  };
  const handleEditProfile = async () => {
    form.submit();
    setAction("save");
  };

  return (
    <div className=" h-screen ">
      <CustomModal
        showCancelButton={false}
        showOkButton={false}
        title={""}
        isOpen={show}
        closeModal={() => setshow(false)}
      >
        <ChangePassword
          btnText="SAVE"
          onSubmit={handleChagePassword}
          setshow={setshow}
        />
      </CustomModal>
      <div className="flex justify-end gap-x-[30px]">
        <button onClick={() => setshow(true)} className={style.saveBtn}>
          CHANGE PASSWORD
        </button>

        {(action === "save" || action === "") && (
          <button className={style.editBtn} onClick={() => setAction("edit")}>
            EDIT
          </button>
        )}
        {action === "edit" ? (
          <div className="flex gap-x-4">
            <button onClick={handleEditProfile} className={style.saveBtn}>
              SAVE
            </button>
            <button onClick={handleCancel} className={style.editBtn}>
              Cancel
            </button>
          </div>
        ) : null}
      </div>
      <div className="mt-6">
        <div className="flex gap-x-4 items-start">
          <div className={`${style.studentImageSection}  `}>
            <div className="relative">
              <div className="">
                <img
                  src={
                    imageUrl ||
                    (profileData?.user?.image &&
                      `${IMAGE_BASE_URL}/${profileData.user.image}`) ||
                    personImage
                  }
                  alt="avatar"
                  className="student-image"
                  style={{
                    width: "250px",
                    height: "250px",
                    borderRadius: "50%",
                    objectFit: "cover", // Ensure the image covers the container
                  }}
                />
              </div>
              <div className="absolute right-5 top-[225px]">
                <CustomUpload
                  name="avatar"
                  disabled={action === "" || action === "save"}
                  className={`avatar-uploader`}
                  showUploadList={false}
                  setLoading={setLoading}
                  setImageUrl={setImageUrl}
                  setImageFile={setFile}
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

          <div className={style.editStudentContainer}>
            <Form
              disabled={action !== "edit"}
              initialValues={profileData?.user}
              form={form}
              className="mt-4"
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Row gutter={16}>
                <Col lg={12} xl={12} className="mb-[15px]">
                  <Form.Item
                    name="fullName"
                    key="fullName"
                    label="Your Name"
                    rules={[
                      {
                        required: true,
                        message: "Please input your full name",
                      },
                      {
                        min: 2,
                        message: "Full name must be at least 2 characters",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      type="text"
                      // name="fullName"

                      placeholder="name"
                      className={style.input}
                    />
                  </Form.Item>
                </Col>
                <Col lg={12} xl={12} className="mb-[15px]">
                  <Form.Item
                    name="userName"
                    key="userName"
                    label="Your userName"
                    rules={[
                      {
                        required: true,
                        message: "Please input your user name",
                      },
                      {
                        min: 4,
                        message: "userName must be at least 2 characters",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      type="text"
                      // name="fullName"

                      placeholder="name"
                      className={style.input}
                    />
                  </Form.Item>
                </Col>
                <Col lg={12} xl={12} className="mb-[15px]">
                  <Form.Item
                    name="mobileNumber"
                    key="mobileNumber"
                    label="Mobile Number"
                    rules={[
                      {
                        required: true,
                        message: "Please input your mobile number",
                      },
                      {
                        min: 11,
                        message:
                          "minimum number must be at least 11 characters",
                      },
                      {
                        max: 11,
                        message: "maximum mobile number is 11 digit",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      type="number"
                      // name="mobileNumber"
                      // key="mobileNumber"
                      placeholder="mobile number"
                      className={style.input}
                    />
                  </Form.Item>
                </Col>

                <Col lg={12} xl={12} className="mb-[15px]">
                  <Form.Item
                    name="email"
                    key="email"
                    label="Email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your email",
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

                {/* <Col lg={12} xl={12} className="mb-[15px]">
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
                </Col> */}
                {/* <Col lg={12} xl={12} className="mb-[15px]">
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
                </Col> */}
                {/* <Col lg={12} xl={12} className="mb-[15px]">
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
                </Col> */}
                {/* <Col lg={12} xl={12} className="mb-[15px]">
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
                </Col> */}
                <Col lg={12} xl={12} className="mb-[15px]">
                  <Form.Item
                    rules={[]}
                    name="bloodGroup"
                    key="bloodGroup"
                    label="Blood Group"
                  >
                    <Input
                      size="large"
                      type="text"
                      name="bloodGroup"
                      placeholder="blood group"
                      className={style.input}
                    />
                  </Form.Item>
                </Col>
                <Col lg={24} xl={12} className="mb-[15px]">
                  <Form.Item
                    name="address"
                    key="address"
                    label="Address"
                    // rules={[
                    //   {
                    //     required: true,
                    //     message: "Please input address",
                    //   },
                    // ]}
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
      </div>
    </div>
  );
}
