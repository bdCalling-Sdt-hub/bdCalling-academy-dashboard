/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Row, Form, Input } from "antd";

import { useSearchParams } from "react-router-dom";
import style from "./student.module.css";

export default function EditStudents() {
  //   const { id } = useSearchParams();
  const onFinish = (data: any) => {
    console.log(data);
  };
  const onFinishFailed = (data: any) => {
    console.log(data);
  };
  return (
    <div className="container mx-auto">
      <div className="text-right">
        <Button
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
                      <Form.Item>
                        <Input
                          size="large"
                          type="text"
                          placeholder="name"
                          style={{
                            borderBottom: "1px solid #ddd",
                            borderRadius: "none",
                            borderTop: "none",
                            borderLeft: "none",
                            borderRight: "none",
                          }}
                        />
                      </Form.Item>
                    </Col>
                    <Col lg={12} xl={12}>
                      <Form.Item>
                        <Input
                          size="large"
                          type="number"
                          placeholder="mobile number"
                          style={{
                            borderBottom: "1px solid #ddd",
                            borderRadius: "none",
                            borderTop: "none",
                            borderLeft: "none",
                            borderRight: "none",
                          }}
                        />
                      </Form.Item>
                    </Col>
                    <Col lg={12} xl={12}>
                      <Form.Item>
                        <Input
                          size="large"
                          type="text"
                          placeholder="email"
                          style={{
                            borderBottom: "1px solid #ddd",
                            borderRadius: "none",
                            borderTop: "none",
                            borderLeft: "none",
                            borderRight: "none",
                          }}
                        />
                      </Form.Item>
                    </Col>
                    <Col lg={12} xl={12}>
                      <Form.Item>
                        <Input
                          size="large"
                          type="text"
                          placeholder="batchNo"
                          style={{
                            borderBottom: "1px solid #ddd",
                            borderRadius: "none",
                            borderTop: "none",
                            borderLeft: "none",
                            borderRight: "none",
                          }}
                        />
                      </Form.Item>
                    </Col>
                    <Col lg={12} xl={12}>
                      <Form.Item>
                        <Input
                          size="large"
                          type="date"
                          placeholder="date"
                          style={{
                            borderBottom: "1px solid #ddd",
                            borderRadius: "none",
                            borderTop: "none",
                            borderLeft: "none",
                            borderRight: "none",
                          }}
                        />
                      </Form.Item>
                    </Col>
                    <Col lg={12} xl={12}>
                      <Form.Item>
                        <Input
                          size="large"
                          type="date"
                          placeholder="date of birth"
                          style={{
                            borderBottom: "1px solid #ddd",
                            borderRadius: "none",
                            borderTop: "none",
                            borderLeft: "none",
                            borderRight: "none",
                          }}
                        />
                      </Form.Item>
                    </Col>
                    <Col lg={12} xl={12}>
                      <Form.Item>
                        <Input
                          size="large"
                          type="text"
                          placeholder="course title"
                          style={{
                            borderBottom: "1px solid #ddd",
                            borderRadius: "none",
                            borderTop: "none",
                            borderLeft: "none",
                            borderRight: "none",
                          }}
                        />
                      </Form.Item>
                    </Col>
                    <Col lg={12} xl={12}>
                      <Form.Item>
                        <Input
                          size="large"
                          type="text"
                          placeholder="blood group"
                          style={{
                            borderBottom: "1px solid #ddd",
                            borderRadius: "none",
                            borderTop: "none",
                            borderLeft: "none",
                            borderRight: "none",
                          }}
                        />
                      </Form.Item>
                    </Col>
                    <Col lg={24} xl={24}>
                      <Form.Item>
                        <Input
                          size="large"
                          type="text"
                          placeholder="address"
                          style={{
                            borderBottom: "1px solid #ddd",
                            borderRadius: "none",
                            borderTop: "none",
                            borderLeft: "none",
                            borderRight: "none",
                          }}
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
