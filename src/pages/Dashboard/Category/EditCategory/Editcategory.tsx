/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useForm } from "antd/es/form/Form";
import { useUpdateCategoryMutation } from "../../../../redux/api/categoryapi";
// import { useGetallDepartmentsQuery } from "../../../../redux/api/departmentApi";
import { ConfigProvider, Input, message } from "antd";
import errorResponse from "../../../../utils/errorResponse";
import { selectedFiledTheme } from "../../../../themes/Index";
import { Form, Row, Col } from "antd";

const EditCategory = ({ setshow, data: categeoryData }: any) => {
  const { id }: any = categeoryData;
  const [updateCategory] = useUpdateCategoryMutation();
  //   const { data: departmentData }: any = useGetallDepartmentsQuery(undefined);

  const [form] = useForm();
  const onFinish = async (data: any) => {
    // console.log(form.getFieldValue("department"));
    try {
      const res: any = await updateCategory({
        id,
        body: data,
      });

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
  //   const options: SelectProps["options"] = departmentData?.data?.map(
  //     (department: any) => {
  //       return {
  //         value: department?.id,
  //         label: department?.department_name,
  //       };
  //     }
  //   );

  return (
    <ConfigProvider theme={selectedFiledTheme}>
      <div>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={categeoryData}
        >
          <Form.Item>
            <div className="flex justify-center items-center py-6">
              <div className="relative"></div>
            </div>
          </Form.Item>
          <Row gutter={16} justify={"center"} align={"middle"}>
            <Col lg={24}>
              <Form.Item
                key="category_name"
                name="category_name"
                label="Category Name"
                rules={[
                  {
                    required: true,
                    message: "Please input category Name",
                  },
                ]}
              >
                <Input placeholder="category Name" className="py-2" />
              </Form.Item>
            </Col>
            {/* <Col lg={24}>
              <Form.Item
                label="Please select department"
                name="department"
                rules={[
                  { required: true, message: "Please select a department" },
                ]}
              >
                <Select
                  style={{ width: "100%" }}
                  options={options}
                  placeholder="please select a department"
                />
              </Form.Item>
            </Col> */}
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
    </ConfigProvider>
  );
};
export default EditCategory;
