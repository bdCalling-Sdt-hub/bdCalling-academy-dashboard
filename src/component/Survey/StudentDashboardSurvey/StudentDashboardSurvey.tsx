import { Col, Row } from "antd";

import videoicon from "../../assets/studentDashboard/video.png";
import cashIcon from "../../assets/studentDashboard/cash.png";
export default function StudentDashboardSurvey() {
  const fakeData = {
    amount: "15000",
    duration: "6 months",
    totalCourse: "05",
    courseCompleted: "05",
  };

  return (
    <div>
      <Row gutter={16}>
        <Col sm={24} lg={6} xl={6}>
          <div
            className="p-4 rounded-lg relative h-[170px] flex justify-center items-center"
            style={{
              backgroundColor: "#FFFFFF",
              boxShadow: "#000000",
            }}
          >
            <div className="absolute bottom-[100px]   left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 rounded-[50%] bg-[white]">
              <img src={videoicon} alt="" />
            </div>
            <div className="text-center">
              <h1 className="text-xl font-semibold">Total Course</h1>
              <h1 className="text-4xl font-semibold text-[#2492EB] mt-1">
                {fakeData.totalCourse}
              </h1>
            </div>
          </div>
        </Col>
        <Col sm={24} lg={6} xl={6}>
          <div
            className="p-4 rounded-lg relative h-[170px] flex justify-center items-center"
            style={{
              backgroundColor: "#FFFFFF",
              boxShadow: "#000000",
            }}
          >
            <div className="absolute bottom-[100px]   left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 rounded-[50%] bg-[white]">
              <img src={videoicon} alt="" />
            </div>
            <div className="text-center">
              <h1 className="text-xl font-semibold">Complete Course</h1>
              <h1 className="text-4xl font-semibold text-[#2492EB] mt-1">
                {" "}
                {fakeData.courseCompleted}
              </h1>
            </div>
          </div>
        </Col>
        <Col sm={24} lg={6} xl={6}>
          <div
            className="p-4 rounded-lg relative h-[170px] flex justify-center items-center"
            style={{
              backgroundColor: "#FFFFFF",
              boxShadow: "#000000",
            }}
          >
            <div className="absolute bottom-[100px]   left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 rounded-[50%] bg-[white]">
              <img src={videoicon} alt="" />
            </div>
            <div className="text-center">
              <h1 className="text-xl font-semibold">Courses Duration</h1>
              <h1 className="text-4xl font-semibold text-[#2492EB] mt-1">
                {fakeData.duration}
              </h1>
            </div>
          </div>
        </Col>
        <Col sm={24} lg={6} xl={6}>
          <div
            className="p-4 rounded-lg relative h-[170px] flex justify-center items-center"
            style={{
              backgroundColor: "#FFFFFF",
              boxShadow: "#000000",
            }}
          >
            <div className="absolute bottom-[100px]   left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 rounded-[50%] bg-[white]">
              <img src={cashIcon} alt="" />
            </div>
            <div className="text-center">
              <h1 className="text-xl font-semibold">Pay Total Amount</h1>
              <h1 className="text-4xl font-semibold text-[#2492EB] mt-1">
                BDT {fakeData.amount}
              </h1>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
