/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, message } from "antd";
import style from "./mentorsCard.module.css";
import { useState } from "react";
import CustomModal from "../../UI/Modal/Modal";
const dummyImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_upzZ7ljAZIdBCo1AL1A3BPA5i_b2K1HI4w&usqp=CAU";
import EditMentor from "../../../pages/Dashboard/Mentors/EditMentor/EditMentor";
import { useDeleteProfileMutation } from "../../../redux/api/authApi";
import { imageUrl } from "../../../utils/Common";

export default function MentorsCard(props: any) {
  const { category, designation, image, fullName, id } = props.mentor;
  console.log(image);
  const [show, setshow] = useState(false);
  const [deleteMentor] = useDeleteProfileMutation();
  const handleModal = () => {
    setshow(true);
  };
  const handleDeleteMentor = async () => {
    try {
      const res: any = await deleteMentor(id).unwrap();
      if (res.message) {
        message.info(res.message);
      }
    } catch (err) {
      console.log(err);
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
        <EditMentor setshow={setshow} mentorData={props?.mentor} />
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
            alt="mentor image"
            src={image ? imageUrl(image) : dummyImage}
            style={{
              height: "144px",
              width: "144px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        }
      >
        <img src={image} alt="" />
        <div className="text-center">
          <p className="color-[#333]"> {fullName}</p>
          <h5 className="font-semibold my-1">{designation}</h5>
          <p className="text-[#5C5C5C] text-xs	">{category?.category_name}</p>
        </div>
        <div className="card-bottom flex  justify-around mt-6  ">
          <button className={style.mentorsCardEditBtn} onClick={handleModal}>
            EDIT
          </button>
          <button
            onClick={handleDeleteMentor}
            className={style.mentorDeleteBtn}
          >
            DELETE
          </button>
        </div>
      </Card>
    </div>
  );
}
