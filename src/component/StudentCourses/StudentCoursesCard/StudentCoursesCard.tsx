import { Card } from "antd";
import { Progress } from "antd";
import { FaStar } from "react-icons/fa";
import style from "./studentCourseCard.module.css";
export default function StudentCoursesCard() {
  const cardInfo = {
    image: "https://t.ly/G_wcW",
    title: "Certified UI/UX Designer Course",
    completation: 30,
    rating: 3,
  };
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
            src={cardInfo.image}
          />
        }
      >
        <h1 className="text-lg px-5	font-semibold pt-3 pb-5	text-customPrimary">
          {cardInfo.title}
        </h1>
        <div>
          <Progress
            percent={cardInfo.completation}
            strokeColor="#2492EB"
            showInfo={false}
          />
        </div>
        <div className="flex justify-between items-center px-5 pb-4">
          <p>{cardInfo.completation}% complete</p>

          <div className="flex items-center gap-x-2 text-[#FFC60B]">
            <FaStar />
            <p className="text-[#FFC60B]">{3}.0</p>
          </div>
        </div>

        <div className="px-5 pb-4 pt-3">
          <button onClick={handleContinueCourse} className={style.continueBtn}>
            Continue Course
          </button>
        </div>
      </Card>
    </div>
  );
}
