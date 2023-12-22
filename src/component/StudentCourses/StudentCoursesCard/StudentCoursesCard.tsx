/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Card } from "antd";
import { Progress } from "antd";
import { FaStar } from "react-icons/fa";
import style from "./studentCourseCard.module.css";
import { Link } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";

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
        <h1 className="text-lg px-5	font-semibold mt-[10px] mb-[20px]	text-customPrimary">
          {title}
        </h1>
        <div className="mb-2">
          <ProgressBar
            completed={completation}
            bgColor="#2492EB"
            height="2px"
            isLabelVisible={false}
            animateOnRender={true}
          />
        </div>
        <div className="flex justify-between items-center px-5 pb-4">
          <p className="text-[#5C5C5C]">{completation}% complete</p>

          <div className="flex items-center gap-x-2 text-[#FFC60B]">
            <FaStar />
            <p className="text-[#FFC60B]">{3}.0</p>
          </div>
        </div>

        <div className="px-5 pb-[22px] pt-3">
          <Link
            to={`/student/dashboard/course/${id}/${encodeURIComponent(
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
