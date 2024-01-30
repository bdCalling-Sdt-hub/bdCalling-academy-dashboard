/* eslint-disable @typescript-eslint/no-explicit-any */

import StudentCoursesCard from "./StudentCoursesCard/StudentCoursesCard";
import { Row } from "antd";
import { useGetbuyingCourseQuery } from "../../redux/api/courseApi";
import NoEnrollMent from "./NoEnrollment/Noenrollment";

export default function StudentCourses() {
  const { data: courseData }: any = useGetbuyingCourseQuery(undefined);

  return (
    <div>
      <div className=" my-7">
        {courseData?.length > 0 ? (
          <Row>
            {courseData?.map((course: any, index: number) => (
              <StudentCoursesCard key={index} courses={course} />
            ))}
          </Row>
        ) : (
          <NoEnrollMent />
        )}
      </div>
    </div>
  );
}
