import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import CourseCard from "../../../component/CourseCard/CourseCard";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import style from "./courses.module.css";
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
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl  font-semibold mb-8 ">Courses</h1>
        <Link to="/courses/add">
          <button
            style={{
              color: "white",
            }}
            className={style.addCourse}
          >
            <span className="flex items-center gap-x-3">
              <FiPlus
                style={{
                  color: "white",
                }}
              />{" "}
              Add Course
            </span>
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
