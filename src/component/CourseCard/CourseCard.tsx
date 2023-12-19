/* eslint-disable @typescript-eslint/no-explicit-any */
import { GoBook } from "react-icons/go";
import { GoPeople } from "react-icons/go";
import { CiClock2 } from "react-icons/ci";

import { Button, Card } from "antd";

import style from "./courseCard.module.css";
import { useNavigate } from "react-router-dom";
export default function CourseCard({ course }: any) {
  const navigate = useNavigate();
  const { id, img, title, price, availableSeat, batch, type, daysLeft } =
    course;

  const handleDelete = () => {};
  return (
    <div>
      <Card
        style={{ width: 372, padding: "20px" }}
        cover={
          <img
            alt="example"
            src={img}
            style={{
              height: "260px",
            }}
          />
        }
      >
        <div
          className="card-body"
          style={{ height: "100%", display: "flex", flexDirection: "column" }}
        >
          <div className="flex justify-between items-center mb-5">
            <div className="text-base flex items-center gap-x-3">
              <span className="text-customPrimary">
                <GoBook />
              </span>
              <p className="">{batch}</p>
            </div>
            <p
              className="bg-customPrimary px-4 text-white"
              style={{
                color: "white",
              }}
            >
              {type}
            </p>
          </div>

          <div className="flex justify-between items-center">
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

          <hr
            className="my-4"
            style={{
              color: "#EBEBEB",
            }}
          />

          <h1 className="text-lg text-customPrimary  font-semibold mb-4 ">
            {title}
          </h1>
          <h1 className="text-lg text-customPrimary  font-semibold mb-6">
            {price}
          </h1>
        </div>
        <div className="flex gap-x-4">
          <Button
            onClick={() => handleDelete()}
            size="large"
            className={style.cardDeleteButton}
          >
            Delete Course
          </Button>

          <Button
            size="large"
            onClick={() => navigate(`/courses/edit/${id}`)}
            className={style.cardEditButton}
          >
            Edit Course
          </Button>
        </div>
      </Card>
    </div>
  );
}
