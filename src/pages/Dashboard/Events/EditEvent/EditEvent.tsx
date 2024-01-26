/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Col, DatePicker, Form, Input, Row, TimePicker, message } from "antd";

import { MdMyLocation } from "react-icons/md";

import style from "../Events.module.css";
import { useEffect, useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import CustomUpload from "../../../../component/UI/Upload/Upload";
import Loading from "../../../../component/UI/Loading/Loading";
import useImageUpload from "../../../../hooks/useImageUpload";
import { useUpdateEventsMutation } from "../../../../redux/api/eventApi";
import { IMAGE_BASE_URL } from "../../../../utils/Common";
import dayjs from "dayjs";
export default function EditEvent(props: any) {
  const { image, starttime, endtime, courseName, officeLocation, date, id } =
    props.event;
  const setshow = props?.setshow;
  const { imageUrl, setFile, imageFile, setImageUrl } = useImageUpload();
  const [updateEvent, { isLoading }] = useUpdateEventsMutation();
  const [form] = Form.useForm();

  console.log(props);
  const onFinish = async (data: any) => {
    const formatedData = {
      ...data,
      starttime: data.starttime.format("HH:mm"),
      endtime: data.endtime.format("HH:mm"),
      date: data.date.format("YYYY-MM-DD"),
    };

    const formData = new FormData();
    if (imageFile) {
      formData.append("image", imageFile);
    }
    for (const [key, value] of Object.entries(formatedData)) {
      // @ts-ignore
      formData.append(key, value);
    }
    try {
      const res: any = await updateEvent({ id: id, body: formData }).unwrap();
      if (res) {
        message.success(res?.message);
        form.resetFields();
        setImageUrl(null);
        setshow(false);
      }
    } catch (err) {
      console.log(err);
      message.error(
        "something went wrong please check date and time correctly."
      );
    }
  };
  const onFinishFailed = (error: any) => {
    console.log(error);
  };

  useEffect(() => {
    form.setFieldsValue({
      date: dayjs(date),
      starttime: dayjs(starttime, "HH:mm"),
      endtime: dayjs(endtime, "HH:mm"),
      courseName,
      officeLocation,
    });
  }, [form, props.event]);
  const onReset = () => {
    form.resetFields();
    setImageUrl("");
  };

  return (
    <div>
      <Form
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
        initialValues={{
          ...props.event,
          date: dayjs(date),
          starttime: dayjs(starttime, "HH:mm"),
          endtime: dayjs(endtime, "HH:mm"),
        }}
      >
        <Form.Item
          name="image"
          rules={[
            {
              required: true,
              message: (
                <p className="flex items-center justify-center mt-2">
                  Please select an image
                </p>
              ),
            },
          ]}
        >
          <div className="flex justify-center items-center ">
            <div className="relative">
              <CustomUpload
                name="avatar"
                className={`avatar-uploader`}
                showUploadList={false}
                setLoading={() => {}}
                setImageUrl={() => {}}
                setImageFile={setFile}
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
                src={imageUrl || `${IMAGE_BASE_URL}/${image}`}
                alt=""
              />
            </div>
          </div>
        </Form.Item>
        <Row gutter={16} justify={"center"} align={"middle"}>
          <Col lg={24}>
            <Form.Item className="text-center"></Form.Item>
          </Col>
          <Col lg={24}>
            <Form.Item
              key="date"
              name="date"
              label=" Enter Date"
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
              key="starttime"
              name="starttime"
              label="Start time"
              rules={[
                {
                  required: true,
                  message: "Please input start time",
                },
              ]}
            >
              <TimePicker
                format={"HH:mm"}
                style={{ width: "100%", padding: "8px" }}
              />
            </Form.Item>
          </Col>
          <Col lg={12}>
            <Form.Item
              key="endtime"
              name="endtime"
              label="End Time"
              rules={[
                {
                  required: true,
                  message: "Please input end time",
                },
              ]}
            >
              <TimePicker
                format={"HH:mm"}
                style={{ width: "100%", padding: "8px" }}
              />
            </Form.Item>
          </Col>
          <Col lg={24}>
            <Form.Item
              label="Course Name"
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
          <Col lg={24}>
            <Form.Item
              label="Office Location"
              key="officeLocation"
              name="officeLocation"
              rules={[
                {
                  required: true,
                  message: "please input officeLocation",
                },
              ]}
            >
              <Input placeholder="officeLocation" className="py-2" />
            </Form.Item>
          </Col>
        </Row>
        <div className={style.buttonContainer}>
          <button type="submit" className={style.eventSaveCardBtn}>
            {isLoading ? <Loading /> : "EDIT"}
          </button>
        </div>
      </Form>
    </div>
  );
}
