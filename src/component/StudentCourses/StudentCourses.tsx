/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import StudentCoursesCard from "./StudentCoursesCard/StudentCoursesCard";
import { Row } from "antd";

export default function StudentCourses() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("/video.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  console.log(courses);
  return (
    <div>
      <div className=" my-7">
        <Row>
          {courses.map((course: any, index: number) => (
            <StudentCoursesCard key={index} course={course} />
          ))}
        </Row>
      </div>
    </div>
  );
}
