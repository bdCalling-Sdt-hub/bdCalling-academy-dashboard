import { Col, Row } from "antd";
import studentsLogo from "../../../assets/dashboard-icon/student.svg";
import videoLogo from "../../../assets/dashboard-icon/video.svg";
import teacherLogo from "../../../assets/dashboard-icon/teacher.svg";
import cashLogo from "../../../assets/dashboard-icon/cash.svg";
import { MdOutlineShowChart } from "react-icons/md";

export default function DashboardSurvery() {
  const percantage = 10;
  return (
    <div>
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
                <p className="font-semibold">New Students</p>
                <h1
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "32px",
                    fontWeight: "600",
                    lineHeight: "48px",
                    color: "#2492EB",
                  }}
                >
                  5000
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-x-2 mt-10">
              <span className="text-customPrimary ">
                <MdOutlineShowChart />
              </span>
              <p className="">Higher Then Last Month</p>
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
              <img src={videoLogo} alt="" />
              <div className="text-end">
                <p className="font-semibold">Total Courses</p>
                <h1
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "32px",
                    fontWeight: "600",
                    lineHeight: "48px",
                    color: "#2492EB",
                  }}
                >
                  7
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-x-2 mt-10">
              <span className="text-customPrimary ">
                <MdOutlineShowChart />
              </span>
              <p className="tracking-wide">Higher Then Last Month</p>
            </div>
          </div>
        </Col>
        <Col sm={24} lg={6} xl={6}>
          <div
            className="p-4 rounded-lg text-end "
            style={{
              backgroundColor: "#FFFFFF",
              boxShadow: "#000000",
              width: "372px",
            }}
          >
            <div className="flex justify-between">
              <img src={teacherLogo} alt="" />
              <div>
                <p className="font-semibold text-end">Total Teachers</p>
                <h1
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "32px",
                    fontWeight: "600",
                    lineHeight: "48px",
                    color: "#2492EB",
                  }}
                >
                  50
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-x-2 mt-10">
              <span className="text-customPrimary ">
                <MdOutlineShowChart />
              </span>
              <p className="tracking-wide">
                {percantage} Higher Then Last Month
              </p>
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
              <img src={cashLogo} alt="" />
              <div className="text-end">
                <p className="font-semibold ">Fees Collection</p>
                <h1
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "32px",
                    fontWeight: "600",
                    lineHeight: "48px",
                    color: "#2492EB",
                  }}
                >
                  BDT 5000,40
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-x-2 mt-10">
              <span className="text-customPrimary ">
                <MdOutlineShowChart />
              </span>
              <p className="tracking-wide">
                {percantage} Higher Then Last Month
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
