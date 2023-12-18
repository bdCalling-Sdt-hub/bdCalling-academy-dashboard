/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Card } from "antd";
import { Progress } from "antd";
import { FaStar } from "react-icons/fa";
import style from "./studentCourseCard.module.css";
import { Link } from "react-router-dom";
export default function StudentCoursesCard(props: any) {
  const { id, image, title, duration, modules, completation, rating } =
    props.course;

  const handleContinueCourse = () => {};
  return (
    <div>
      <Card
        style={{ width: 372 }}
        bodyStyle={{ padding: "0" }}
        cover={
          <img
            style={{ height: "260px", padding: "20px" }}
            alt="course-image"
            src={image}
          />
        }
      >
        <h1 className="text-lg px-5	font-semibold pt-3 pb-5	text-customPrimary">
          {title}
        </h1>
        <div>
          <Progress
            percent={completation}
            strokeColor="#2492EB"
            showInfo={false}
          />
        </div>
        <div className="flex justify-between items-center px-5 pb-4">
          <p>{completation}% complete</p>

          <div className="flex items-center gap-x-2 text-[#FFC60B]">
            <FaStar />
            <p className="text-[#FFC60B]">{3}.0</p>
          </div>
        </div>

        <div className="px-5 pb-4 pt-3">
          <Link
            to={`/studentEnrolledCourse/${id}/${encodeURIComponent(
              modules[0].moduleName
            )}/${encodeURIComponent(modules[0].videos[0].title)}`}
          >
            <button
              onClick={handleContinueCourse}
              className={style.continueBtn}
            >
              Continue Course
            </button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
