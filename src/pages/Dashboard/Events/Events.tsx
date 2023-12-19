/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Link } from "react-router-dom";
import { Button, Col, Row } from "antd";
import { FiPlus } from "react-icons/fi";
import { useEffect, useState } from "react";
import EventCard from "../../../component/EventsCard/EventCard";
import CustomPaginations from "../../../component/UI/Pagination/Pagination";
export default function Events() {
  const [events, setevents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    fetch("./eventsData.json")
      .then((res) => res.json())
      .then((data) => setevents(data));
  }, []);
  console.log(events);
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl  font-semibold mb-8 ">Events</h1>
        <Link to="/events/add">
          <Button
            style={{
              color: "white",
            }}
            size="large"
            className="flex items-center font-semibold bg-customPrimary"
            icon={<FiPlus />}
          >
            Add Event
          </Button>
        </Link>
      </div>
      <div>
        <Row gutter={12}>
          {events?.map((e, index) => (
            <Col style={{ marginBottom: "12px" }}>
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
