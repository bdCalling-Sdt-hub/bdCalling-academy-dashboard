import { Button, Col, Row } from "antd";
import { useEffect, useState } from "react";
import CourseCard from "../../../component/CourseCard/CourseCard";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Courses() {
  const [selectedButton, setSelectedButton] = useState("All");
  const [courses, setcourses] = useState([]);
  const handleButtonClick = (type: string) => {
    setSelectedButton(type);
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
          <Button
            style={{
              color: "white",
            }}
            size="large"
            className="flex items-center font-semibold bg-customPrimary"
            icon={<FiPlus />}
          >
            Add Course
          </Button>
        </Link>
      </div>
      <div className=" flex  gap-x-4">
        <Button
          className={selectedButton === "All" ? "bg-customPrimary" : ""}
          size="large"
          style={{
            fontWeight: 600,
            color: selectedButton === "All" ? "white" : "",
          }}
          onClick={() => handleButtonClick("All")}
        >
          All Course
        </Button>
        <Button
          className={selectedButton === "Online" ? "bg-customPrimary" : ""}
          size="large"
          style={{
            fontWeight: 600,
            color: selectedButton === "Online" ? "white" : "",
          }}
          onClick={() => handleButtonClick("Online")}
        >
          Online Course
        </Button>
        <Button
          className={selectedButton === "Offline" ? "bg-customPrimary" : ""}
          size="large"
          style={{
            fontWeight: 600,
            color: selectedButton === "Offline" ? "white" : "",
          }}
          onClick={() => handleButtonClick("Offline")}
        >
          Offline Course
        </Button>
        <Button
          className={selectedButton === "Video" ? "bg-customPrimary" : ""}
          size="large"
          style={{
            fontWeight: 600,
            color: selectedButton === "Video" ? "white" : "",
          }}
          onClick={() => handleButtonClick("Video")}
        >
          Video Course
        </Button>
      </div>

      <div className="mt-6">
        <Row gutter={16}>
          {courses?.map((course, index) => (
            <Col key={index}>
              <CourseCard course={course}></CourseCard>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
