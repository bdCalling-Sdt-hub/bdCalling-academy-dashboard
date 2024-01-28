/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Col,
  ConfigProvider,
  Row,
  Select,
  Form,
  message,
  Input,
  Button,
} from "antd";
import { selectedFiledTheme } from "../../../../themes/Index";
import { useNavigate, useParams } from "react-router-dom";

import {
  useAddClassesMutation,
  useGetAllClassModulesbyClassIdQuery,
  useGetClassesbyCourseIdQuery,
  useUpdateClassesByIdMutation,
} from "../../../../redux/api/classApi";
import { USER_ROLE } from "../../../../constants/role";
import { MdDelete } from "react-icons/md";
import Loading from "../../../../component/UI/Loading/Loading";
import { useForm } from "antd/es/form/Form";

import style from "../Classes.module.css";
import { useEffect } from "react";
import { useGetsingleCategoryQuery } from "../../../../redux/api/categoryapi";
/* eslint-disable @typescript-eslint/no-explicit-any */
const EditClasses = () => {
  const { courseId, classId } = useParams();
  //  const [editClass,{isLoading}] =  useupdatec
  const { data: classData } = useGetClassesbyCourseIdQuery(Number(courseId));

  const { data: modules } = useGetAllClassModulesbyClassIdQuery(
    Number(classId)
  );
  const [updateClass, { isLoading }] = useUpdateClassesByIdMutation();
  const module = modules?.data;

  const navigate = useNavigate();
  const [form] = useForm();
  const onFinish = async (data: any) => {
    const formatedData = {
      ...data,
      course_id: courseId,
      module_no: module?.module_no,
    };
    console.log(formatedData);
    try {
      const res: any = await updateClass({
        id: classId,
        body: formatedData,
      }).unwrap();
      if (res) {
        message.success(res.message);
        navigate(`/${USER_ROLE.ADMIN}/courses`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const onReset = () => {
    form.resetFields();
  };

  useEffect(() => {
    form.setFieldsValue({
      courseName: classData?.data[0]?.course?.courseName,
      module_title: module?.module_title,
      module_class: module?.module_class,
    });
  }, [classData, form, module]);

  return (
    <div className="h-screen">
      <h1 className="text-2xl font-bold mb-4 text-customHeader ">
        EDIT CLASSES
      </h1>
      <div className={`${style.AddClassContainer} px-[30px] pt-[30px] mb-6`}>
        <ConfigProvider theme={selectedFiledTheme}>
          <Form
            layout="vertical"
            form={form}
            name="add-course"
            initialValues={{}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Row gutter={16}>
              <Col lg={12}>
                <Form.Item
                  label="Course Name"
                  name="courseName"
                  rules={[{ required: true, message: "Please select course" }]}
                >
                  <Input
                    disabled
                    placeholder="Enter course name"
                    className="py-2"
                  />
                </Form.Item>
              </Col>
              <Col lg={12}>
                <Form.Item
                  label="Enter Module Title"
                  key="module_title"
                  name="module_title"
                  rules={[
                    { required: true, message: "Please input course name" },
                  ]}
                >
                  <Input placeholder="Enter course name" className="py-2" />
                </Form.Item>
              </Col>

              <Col lg={24}>
                <Form.List
                  name="module_class"
                  key="module_class"
                  initialValue={[{ name: "", video: "" }]}
                >
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map((field) => (
                        <Row key={field.key} gutter={16}>
                          <Col lg={12}>
                            <Form.Item
                              {...field}
                              name={[field.name, "name"]}
                              label="Enter video name"
                              rules={[
                                {
                                  required: true,
                                  message: "Please enter a video name.",
                                },
                              ]}
                            >
                              <Input
                                placeholder="Enter video name"
                                className="py-2"
                              />
                            </Form.Item>
                          </Col>
                          <Col lg={11}>
                            <Form.Item
                              {...field}
                              name={[field.name, "video"]}
                              label="Enter video link"
                              rules={[
                                {
                                  required: true,
                                  message: "Please enter a video link.",
                                },
                              ]}
                            >
                              <Input
                                placeholder="Enter video name"
                                className="py-2"
                              />
                            </Form.Item>
                          </Col>

                          <Col lg={1} className="my-auto">
                            <button
                              onClick={() => remove(field.name)}
                              className="cursor-pointer rounded border border-[red] px-4 py-2  border-red-500"
                            >
                              <MdDelete style={{ color: "red" }} />
                            </button>
                          </Col>
                          {/* ... remove button here ... */}
                        </Row>
                      ))}
                      <span
                        className="bg-customPrimary cursor-pointer text-[#fff] py-2 flex text-center  justify-center rounded text-lg font-bold mb-4"
                        onClick={() => add()}
                      >
                        Add Another Field
                      </span>
                    </>
                  )}
                </Form.List>
              </Col>
            </Row>
            <div className="flex justify-between">
              <div>
                <Form.Item>
                  <Button
                    size="large"
                    style={{
                      color: "white",
                      borderRadius: "4px",
                    }}
                    htmlType="submit"
                    className="bg-customPrimary"
                  >
                    {isLoading ? <Loading /> : "Submit"}
                  </Button>
                </Form.Item>
              </div>
              <div>
                <Form.Item>
                  <Button
                    size="large"
                    htmlType="button"
                    onClick={onReset}
                    style={{
                      color: "white",
                      backgroundColor: "#D7263D",
                      borderRadius: "4px",
                    }}
                  >
                    cancel
                  </Button>
                </Form.Item>
              </div>
            </div>
          </Form>
        </ConfigProvider>
      </div>
    </div>
  );
};
export default EditClasses;
