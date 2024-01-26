/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import CourseCard from "../../../component/cards/CourseCard/CourseCard";

import { Link } from "react-router-dom";
import style from "./courses.module.css";
import { PlusOutlined } from "@ant-design/icons";
import { useGetallCourseQuery } from "../../../redux/api/courseApi";
export default function Courses() {
  const [courseType, setCourseType] = useState<string | null>(null);

  const handleFilterCourse = (type: string | null) => {
    setCourseType(type);
  };
  const query: Record<string, any> = {};
  if (courseType) {
    query["status"] = courseType;
  }
  const { data: courseData, isLoading }: any = useGetallCourseQuery(query);
  const courses = courseData?.data?.data;
  console.log(courses, "courseData");
  console.log(courseType);
  return (
    <div className="h-screen">
      <div className="flex justify-between items-center mb-[30px]">
        <h1 className="text-2xl  font-semibold  text-customHeader">Courses</h1>
        <Link to="/SUPER_ADMIN/courses/add">
          <button className={style.addCourse}>
            {" "}
            <PlusOutlined className="me-2 text-white" /> Add Course
          </button>
        </Link>
      </div>
      <div className=" flex  gap-x-4">
        <button
          className={courseType === null ? style.activeBtn : style.inActiveBtn}
          onClick={() => handleFilterCourse(null)}
        >
          All Course
        </button>
        <button
          className={
            courseType === "offline" ? style.activeBtn : style.inActiveBtn
          }
          onClick={() => handleFilterCourse("offline")}
        >
          Offline Course
        </button>
        <button
          className={
            courseType === "online" ? style.activeBtn : style.inActiveBtn
          }
          onClick={() => handleFilterCourse("online")}
        >
          Online Course
        </button>

        <button
          className={
            courseType === "video" ? style.activeBtn : style.inActiveBtn
          }
          onClick={() => handleFilterCourse("video")}
        >
          Video Course
        </button>
      </div>

      <div className="mt-6">
        <Row gutter={16}>
          {courses?.map((course: any, index: number) => (
            <Col key={index} lg={6} style={{ marginBottom: "16px" }}>
              <CourseCard course={course} courseType={courseType}></CourseCard>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
