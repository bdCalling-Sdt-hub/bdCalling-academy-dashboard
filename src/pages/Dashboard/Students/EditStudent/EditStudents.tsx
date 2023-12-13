/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Row, Form, Input, DatePicker } from "antd";
import style from "../student.module.css";
import editStyle from "./EditStudent.module.css";
import { useState } from "react";
export default function EditStudents() {
  //   const { id } = useSearchParams();
  const [action, setAction] = useState("");
  const onFinish = (data: any) => {
    if (action === "save") {
      //save logic here
    } else if (action === "edit") {
      //edit logic
    }
  };
  const onFinishFailed = (data: any) => {
    console.log(data);
  };
  return (
    <div className="container mx-auto h-screen ">
      <div className="text-right">
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
      </div>
      <div className="mt-6">
        <Row>
          <Col lg={10} xl={10}>
            <div className={style.studentImageSection}>
              <div className="flex justify-center items-center h-full">
                <img
                  style={{
                    width: "200px", // Set the width to a specific value
                    height: "200px", // Set the height to a specific value
                    borderRadius: "50%",
                  }}
                  src="https://t.ly/WXYoQ"
                  alt=""
                />
              </div>
            </div>
          </Col>
          <Col lg={14} xl={14}>
            <div className={style.editStudentContainer}>
              <div>
                <Form
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
                          className={editStyle.input}
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
                          className={editStyle.input}
                        />
                      </Form.Item>
                    </Col>
                    <Col lg={12} xl={12}>
                      <Form.Item>
                        <Input
                          size="large"
                          type="text"
                          placeholder="email"
                          className={editStyle.input}
                        />
                      </Form.Item>
                    </Col>
                    <Col lg={12} xl={12}>
                      <Form.Item>
                        <Input
                          size="large"
                          type="text"
                          placeholder="batchNo"
                          className={editStyle.input}
                        />
                      </Form.Item>
                    </Col>
                    <Col lg={12} xl={12}>
                      <Form.Item>
                        <DatePicker
                          style={{ width: "100%", padding: "8px" }}
                          placeholder="start date"
                          className={editStyle.input}
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
                          className={editStyle.input}
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
                          className={editStyle.input}
                        />
                      </Form.Item>
                    </Col>
                    <Col lg={12} xl={12}>
                      <Form.Item rules={[]}>
                        <Input
                          size="large"
                          type="text"
                          placeholder="blood group"
                          className={editStyle.input}
                        />
                      </Form.Item>
                    </Col>
                    <Col lg={24} xl={24}>
                      <Form.Item>
                        <Input
                          size="large"
                          type="text"
                          placeholder="address"
                          className={editStyle.input}
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
