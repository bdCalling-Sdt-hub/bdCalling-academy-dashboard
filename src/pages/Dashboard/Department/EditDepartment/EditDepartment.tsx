/* eslint-disable @typescript-eslint/no-explicit-any */

import { Col, Form, Input, Row, message } from "antd";

import { useForm } from "antd/es/form/Form";
import { useUpdateDepartmentMutation } from "../../../../redux/api/departmentApi";
import { useEffect } from "react";

const EditDepartMent = ({ setshow, data: formdata }: any) => {
  const [updateDepartment] = useUpdateDepartmentMutation();
  const [form] = useForm();
  const { id } = formdata;
  const onFinish = async (data: any) => {
    try {
      const res: any = await updateDepartment({
        id,
        body: data,
      }).unwrap();

      if (res?.data) {
        message.success(res.message);
        setshow(false);
        form.resetFields();
      }
    } catch (err: any) {
      message.success(err?.data?.message);
    }
  };
  const onFinishFailed = (error: any) => {
    console.log(error);
  };
  useEffect(() => {
    form.setFieldsValue({
      department_name: formdata.department_name,
    });
  }, [form, formdata]);
  return (
    <div>
      {" "}
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={formdata}
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
                {
                  min: 2,
                  message: "Department Name must be at least 2 characters",
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
            EDIT
          </button>
        </div>
      </Form>
    </div>
  );
};
export default EditDepartMent;
