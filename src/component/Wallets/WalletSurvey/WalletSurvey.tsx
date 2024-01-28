import { DollarOutlined } from "@ant-design/icons";
import { FaChartLine } from "react-icons/fa6";
import { TbChartInfographic } from "react-icons/tb";
import { TbChartHistogram } from "react-icons/tb";

import { Col, Row } from "antd";
import { useGetAllWalletIncomeInformationQuery } from "../../../redux/api/walletApi";

export default function WalletSurvey() {
  const { data } = useGetAllWalletIncomeInformationQuery(undefined);
  return (
    <div>
      <Row gutter={16}>
        <Col sm={24} lg={6} xl={6} className="mb-4">
          <div
            className="p-4 rounded-lg h-[172px]  my-auto"
            style={{
              backgroundColor: "#FFFFFF",
              boxShadow: "#000000",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div>
              <div className="flex justify-between ">
                <div className="flex  justify-between  items-center gap-x-4 ">
                  <div className="w-[30px] h-[30px]  bg-customPrimary flex  justify-center  rounded">
                    <DollarOutlined style={{ color: "white" }} />
                  </div>
                  <p className="text-[#858585]">Total 1 Day Income</p>
                </div>
              </div>
              <div className="my-2 flex justify-between ">
                <h1 className="text-[36px] font-semibold">
                  <span className="text-customPrimary me-2">BDT</span>
                  {data?.today_income}
                </h1>
                <div className="">
                  <div className=" relative bottom-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="73"
                      height="20"
                      viewBox="0 0 73 20"
                      fill="none"
                    >
                      <path
                        d="M1 19C1 19 3.51994 12.25 5.10584 12.25C6.69173 12.25 7.15765 5.5 9.28896 5.5C11.4203 5.5 14.8977 13.7895 16.0622 13.7895C17.2268 13.7895 21.4797 9.52632 23.0073 9.52632C24.5349 9.52632 28.4972 19 30.3949 19C32.2926 19 38.7656 8.57895 40.3439 8.57895C41.9223 8.57895 43.6279 13.7895 45.5781 13.7895C47.5284 13.7895 50.6878 3.84211 52.5409 3.84211C54.394 3.84211 59.7412 19 61.1465 19C62.5518 19 66.5732 10.4737 66.5732 10.4737L70.1222 6.68421L72 1"
                        stroke="#2492EB"
                        stroke-width="1.56"
                      />
                    </svg>
                  </div>
                  {/* <div className="text-customPrimary flex gap-x-2">
                    <p className="text-customPrimary">+10%</p>
                    <ArrowUpOutlined />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col sm={24} lg={6} xl={6} className="mb-4">
          <div
            className="p-4 rounded-lg h-[172px]  my-auto"
            style={{
              backgroundColor: "#FFFFFF",
              boxShadow: "#000000",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div>
              <div className="flex justify-between ">
                <div className="flex  justify-between  items-center gap-x-4 ">
                  <div className="w-[30px] h-[30px]  bg-[#2BA24C] flex  justify-center items-center rounded">
                    <FaChartLine style={{ color: "white" }} />
                  </div>
                  <p className="text-[#858585]">This Month</p>
                </div>
              </div>
              <div className="my-2 flex justify-between ">
                <h1 className="text-[36px] font-semibold">
                  <span className="text-customPrimary me-2">BDT</span>
                  {data?.this_month_income}
                </h1>
                <div className="">
                  <div className=" relative bottom-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="73"
                      height="20"
                      viewBox="0 0 73 20"
                      fill="none"
                    >
                      <path
                        d="M1 19C1 19 3.51994 12.25 5.10584 12.25C6.69173 12.25 7.15765 5.5 9.28896 5.5C11.4203 5.5 14.8977 13.7895 16.0622 13.7895C17.2268 13.7895 21.4797 9.52632 23.0073 9.52632C24.5349 9.52632 28.4972 19 30.3949 19C32.2926 19 38.7656 8.57895 40.3439 8.57895C41.9223 8.57895 43.6279 13.7895 45.5781 13.7895C47.5284 13.7895 50.6878 3.84211 52.5409 3.84211C54.394 3.84211 59.7412 19 61.1465 19C62.5518 19 66.5732 10.4737 66.5732 10.4737L70.1222 6.68421L72 1"
                        stroke="#2BA24C"
                        stroke-width="1.56"
                      />
                    </svg>
                  </div>
                  {/* <div className="text-[#2BA24C] flex gap-x-2">
                    <p className="text-[#2BA24C]">+10%</p>
                    <ArrowUpOutlined />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col sm={24} lg={6} xl={6} className="mb-4">
          <div
            className="p-4 rounded-lg h-[172px]  my-auto"
            style={{
              backgroundColor: "#FFFFFF",
              boxShadow: "#000000",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div>
              <div className="flex justify-between ">
                <div className="flex  justify-between  items-center gap-x-4 ">
                  <div className="w-[30px] h-[30px]  bg-[#D7263D] flex  justify-center  items-center rounded">
                    <TbChartInfographic style={{ color: "white" }} />
                  </div>
                  <p className="text-[#858585]">Total 6 Months Income</p>
                </div>
              </div>
              <div className="my-2 flex justify-between ">
                <h1 className="text-[36px] font-semibold">
                  <span className="text-customPrimary me-2">BDT</span>
                  {data?.six_month_income}
                </h1>
                <div className="">
                  <div className=" relative bottom-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="73"
                      height="20"
                      viewBox="0 0 73 20"
                      fill="none"
                    >
                      <path
                        d="M1 19C1 19 3.51994 12.25 5.10584 12.25C6.69173 12.25 7.15765 5.5 9.28896 5.5C11.4203 5.5 14.8977 13.7895 16.0622 13.7895C17.2268 13.7895 21.4797 9.52632 23.0073 9.52632C24.5349 9.52632 28.4972 19 30.3949 19C32.2926 19 38.7656 8.57895 40.3439 8.57895C41.9223 8.57895 43.6279 13.7895 45.5781 13.7895C47.5284 13.7895 50.6878 3.84211 52.5409 3.84211C54.394 3.84211 59.7412 19 61.1465 19C62.5518 19 66.5732 10.4737 66.5732 10.4737L70.1222 6.68421L72 1"
                        stroke="#D7263D"
                        stroke-width="1.56"
                      />
                    </svg>
                  </div>
                  {/* <div className="text-[#D7263D] flex gap-x-2">
                    <p>+10%</p>
                    <ArrowUpOutlined />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col sm={24} lg={6} xl={6} className="mb-4">
          <div
            className="p-4 rounded-lg h-[172px]  my-auto"
            style={{
              backgroundColor: "#FFFFFF",
              boxShadow: "#000000",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div>
              <div className="flex justify-between ">
                <div className="flex  justify-between  items-center gap-x-4 ">
                  <div className="w-[30px] h-[30px]  bg-[#FFC60B] flex  justify-center  items-center rounded">
                    <TbChartHistogram style={{ color: "white" }} />
                  </div>
                  <p className="text-[#858585]">This Years</p>
                </div>
              </div>
              <div className="my-2 flex justify-between ">
                <h1 className="text-[36px] font-semibold">
                  <span className="text-customPrimary me-2">BDT</span>
                  {data?.running_year_income}
                </h1>
                <div className="">
                  <div className=" relative bottom-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="73"
                      height="20"
                      viewBox="0 0 73 20"
                      fill="none"
                    >
                      <path
                        d="M1 19C1 19 3.51994 12.25 5.10584 12.25C6.69173 12.25 7.15765 5.5 9.28896 5.5C11.4203 5.5 14.8977 13.7895 16.0622 13.7895C17.2268 13.7895 21.4797 9.52632 23.0073 9.52632C24.5349 9.52632 28.4972 19 30.3949 19C32.2926 19 38.7656 8.57895 40.3439 8.57895C41.9223 8.57895 43.6279 13.7895 45.5781 13.7895C47.5284 13.7895 50.6878 3.84211 52.5409 3.84211C54.394 3.84211 59.7412 19 61.1465 19C62.5518 19 66.5732 10.4737 66.5732 10.4737L70.1222 6.68421L72 1"
                        stroke="#FFC60B"
                        stroke-width="1.56"
                      />
                    </svg>
                  </div>
                  {/* <div className="text-[#FFC60B] flex gap-x-2">
                    <p>+10%</p>
                    <ArrowUpOutlined />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </Col>

        {/* <Col sm={24} lg={6} xl={6} className="mb-4">
          <div
            className="p-4 rounded-lg h-[172px]  my-auto"
            style={{
              backgroundColor: "#FFFFFF",
              boxShadow: "#000000",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div>
              <div className="flex justify-between ">
                <div className="flex  justify-between  items-center gap-x-4 ">
                  <div className="w-[30px] h-[30px]  bg-[#FFC60B] flex  justify-center  items-center rounded">
                    <DollarOutlined style={{ color: "white" }} />
                  </div>
                  <p className="text-[#858585]">Total Free Income</p>
                </div>
              </div>
              <div className="my-2 flex justify-between ">
                <h1 className="text-[36px] font-semibold">
                  <span className="text-customPrimary me-2">BDT</span>
                  120.12k
                </h1>
                <div className="">
                  <div className=" relative bottom-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="73"
                      height="20"
                      viewBox="0 0 73 20"
                      fill="none"
                    >
                      <path
                        d="M1 19C1 19 3.51994 12.25 5.10584 12.25C6.69173 12.25 7.15765 5.5 9.28896 5.5C11.4203 5.5 14.8977 13.7895 16.0622 13.7895C17.2268 13.7895 21.4797 9.52632 23.0073 9.52632C24.5349 9.52632 28.4972 19 30.3949 19C32.2926 19 38.7656 8.57895 40.3439 8.57895C41.9223 8.57895 43.6279 13.7895 45.5781 13.7895C47.5284 13.7895 50.6878 3.84211 52.5409 3.84211C54.394 3.84211 59.7412 19 61.1465 19C62.5518 19 66.5732 10.4737 66.5732 10.4737L70.1222 6.68421L72 1"
                        stroke="#FFC60B"
                        stroke-width="1.56"
                      />
                    </svg>
                  </div>
                  <div className="text-[#FFC60B] flex gap-x-2">
                    <p>+10%</p>
                    <ArrowUpOutlined />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col sm={24} lg={6} xl={6} className="mb-4">
          <div
            className="p-4 rounded-lg h-[172px]  my-auto"
            style={{
              backgroundColor: "#FFFFFF",
              boxShadow: "#000000",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div>
              <div className="flex justify-between ">
                <div className="flex  justify-between  items-center gap-x-4 ">
                  <div className="w-[30px] h-[30px]  bg-customPrimary flex  justify-center items-center  rounded">
                    <FaChartLine style={{ color: "white" }} />
                  </div>
                  <p className="text-[#858585]">Total Discounts</p>
                </div>
              </div>
              <div className="my-2 flex justify-between ">
                <h1 className="text-[36px] font-semibold">
                  <span className="text-customPrimary me-2">BDT</span>
                  120.12k
                </h1>
                <div className="">
                  <div className=" relative bottom-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="73"
                      height="20"
                      viewBox="0 0 73 20"
                      fill="none"
                    >
                      <path
                        d="M1 19C1 19 3.51994 12.25 5.10584 12.25C6.69173 12.25 7.15765 5.5 9.28896 5.5C11.4203 5.5 14.8977 13.7895 16.0622 13.7895C17.2268 13.7895 21.4797 9.52632 23.0073 9.52632C24.5349 9.52632 28.4972 19 30.3949 19C32.2926 19 38.7656 8.57895 40.3439 8.57895C41.9223 8.57895 43.6279 13.7895 45.5781 13.7895C47.5284 13.7895 50.6878 3.84211 52.5409 3.84211C54.394 3.84211 59.7412 19 61.1465 19C62.5518 19 66.5732 10.4737 66.5732 10.4737L70.1222 6.68421L72 1"
                        stroke="#2492EB"
                        stroke-width="1.56"
                      />
                    </svg>
                  </div>
                  <div className="text-customPrimary flex gap-x-2">
                    <p className="text-customPrimary">+10%</p>
                    <ArrowUpOutlined />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col sm={24} lg={6} xl={6} className="mb-4">
          <div
            className="p-4 rounded-lg h-[172px]  my-auto"
            style={{
              backgroundColor: "#FFFFFF",
              boxShadow: "#000000",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div>
              <div className="flex justify-between ">
                <div className="flex  justify-between  items-center gap-x-4 ">
                  <div className="w-[30px] h-[30px]  bg-[#2BA24C] flex  justify-center items-center rounded">
                    <TbChartInfographic style={{ color: "white" }} />
                  </div>
                  <p className="text-[#858585]">Total Discounts</p>
                </div>
              </div>
              <div className="my-2 flex justify-between ">
                <h1 className="text-[36px] font-semibold">
                  <span className="text-customPrimary me-2">BDT</span>
                  120.12k
                </h1>
                <div className="">
                  <div className=" relative bottom-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="73"
                      height="20"
                      viewBox="0 0 73 20"
                      fill="none"
                    >
                      <path
                        d="M1 19C1 19 3.51994 12.25 5.10584 12.25C6.69173 12.25 7.15765 5.5 9.28896 5.5C11.4203 5.5 14.8977 13.7895 16.0622 13.7895C17.2268 13.7895 21.4797 9.52632 23.0073 9.52632C24.5349 9.52632 28.4972 19 30.3949 19C32.2926 19 38.7656 8.57895 40.3439 8.57895C41.9223 8.57895 43.6279 13.7895 45.5781 13.7895C47.5284 13.7895 50.6878 3.84211 52.5409 3.84211C54.394 3.84211 59.7412 19 61.1465 19C62.5518 19 66.5732 10.4737 66.5732 10.4737L70.1222 6.68421L72 1"
                        stroke="#2BA24C"
                        stroke-width="1.56"
                      />
                    </svg>
                  </div>
                  <div className="text-[#2BA24C] flex gap-x-2">
                    <p className="text-[#2BA24C]">+10%</p>
                    <ArrowUpOutlined />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col sm={24} lg={6} xl={6} className="mb-4">
          <div
            className="p-4 rounded-lg h-[172px]  my-auto"
            style={{
              backgroundColor: "#FFFFFF",
              boxShadow: "#000000",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div>
              <div className="flex justify-between ">
                <div className="flex  justify-between  items-center gap-x-4 ">
                  <div className="w-[30px] h-[30px]  bg-[#D7263D] flex  justify-center  items-center rounded">
                    <DollarOutlined style={{ color: "white" }} />
                  </div>
                  <p className="text-[#858585]">Total Income</p>
                </div>
              </div>
              <div className="my-2 flex justify-between ">
                <h1 className="text-[36px] font-semibold">
                  <span className="text-customPrimary me-2">BDT</span>
                  120.12k
                </h1>
                <div className="">
                  <div className=" relative bottom-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="73"
                      height="20"
                      viewBox="0 0 73 20"
                      fill="none"
                    >
                      <path
                        d="M1 19C1 19 3.51994 12.25 5.10584 12.25C6.69173 12.25 7.15765 5.5 9.28896 5.5C11.4203 5.5 14.8977 13.7895 16.0622 13.7895C17.2268 13.7895 21.4797 9.52632 23.0073 9.52632C24.5349 9.52632 28.4972 19 30.3949 19C32.2926 19 38.7656 8.57895 40.3439 8.57895C41.9223 8.57895 43.6279 13.7895 45.5781 13.7895C47.5284 13.7895 50.6878 3.84211 52.5409 3.84211C54.394 3.84211 59.7412 19 61.1465 19C62.5518 19 66.5732 10.4737 66.5732 10.4737L70.1222 6.68421L72 1"
                        stroke="#D7263D"
                        stroke-width="1.56"
                      />
                    </svg>
                  </div>
                  <div className="text-[#D7263D] flex gap-x-2">
                    <p>+10%</p>
                    <ArrowUpOutlined />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col> */}
      </Row>
    </div>
  );
}
