/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "antd/es/form/Form";
import { useAddCategoryMutation } from "../../../../redux/api/categoryapi";
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
import errorResponse from "../../../../utils/errorResponse";
import { useGetallDepartmentsQuery } from "../../../../redux/api/departmentApi";
import { selectedFiledTheme } from "../../../../themes/Index";

const AddCategory = ({ setshow }: any) => {
  const [postCategory] = useAddCategoryMutation();
  const { data: departmentData }: any = useGetallDepartmentsQuery(undefined);

  const [form] = useForm();
  const onFinish = async (data: any) => {
    console.log(data);
    try {
      const res: any = await postCategory({
        ...data,
        // @ts-ignore
        department_id: form.getFieldValue("department"),
      });
      console.log(res);
      if (res.data) {
        message.info(res.data.message);
        setshow(false);
        form.resetFields();
      }
    } catch (err) {
      console.log(err);
      errorResponse(err);
    }
  };
  const onFinishFailed = (error: any) => {
    console.log(error);
  };
  const options: SelectProps["options"] = departmentData?.data?.map(
    (department: any) => {
      return {
        value: department?.id,
        label: department?.department_name,
      };
    }
  );

  return (
    <ConfigProvider theme={selectedFiledTheme}>
      <div>
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
            <Col lg={24}>
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
    </ConfigProvider>
  );
};

export default AddCategory;
