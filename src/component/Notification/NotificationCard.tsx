/* eslint-disable @typescript-eslint/no-explicit-any */
import { CloseOutlined } from "@ant-design/icons";

export default function NotificationCard(props: any) {
  const { image, name, description, time } = props.notification;
  const handleDeleteNotification = () => {};
  return (
    <div className="flex justify-between bg-[#fff] mb-5 p-5 rounded-lg ">
      <div className="flex gap-x-2">
        <img
          src={image}
          alt=""
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />

        <div>
          <p>{name}</p>
          <p className="text-[#4E4E4E] py-1">{description}</p>
          <p className="text-[#4E4E4E]">{time}</p>
        </div>
      </div>
      <button
        onClick={handleDeleteNotification}
        className={`h-[28px] w-[28px] border flex justify-center items-center active:bg-customPrimary active:border-0  border-[#A7A7A7] shadow-md cursor-pointer`}
      >
        <CloseOutlined style={{ color: "#A7A7A7" }} />
      </button>
    </div>
  );
}
