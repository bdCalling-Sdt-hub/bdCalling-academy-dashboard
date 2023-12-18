import { Button } from "antd";
import image from "../../../assets/StudentCoursesAndCertificates/noCourse.png";
export default function NoEnrollMent() {
  const browseCourses = () => {};
  return (
    <div>
      <div className="text-center">
        <img src={image} alt="" className="mx-auto pb-4 h-[317px] w-[352px]" />
        <h1 className="text-4xl font-medium	text-[#333]  ">
          You are not enrolled in any courses
        </h1>
        <p className="py-4">
          You are not enrolled in any course. Browse the course again
        </p>
        <Button
          onClick={browseCourses}
          size="large"
          className="bg-customPrimary"
          style={{
            color: "white",
          }}
        >
          Browse Courses
        </Button>
      </div>
    </div>
  );
}
