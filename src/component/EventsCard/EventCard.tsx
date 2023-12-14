import React, { useState } from "react";
import { BsCalendar2Event } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";
import { MdMyLocation } from "react-icons/md";

import style from "./eventsCard.module.css";
import { Card, Col, Row } from "antd";
import CustomPaginations from "../UI/Pagination/Pagination";
import CustomModal from "../UI/Modal/Modal";
import EditEvent from "../../pages/Dashboard/Events/EditEvent/EditEvent";
export default function EventCard(props) {
  const { img, date, time, location, title } = props.events;
  const [show, setshow] = useState(false);
  const handleModal = () => {};
  return (
    <div>
      <CustomModal
        showCancelButton={false}
        showOkButton={false}
        title={""}
        isOpen={show}
        closeModal={() => setshow(false)}
      >
        <EditEvent data={props.events} />
      </CustomModal>
      <Card
        hoverable
        style={{
          width: "504px",
          height: "492px",
          padding: "6px",
        }}
        cover={
          <img
            alt="example"
            src={img}
            style={{
              padding: "20px",
              // height: "144px",
              // width: "144px",
              // borderRadius: "50%",
              // objectFit: "cover",
            }}
          />
        }
      >
        <Row gutter={16}>
          <Col lg={8}>
            <div className=" flex items-center text-sm gap-x-2">
              <span className="text-customPrimary text-sm">
                <BsCalendar2Event />
              </span>
              <p className="text-sm"> {date}</p>
            </div>
          </Col>

          <Col lg={8}>
            <div className=" flex items-center gap-x-2">
              <span className="text-customPrimary">
                <IoMdTime />
              </span>
              <p> {time}</p>
            </div>
          </Col>
          <Col lg={8}>
            <div className=" flex items-center gap-x-2">
              <span className="text-customPrimary">
                <MdMyLocation />
              </span>
              <p> {location}</p>
            </div>
          </Col>
        </Row>
        <h1 className="text-[18px] font-semibold mt-4">{title}</h1>
        <div className="card-bottom flex  justify-between mt-6  ">
          <button className={style.deleteEvents} onClick={handleModal}>
            DELETE EVENTS
          </button>
          <button onClick={() => setshow(true)} className={style.editEvents}>
            EDIT EVENTS
          </button>
        </div>
      </Card>
    </div>
  );
}
