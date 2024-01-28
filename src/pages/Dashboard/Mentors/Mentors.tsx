/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, Dropdown, MenuProps, Row, Space, message } from "antd";
import { useState } from "react";
import style from "./Mentors.module.css";
import MentorsCard from "../../../component/cards/MentorsCard/MentorsCard";
import {
  // ArrowRightOutlined,
  // DownOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import CustomModal from "../../../component/UI/Modal/Modal";
import CreateMentor from "./CreateMentor/CreateMentor";
import { useGetallmentorsQuery } from "../../../redux/api/mentorApi";
import NoData from "../../../utils/NoData";

export default function Mentors() {
  const [show, setshow] = useState(false);
  const handleShowModal = () => {
    setshow(true);
  };
  const { data: mentorsData }: any = useGetallmentorsQuery(undefined);
  console.log(mentorsData);
  // const onClick: MenuProps["onClick"] = ({ key }) => {
  //   message.info(`Click on item ${key}`);
  // };
  // const items: MenuProps["items"] = [
  //   {
  //     label: (
  //       <div className="flex items-center gap-x-10">
  //         <p>Certified UI/UX Designer Course</p>
  //         <span>
  //           <ArrowRightOutlined />
  //         </span>
  //       </div>
  //     ),
  //     key: "1",
  //   },
  // ];
  // if (isLoading) {
  //   return <Loading />;
  // }
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
          {/* <div>
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
          </div> */}
        </div>
        <button onClick={handleShowModal} className={style.addMentorsBtn}>
          <PlusOutlined className="me-2" /> Add Mentor
        </button>
      </div>

      <div className="mt-[30px]">
        {mentorsData?.data?.length > 0 ? (
          <Row gutter={[8, 16]} align={"middle"} style={{}}>
            {mentorsData?.data?.map((mentor: any, index: number) => (
              <Col key={index} lg={6} xl={6}>
                <MentorsCard mentor={mentor}></MentorsCard>
              </Col>
            ))}
          </Row>
        ) : (
          <NoData />
        )}
      </div>
    </div>
  );
}
