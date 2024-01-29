/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { BsCalendar2Event } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";
import { MdMyLocation } from "react-icons/md";
import style from "./eventsCard.module.css";

import CustomModal from "../../UI/Modal/Modal";
import EditEvent from "../../../pages/Dashboard/Events/EditEvent/EditEvent";
import { imageUrl } from "../../../utils/Common";
import { useDeleteEventMutation } from "../../../redux/api/eventApi";
import { message } from "antd";
import dayjs from "dayjs";
import PopConfirm from "../../UI/popConfirm/PopConfirm";
export default function EventCard(props: any) {
  const { image, date, starttime, officeLocation, courseName, id } =
    props.events;
  const [deleteEvents] = useDeleteEventMutation();

  const [show, setshow] = useState(false);
  const handleDelete = async (id: string) => {
    try {
      const res: any = await deleteEvents(id).unwrap();
      if (res) {
        message.success(res?.message);
      }
    } catch (err: any) {
      message.error(err.data.message);
    }
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
        <EditEvent event={props.events} setshow={setshow} />
      </CustomModal>
      <div className={style.eventCard}>
        <div className="p-[20px]">
          <div className={style.img}>
            <img className="rounded-[10px]" src={imageUrl(image)} alt="" />
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
              <p>{dayjs(starttime, "HH:mm").format("h:mm a")}</p>
            </div>
            <div className="flex items-center gap-x-2 text-customPrimary">
              <span>
                <MdMyLocation />
              </span>
              <p>{officeLocation}</p>
            </div>
          </div>
          <h1 className="text-[18px] font-medium ">{courseName}</h1>
          <div className="card-footer flex justify-between mt-[30px]">
            <PopConfirm
              onConfirm={() => handleDelete(id)}
              title="Are You Sure?"
              description="this action cannot be undone!"
            >
              <button className={style.deleteEvents}>Delete Events</button>
            </PopConfirm>
            <button onClick={() => setshow(true)} className={style.editEvents}>
              Edit Events
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
