/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { EditOutlined } from "@ant-design/icons";
import {
  Col,
  ConfigProvider,
  Form,
  Input,
  Row,
  Select,
  SelectProps,
  message,
} from "antd";
import style from "../EditMentor/editmentor.module.css";
import personimage from "../../../../assets/table/person.svg";
import { useEffect, useState } from "react";
import CustomUpload from "../../../../component/UI/Upload/Upload";
import {
  useRegisterMutation,
  useUpdateprofileMutation,
} from "../../../../redux/api/authApi";
import { useGetallCategoriesQuery } from "../../../../redux/api/categoryapi";
import { selectedFiledTheme } from "../../../../themes/Index";
import { useForm } from "antd/es/form/Form";
import errorResponse from "../../../../utils/errorResponse";
import Loading from "../../../../component/UI/Loading/Loading";
import { IMAGE_BASE_URL, imageUrl } from "../../../../utils/Common";

export default function EditMentor({ setshow, mentorData }: any) {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [updateMentor, { isLoading }] = useUpdateprofileMutation();
  const [form] = useForm();
  const { data: categoryData }: any = useGetallCategoriesQuery(undefined);

  const {
    id,
    image,
    fullName,
    userName,
    mobileNumber,
    email,
    designation,
    category,
    expert,
  } = mentorData;

  useEffect(() => {
    form.setFieldsValue({
      image, // Set imageUrl directly, assuming it's a URL
      fullName,
      userName,
      mobileNumber: mobileNumber,
      email,
      expert,
      designation,
      category_id: category?.id,
    });
  }, []);
  const onFinish = async (data: { [key: string]: string | Blob | number }) => {
    const formData = new FormData();
    const finalData = {
      ...data,
      careeropportunities: JSON.stringify(data.careeropportunities),
      carriculum: JSON.stringify(data.carriculum),
      job_position: JSON.stringify(data.job_position),
      software: JSON.stringify(data.software),
      mentorId: JSON.stringify(data.mentorId),
    };
    if (imageFile) {
      formData.append("image", imageFile);
    }

    for (const [key, value] of Object.entries(finalData)) {
      console.log(key, value);
      // @ts-ignore

      formData.append(key, value);
    }

    try {
      const res: any = await updateMentor({ id: id, body: formData }).unwrap();
      console.log("response", res);
      if (res?.message) {
        message.info(res?.message);
        form.resetFields();
        setshow(false);
      }
    } catch (error) {
      console.log(error);
      errorResponse(error);
    }
  };
  const onFinishFailed = (error: any) => {
    console.log(error);
  };
  const options: SelectProps["options"] = categoryData?.data?.map(
    (category: any) => {
      return {
        value: category?.id,
        label: category?.category_name,
      };
    }
  );
  return (
    <ConfigProvider theme={selectedFiledTheme}>
      <div>
        <Form
          onFinish={onFinish}
          layout="vertical"
          onFinishFailed={onFinishFailed}
          // initialValues={mentorData}
          form={form}
        >
          <Form.Item
            key="image"
            name="image"
            rules={[
              {
                required: true,
                message: (
                  <p className="flex justify-center ">
                    Please input mentor image{" "}
                  </p>
                ),
              },
            ]}
          >
            <div className="flex justify-center items-center py-6">
              <div className="relative">
                <CustomUpload
                  name="avatar"
                  className={`avatar-uploader`}
                  showUploadList={false}
                  setLoading={setLoading}
                  setImageUrl={setImageUrl}
                  setImageFile={setImageFile}
                >
                  <div
                    className=" bg-customPrimary absolute"
                    style={{
                      width: "30px",
                      color: "white",
                      height: "30px",
                      textAlign: "center",
                      borderRadius: "50%",
                      top: "90%",
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
                <img
                  src={`${IMAGE_BASE_URL}/${image}`}
                  alt="avatar"
                  style={{
                    width: "140px",
                    height: "140px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </Form.Item>
          <Row gutter={16} justify={"center"} align={"middle"}>
            <Col lg={12}>
              <Form.Item
                key="fullName"
                name="fullName"
                label="Full Name"
                rules={[
                  {
                    required: true,
                    message: "Please input your user name ",
                  },
                ]}
              >
                <Input placeholder="full  name" className="py-2" />
              </Form.Item>
            </Col>
            <Col lg={12}>
              <Form.Item
                key="userName"
                name="userName"
                label="User Name"
                rules={[
                  {
                    required: true,
                    message: "Please input your full  name",
                  },
                ]}
              >
                <Input placeholder="user  name" className="py-2" />
              </Form.Item>
            </Col>
            <Col lg={12}>
              <Form.Item
                key="mobileNumber"
                name="mobileNumber"
                label=" phone Number"
                rules={[
                  {
                    required: true,
                    message: "Please input phone  number",
                  },
                ]}
              >
                <Input
                  type="number"
                  placeholder="mobile number"
                  className="py-2"
                />
              </Form.Item>
            </Col>
            <Col lg={12}>
              <Form.Item
                key="email"
                name="email"
                label="email"
                rules={[
                  {
                    required: true,
                    message: "Please input  email",
                  },
                ]}
              >
                <Input type="email" placeholder="email" className="py-2" />
              </Form.Item>
            </Col>

            <Col lg={12}>
              <Form.Item
                key="designation"
                name="designation"
                label="Designation"
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
            <Col lg={12}>
              <Form.Item
                key="expert"
                name="expert"
                label="Expert"
                rules={[
                  {
                    required: true,
                    message: "please input expert",
                  },
                ]}
              >
                <Input placeholder="expert" className="py-2" />
              </Form.Item>
            </Col>
            <Col lg={24}>
              <Form.Item
                label="Please select department"
                name="category_id"
                rules={[
                  { required: true, message: "Please select a department" },
                ]}
              >
                <Select
                  defaultValue={category?.id}
                  style={{ width: "100%" }}
                  options={options}
                  placeholder="please select a department"
                />
              </Form.Item>
            </Col>
          </Row>
          <div className={style.buttonContainer}>
            <button type="submit" className={style.mentorsCardEditBtn}>
              {isLoading ? <Loading /> : "EDIT"}
            </button>
          </div>
        </Form>
      </div>
    </ConfigProvider>
  );
}
