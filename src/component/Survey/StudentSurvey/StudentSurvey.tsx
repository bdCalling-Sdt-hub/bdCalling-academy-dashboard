import { Col, Row } from "antd";

import studentsLogo from "../../../assets/students/student.svg";
import { MdOutlineShowChart } from "react-icons/md";
export default function StudentSurvey() {
  const percantage = 10;
  return (
    <Row gutter={16}>
      <Col sm={24} lg={6} xl={6}>
        <div
          className="p-4 rounded-lg"
          style={{
            backgroundColor: "#FFFFFF",
            boxShadow: "#000000",
          }}
        >
          <div className="flex justify-between">
            <img src={studentsLogo} alt="" />
            <div className="text-end">
              <p className="font-semibold">Total Students </p>
              <h1
                style={{
                  fontFamily: "Poppins",
                  fontSize: "32px",
                  fontWeight: "600",
                  lineHeight: "48px",
                  color: "#2492EB",
                }}
              >
                72k
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-x-2 mt-10">
            <span className="text-customPrimary ">
              <MdOutlineShowChart />
            </span>
            <p className="">{percantage} Higher Then Last Month</p>
          </div>
        </div>
      </Col>
      <Col sm={24} lg={6} xl={6}>
        <div
          className="p-4 rounded-lg"
          style={{
            backgroundColor: "#FFFFFF",
            boxShadow: "#000000",
          }}
        >
          <div className="flex justify-between">
            <img src={studentsLogo} alt="" />
            <div className="text-end">
              <p className="font-semibold">Running Students </p>
              <h1
                style={{
                  fontFamily: "Poppins",
                  fontSize: "32px",
                  fontWeight: "600",
                  lineHeight: "48px",
                  color: "#2492EB",
                }}
              >
                20k
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-x-2 mt-10">
            <span className="text-customPrimary ">
              <MdOutlineShowChart />
            </span>
            <p className="tracking-wide">{percantage} Higher Then Last Month</p>
          </div>
        </div>
      </Col>
      <Col sm={24} lg={6} xl={6}>
        <div
          className="p-4 rounded-lg"
          style={{
            backgroundColor: "#FFFFFF",
            boxShadow: "#000000",
          }}
        >
          <div className="flex justify-between">
            <img src={studentsLogo} alt="" />
            <div className="text-end">
              <p className="font-semibold">Pending Students </p>
              <h1
                style={{
                  fontFamily: "Poppins",
                  fontSize: "32px",
                  fontWeight: "600",
                  lineHeight: "48px",
                  color: "#2492EB",
                }}
              >
                5k
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-x-2 mt-10">
            <span className="text-customPrimary ">
              <MdOutlineShowChart />
            </span>
            <p className="tracking-wide">{percantage} Higher Then Last Month</p>
          </div>
        </div>
      </Col>
    </Row>
  );
}
