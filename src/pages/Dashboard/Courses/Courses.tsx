import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import CourseCard from "../../../component/cards/CourseCard/CourseCard";

import { Link } from "react-router-dom";
import style from "./courses.module.css";
import { PlusOutlined } from "@ant-design/icons";
export default function Courses() {
  const [courseType, setCourseType] = useState("All");
  console.log(courseType);
  const [courses, setcourses] = useState([]);
  const handleButtonClick = (type: string) => {
    setCourseType(type);
  };
  useEffect(() => {
    fetch("/courseData.json")
      .then((res) => res.json())
      .then((data) => setcourses(data));
  }, []);

  return (
    <div className="">
      <div className="flex justify-between items-center mb-[30px]">
        <h1 className="text-2xl  font-semibold  text-customHeader">Courses</h1>
        <Link to="/admin/courses/add">
          <button className={style.addCourse}>
            {" "}
            <PlusOutlined className="me-2 text-white" /> Add Course
          </button>
        </Link>
      </div>
      <div className=" flex  gap-x-4">
        <button
          className={courseType === "All" ? style.activeBtn : style.inActiveBtn}
          onClick={() => handleButtonClick("All")}
        >
          All Course
        </button>
        <button
          className={
            courseType === "Offline" ? style.activeBtn : style.inActiveBtn
          }
          onClick={() => handleButtonClick("Offline")}
        >
          Offline Course
        </button>
        <button
          className={
            courseType === "Online" ? style.activeBtn : style.inActiveBtn
          }
          onClick={() => handleButtonClick("Online")}
        >
          Online Course
        </button>

        <button
          className={
            courseType === "Video" ? style.activeBtn : style.inActiveBtn
          }
          onClick={() => handleButtonClick("Video")}
        >
          Video Course
        </button>
      </div>

      <div className="mt-6">
        <Row gutter={16}>
          {courses?.map((course, index) => (
            <Col key={index} lg={6} style={{ marginBottom: "16px" }}>
              <CourseCard course={course} courseType={courseType}></CourseCard>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
