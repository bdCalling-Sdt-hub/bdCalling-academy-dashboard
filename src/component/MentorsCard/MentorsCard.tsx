/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, Form, Upload, message } from "antd";
import style from "./mentorsCard.module.css";
import { useState } from "react";
import CustomModal from "../UI/Modal/Modal";
import {
  RcFile,
  UploadChangeParam,
  UploadFile,
  UploadProps,
} from "antd/es/upload";
import { EditOutlined, LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import EditMentor from "../../pages/Dashboard/Mentors/EditMentor/EditMentor";

export default function MentorsCard(props: any) {
  const { certification, department, img, name } = props.mentor;
  const [show, setshow] = useState(false);

  const handleModal = () => {
    setshow(true);
  };

  return (
    <div>
      <CustomModal isOpen={show} closeModal={() => setshow(false)}>
        <EditMentor img={img} />
      </CustomModal>
      <Card
        hoverable
        style={{
          width: "372px",
          height: "383px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "6px",
        }}
        cover={
          <img
            alt="example"
            src={img}
            style={{
              height: "144px",
              width: "144px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        }
      >
        <div className="text-center">
          <p className="color-[#333]"> {name}</p>
          <h5 className="font-semibold my-1">{department}</h5>
          <p className="text-[#5C5C5C] text-xs	">{certification}</p>
        </div>
        <div className="card-bottom flex  justify-around mt-6  ">
          <button className={style.mentorsCardEditBtn} onClick={handleModal}>
            EDIT
          </button>
          <button className={style.mentorDeleteBtn}>DELETE</button>
        </div>
      </Card>
    </div>
  );
}
