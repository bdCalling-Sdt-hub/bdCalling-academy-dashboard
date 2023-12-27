/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Col, Row } from "antd";

import { useEffect, useState } from "react";
import EventCard from "../../../component/cards/EventsCard/EventCard";
import CustomPaginations from "../../../component/UI/Pagination/Pagination";
import { PlusOutlined } from "@ant-design/icons";
import style from "./Events.module.css";
import CustomModal from "../../../component/UI/Modal/Modal";
import AddEvents from "./AddEvents/AddEvents";
export default function Events() {
  const [events, setevents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [show, setshow] = useState(false);
  useEffect(() => {
    fetch("/eventsData.json")
      .then((res) => res.json())
      .then((data) => setevents(data));
  }, []);
  console.log(events);
  return (
    <div className="h-screen">
      <CustomModal
        showCancelButton={false}
        showOkButton={false}
        title={""}
        isOpen={show}
        closeModal={() => setshow(false)}
      >
        <AddEvents setshow={setshow} />
      </CustomModal>
      <div className="flex justify-between items-center mb-[30px]">
        <h1 className="text-2xl  font-semibold text-customHeader ">Events</h1>

        <button onClick={() => setshow(true)} className={style.addEventsBtn}>
          <PlusOutlined className="me-3" /> Add Event
        </button>
      </div>
      <div>
        <Row gutter={12}>
          {events?.map((e, index) => (
            <Col key={index} style={{ marginBottom: "12px" }} lg={8}>
              <EventCard key={index} events={e} />
            </Col>
          ))}
        </Row>
      </div>
      <div className="text-end mt-4">
        <CustomPaginations
          pageSize={5}
          total={events.length}
          defaultPageSize={1}
          size="large"
          onChange={(page: any) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}
