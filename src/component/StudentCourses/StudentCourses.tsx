/* eslint-disable @typescript-eslint/no-explicit-any */

import StudentCoursesCard from "./StudentCoursesCard/StudentCoursesCard";
import { Row } from "antd";
import { useGetbuyingCourseQuery } from "../../redux/api/courseApi";

export default function StudentCourses() {
  const { data: courseData }: any = useGetbuyingCourseQuery(undefined);
  console.log(courseData);

  return (
    <div>
      <div className=" my-7">
        <Row>
          {courseData?.map((course: any, index: number) => (
            <StudentCoursesCard key={index} courses={course} />
          ))}
        </Row>
      </div>
    </div>
  );
}
