/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { GoBook } from "react-icons/go";
import { GoPeople } from "react-icons/go";
import { CiClock2 } from "react-icons/ci";
// import { LuInfo } from "react-icons/lu";
import { IoNewspaperOutline } from "react-icons/io5";

import { RiDeleteBin5Line } from "react-icons/ri";

import { PiNotePencilDuotone } from "react-icons/pi";
import { PiVideoLight } from "react-icons/pi";

import style from "./courseCard.module.css";
import { Link, useNavigate } from "react-router-dom";
import { IMAGE_BASE_URL } from "../../../utils/Common";
import { LuInfo } from "react-icons/lu";
import { useGetClassesbyCourseIdQuery } from "../../../redux/api/classApi";
import { USER_ROLE } from "../../../constants/role";
import { useDeleteCourseMutation } from "../../../redux/api/courseApi";
import { message } from "antd";
import PopConfirm from "../../UI/popConfirm/PopConfirm";
export default function CourseCard({ course }: any) {
  const navigate = useNavigate();
  const {
    id,
    courseThumbnail,
    courseName,
    price,
    seat_left,
    batch,
    status,

    end_date,
  } = course;
  const image = `${IMAGE_BASE_URL}/${courseThumbnail}`;
  const { data: classesData } = useGetClassesbyCourseIdQuery(id);
  const [deleteCourse] = useDeleteCourseMutation();
  const handleDelete = async () => {
    try {
      const res: any = await deleteCourse(id).unwrap();
      if (res) {
        message.success(res.message || "Course deleted successfully");
      }
    } catch (err: any) {
      message.error(
        err.data?.message || err?.data?.error || "Course deleted successfully"
      );
    }
  };
  return (
    <div className={style.card}>
      <div className="p-[20px]">
        <div>
          <img src={image} alt="" className={style.img} />
        </div>
        <div>
          <div className="flex justify-between items-center text-[#5C5C5C]  my-[20px]">
            <div className="text-base flex items-center gap-x-3">
              <span className="text-customPrimary">
                <GoBook />
              </span>
              <p className="">Batch {batch}</p>
            </div>
            <p
              className="bg-customPrimary px-4 text-white "
              style={{
                color: "white",
                borderRadius: "3px",
              }}
            >
              {status}
            </p>
          </div>

          <div className="flex justify-between items-center text-[#5C5C5C]  ">
            <div className="text-base flex items-center gap-x-3">
              <span className="text-customPrimary">
                <GoPeople />
              </span>
              <p className="">{seat_left}</p>
            </div>
            <div className="flex items-center gap-x-3">
              <span className="text-customPrimary">
                <CiClock2 />
              </span>
              <p>{end_date}</p>
            </div>
          </div>

          <hr className="text-[#EBEBEB]  mt-[30px] mb-[20px]" />
          <h1 className="text-[18px] font-semibold text-customPrimary">
            {courseName}
          </h1>
          <div>
            <p className="text-[18px] font-semibold text-customPrimary mt-[20px] mb-[20px]">
              {price}
            </p>

            <div className="flex justify-between">
              <Link
                to={`/${USER_ROLE.ADMIN}/${courseName
                  .split(" ")
                  .join("-")}/${id}/${classesData?.data[0]?.id}/${
                  classesData?.data[0]?.module_no
                }/${classesData?.data[0]?.module_class[0]?.name
                  .split(" ")
                  .join("-")}`}
              >
                <button className={style.btnInfo}>
                  <LuInfo
                    style={{
                      height: "24px",
                      width: "24px",
                    }}
                  />
                </button>
              </Link>

              <button
                className={style.btnEdit}
                onClick={() => navigate(`/SUPER_ADMIN/courses/edit/${id}`)}
              >
                <PiNotePencilDuotone
                  style={{
                    height: "24px",
                    width: "24px",
                  }}
                />
              </button>
              <PopConfirm
                title="Are You Sure?"
                description="this action cannot be undone!"
                onConfirm={handleDelete}
              >
                <button className={style.btnDelete}>
                  <RiDeleteBin5Line
                    style={{
                      height: "24px",
                      width: "24px",
                    }}
                  />
                </button>
              </PopConfirm>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
