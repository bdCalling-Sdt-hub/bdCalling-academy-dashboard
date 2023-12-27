/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { BsCalendar2Event } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";
import { MdMyLocation } from "react-icons/md";
import style from "./eventsCard.module.css";

import CustomModal from "../../UI/Modal/Modal";
import EditEvent from "../../../pages/Dashboard/Events/EditEvent/EditEvent";
export default function EventCard(props: any) {
  const { img, date, time, location, title, id } = props.events;
  const [show, setshow] = useState(false);
  const handleDelete = (id: string) => {
    console.log(id);
  };
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
      <div className={style.eventCard}>
        <div className="p-[20px]">
          <div className={style.img}>
            <img className="rounded-[10px]" src={img} alt="" />
          </div>
          <div className="flex justify-between my-[30px]">
            <div className="flex items-center gap-x-2 text-customPrimary">
              <span>
                <BsCalendar2Event />
              </span>
              <p>{date}</p>
            </div>
            <div className="flex items-center gap-x-2 text-customPrimary">
              <span>
                <IoMdTime />
              </span>
              <p>{time}</p>
            </div>
            <div className="flex items-center gap-x-2 text-customPrimary">
              <span>
                <MdMyLocation />
              </span>
              <p>{location}</p>
            </div>
          </div>
          <h1 className="text-[18px] font-medium ">{title}</h1>
          <div className="card-footer flex justify-between mt-[30px]">
            <button
              onClick={() => handleDelete(id)}
              className={style.deleteEvents}
            >
              Delete Events
            </button>
            <button onClick={() => setshow(true)} className={style.editEvents}>
              Edit Events
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
