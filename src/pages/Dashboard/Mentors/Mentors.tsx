import { Button, Col, Row } from "antd";
import { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import MentorsCard from "../../../component/MentorsCard/MentorsCard";

export default function Mentors() {
  const [mentors, setMentors] = useState([]);
  useEffect(() => {
    fetch("./mentorsData.json")
      .then((res) => res.json())
      .then((data) => setMentors(data));
  }, []);
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl  font-semibold mb-8 ">Mentors</h1>
        <Link to="/mentor/add">
          <Button
            style={{
              color: "white",
            }}
            size="large"
            className="flex items-center font-semibold bg-customPrimary"
            icon={<FiPlus />}
          >
            Add Mentor
          </Button>
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
