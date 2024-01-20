import { Col, Dropdown, MenuProps, Row, Space, message } from "antd";
import { useEffect, useState } from "react";
import style from "./Mentors.module.css";

import MentorsCard from "../../../component/cards/MentorsCard/MentorsCard";
import {
  ArrowRightOutlined,
  DownOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import CustomModal from "../../../component/UI/Modal/Modal";
import CreateMentor from "./CreateMentor/CreateMentor";

export default function Mentors() {
  const [mentors, setMentors] = useState([]);
  useEffect(() => {
    fetch("/mentorsData.json")
      .then((res) => res.json())
      .then((data) => setMentors(data));
  }, []);

  const handleShowModal = () => {
    setshow(true);
  };
  const [show, setshow] = useState(false);
  const onClick: MenuProps["onClick"] = ({ key }) => {
    message.info(`Click on item ${key}`);
  };
  const items: MenuProps["items"] = [
    {
      label: (
        <div className="flex items-center gap-x-10">
          <p>Certified UI/UX Designer Course</p>
          <span>
            <ArrowRightOutlined />
          </span>
        </div>
      ),
      key: "1",
    },
  ];
  return (
    <div className="h-screen">
      <CustomModal
        showCancelButton={false}
        showOkButton={false}
        title={""}
        isOpen={show}
        closeModal={() => setshow(false)}
      >
        <CreateMentor setshow={setshow} />
      </CustomModal>
      <div className="flex justify-between items-center ">
        <div className="flex items-center gap-x-4">
          <h1 className="text-2xl  font-semibold text-customHeader ">
            Mentor List
          </h1>
          <div>
            <Dropdown
              menu={{ items, onClick }}
              placement="bottomLeft"
              arrow={{ pointAtCenter: true }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space className="border p-4 border-[#858585]">
                  Department Name
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
        </div>
        <button onClick={handleShowModal} className={style.addMentorsBtn}>
          <PlusOutlined className="me-2" /> Add Mentor
        </button>
      </div>

      <div className="mt-[30px]">
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
