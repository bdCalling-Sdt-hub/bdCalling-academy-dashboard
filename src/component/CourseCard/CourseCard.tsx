/* eslint-disable @typescript-eslint/no-explicit-any */
import { GoBook } from "react-icons/go";
import { GoPeople } from "react-icons/go";
import { CiClock2 } from "react-icons/ci";
import { LuInfo } from "react-icons/lu";
import { IoNewspaperOutline } from "react-icons/io5";

import { RiDeleteBin5Line } from "react-icons/ri";

import { PiNotePencilDuotone } from "react-icons/pi";
import { PiVideoLight } from "react-icons/pi";

import style from "./courseCard.module.css";
import { useNavigate } from "react-router-dom";
export default function CourseCard({ course, courseType }: any) {
  console.log(courseType);
  const navigate = useNavigate();
  const {
    id,
    img,
    title,
    price,
    availableSeat,
    batch,
    type,
    daysLeft,
    lesson,
    videoDuration,
  } = course;

  const handleDelete = (id: string) => {
    console.log(id);
  };
  return (
    <div className={style.card}>
      <div className="p-[20px]">
        <div>
          <img src={img} alt="" className={style.img} />
        </div>
        <div>
          <div className="flex justify-between items-center text-[#5C5C5C]  my-[20px]">
            <div className="text-base flex items-center gap-x-3">
              <span className="text-customPrimary">
                <GoBook />
              </span>
              <p className="">{batch}</p>
            </div>
            <p
              className="bg-customPrimary px-4 text-white "
              style={{
                color: "white",
                borderRadius: "3px",
              }}
            >
              {type}
            </p>
          </div>

          {courseType !== "Online" && courseType !== "Video" ? (
            <div className="flex justify-between items-center text-[#5C5C5C]  ">
              <div className="text-base flex items-center gap-x-3">
                <span className="text-customPrimary">
                  <GoPeople />
                </span>
                <p className="">{availableSeat}</p>
              </div>
              <div className="flex items-center gap-x-3">
                <span className="text-customPrimary">
                  <CiClock2 />
                </span>
                <p>{daysLeft}</p>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <div className="text-base flex items-center gap-x-3 text-[#5C5C5C]">
                <span className="text-customPrimary">
                  <IoNewspaperOutline />
                </span>
                <p className="">Lessons {lesson}</p>
              </div>
              {courseType === "Video" && (
                <div className="text-base flex items-center gap-x-3 text-[#5C5C5C]">
                  <span className="text-customPrimary">
                    <PiVideoLight />
                  </span>
                  <p className="">Videos {videoDuration}</p>
                </div>
              )}
            </div>
          )}
          <hr className="text-[#EBEBEB]  mt-[30px] mb-[20px]" />
          <h1 className="text-[18px] font-semibold text-customPrimary">
            {title}
          </h1>
          <div>
            <p className="text-[18px] font-semibold text-customPrimary mt-[40px] mb-[20px]">
              {price}
            </p>
            {courseType === "Online" || courseType === "Video" ? (
              <div className="flex justify-between">
                <button
                  onClick={() => handleDelete(id)}
                  className={style.deleteCourse}
                >
                  Delete Course
                </button>
                <button
                  className={style.EditCourse}
                  onClick={() => navigate(`/courses/edit/${id}`)}
                >
                  Edit Course
                </button>
              </div>
            ) : (
              <div className="flex justify-between">
                <button className={style.btnInfo}>
                  <LuInfo
                    style={{
                      height: "24px",
                      width: "24px",
                    }}
                  />
                </button>
                <button
                  className={style.btnEdit}
                  onClick={() => navigate(`/courses/edit/${id}`)}
                >
                  <PiNotePencilDuotone
                    style={{
                      height: "24px",
                      width: "24px",
                    }}
                  />
                </button>
                <button className={style.btnDelete}>
                  <RiDeleteBin5Line
                    style={{
                      height: "24px",
                      width: "24px",
                    }}
                  />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
