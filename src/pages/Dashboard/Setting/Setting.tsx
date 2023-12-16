import { RightOutlined } from "@ant-design/icons";
import { Switch } from "antd";
import { Link } from "react-router-dom";

export default function Setting() {
  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
  return (
    <div className="h-screen">
      <div className="flex bg-[#fff] justify-between p-4 rounded ">
        <p className="text-[#333] text-lg">Notification</p>
        <Switch defaultChecked onChange={onChange} />
      </div>
      <div className="flex bg-[#fff] my-[20px] justify-between p-4 rounded ">
        <p className="text-[#333] text-lg">Change Password</p>
        <RightOutlined style={{ fontSize: "18px", cursor: "pointer" }} />
      </div>
      <div className="flex bg-[#fff] justify-between p-4 rounded ">
        <p className="text-[#333] text-lg">Login Activity</p>
        <Link to={"/setting/login-activity"}>
          <RightOutlined style={{ fontSize: "18px", cursor: "pointer" }} />
        </Link>
      </div>
    </div>
  );
}
