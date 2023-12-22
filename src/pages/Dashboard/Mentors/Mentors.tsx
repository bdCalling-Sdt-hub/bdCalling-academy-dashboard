import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import style from "./Mentors.module.css";
import { Link } from "react-router-dom";
import MentorsCard from "../../../component/MentorsCard/MentorsCard";
import { PlusOutlined } from "@ant-design/icons";

export default function Mentors() {
  const [mentors, setMentors] = useState([]);
  useEffect(() => {
    fetch("./mentorsData.json")
      .then((res) => res.json())
      .then((data) => setMentors(data));
  }, []);
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-[30px]">
        <h1 className="text-2xl  font-semibold  ">Mentors</h1>
        <Link to="/mentor/add">
          <button className={style.addMentorsBtn}>
            <PlusOutlined className="me-2" /> Add Mentor
          </button>
        </Link>
      </div>

      <div>
        <Row gutter={16} align={"middle"}>
          {mentors?.map((mentor, index) => (
            <Col key={index} lg={6} xl={6} style={{ marginBottom: "16px" }}>
              <MentorsCard mentor={mentor}></MentorsCard>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
