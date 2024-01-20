/* eslint-disable @typescript-eslint/no-explicit-any */

import { Col, Form, Input, Row, message } from "antd";
import { useAddDepartmentMutation } from "../../../../redux/features/department/departmentApi";
import errorResponse from "../../../../utils/errorResponse";
import { useForm } from "antd/es/form/Form";

const AddDepartment = ({ setshow }: any) => {
  const [postDepartment] = useAddDepartmentMutation();
  const [form] = useForm();
  const onFinish = async (data: any) => {
    console.log(data);
    try {
      const res: any = await postDepartment(data);
      if (res.data) {
        message.info(res.data.message);
        setshow(false);
        form.resetFields();
      }
    } catch (err) {
      errorResponse(err);
    }
  };
  const onFinishFailed = (error: any) => {
    console.log(error);
  };
  return (
    <div>
      {" "}
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={{}}
      >
        <Form.Item>
          <div className="flex justify-center items-center py-6">
            <div className="relative"></div>
          </div>
        </Form.Item>
        <Row gutter={16} justify={"center"} align={"middle"}>
          <Col lg={24}>
            <Form.Item
              key="department_name"
              name="department_name"
              label="Department Name"
              rules={[
                {
                  required: true,
                  message: "Please input department Name",
                },
              ]}
            >
              <Input placeholder="department Name" className="py-2" />
            </Form.Item>
          </Col>
        </Row>
        <div className="flex justify-center">
          <button
            className="bg-customPrimary text-[#fff] px-6 py-2 rounded"
            type="submit"
          >
            CREATE
          </button>
        </div>
      </Form>
    </div>
  );
};

export default AddDepartment;
