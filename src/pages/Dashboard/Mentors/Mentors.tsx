import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import style from "./Mentors.module.css";

import MentorsCard from "../../../component/MentorsCard/MentorsCard";
import { PlusOutlined } from "@ant-design/icons";
import CustomModal from "../../../component/UI/Modal/Modal";
import CreateMentor from "./CreateMentor/CreateMentor";

export default function Mentors() {
  const [mentors, setMentors] = useState([]);
  useEffect(() => {
    fetch("./mentorsData.json")
      .then((res) => res.json())
      .then((data) => setMentors(data));
  }, []);
  const handleShowModal = () => {
    setshow(true);
  };
  const [show, setshow] = useState(false);

  return (
    <div className="">
      <CustomModal
        showCancelButton={false}
        showOkButton={false}
        title={""}
        isOpen={show}
        closeModal={() => setshow(false)}
      >
        <CreateMentor />
      </CustomModal>
      <div className="flex justify-between items-center mb-[30px]">
        <h1 className="text-2xl  font-semibold text-customHeader ">Mentors</h1>

        <button onClick={handleShowModal} className={style.addMentorsBtn}>
          <PlusOutlined className="me-2" /> Add Mentor
        </button>
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
