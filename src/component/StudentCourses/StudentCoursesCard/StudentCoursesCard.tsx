/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Card } from "antd";
import { Progress } from "antd";
import { FaStar } from "react-icons/fa";
import style from "./studentCourseCard.module.css";
import { Link } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";
import { IMAGE_BASE_URL } from "../../../utils/Common";
import { useGetClassesbyCourseIdQuery } from "../../../redux/api/classApi";

export default function StudentCoursesCard({ courses }: any) {
  const { id, courseThumbnail, courseName } = courses?.course || {};

  const { data: classes } = useGetClassesbyCourseIdQuery(id);

  const firstClass = classes?.data[0];
  const courseImage = `${IMAGE_BASE_URL}/${courseThumbnail}`;

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
            src={courseImage}
          />
        }
      >
        <h1 className="text-lg px-5	font-semibold mt-[10px] mb-[20px]	text-customPrimary">
          {courseName}
        </h1>

        <div className="px-5 pb-[22px] pt-3">
          <Link
            to={`/${courseName?.split(/[/\s]+/)?.join("-")}/${id}/${
              firstClass?.id
            }/${firstClass?.module_no}/${firstClass?.module_class[0]?.name
              .split(/[/\s]+/)
              .join("-")}`}
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
