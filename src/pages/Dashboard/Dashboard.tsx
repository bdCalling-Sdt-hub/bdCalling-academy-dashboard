/* eslint-disable @typescript-eslint/no-explicit-any */

import { Col, Row } from "antd";
import DashboardSurvery from "../../component/DashboardSurvey/DashboardSurvery";
import StudentEnrollmentChart from "../../component/Chart/surveyChart";
import Table from "../../component/UI/Table/Table";
import { BsThreeDotsVertical } from "react-icons/bs";
import person from "../../assets/table/person.svg";
import { FiEdit } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { paginationThemes } from "../../themes/Index";

export default function Dashboard() {
  const tablethemes = {
    components: {
      Table: {
        lineHeight: 1,
        borderRadius: 8,
      },
    },
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Department",
      dataIndex: "department",
    },

    {
      title: "Actions",
      render: function (data: any) {
        return (
          <div className="flex gap-x-2">
            <BsThreeDotsVertical
              className="cursor-pointer"
              onClick={() => console.log(data)}
            />
          </div>
        );
      },
    },
  ];
  const data = [
    {
      key: "1",
      name: (
        <div className="flex items-center gap-x-2">
          <img src={person} alt="" />
          <p>John Brown</p>
        </div>
      ),
      department: "ui ux designer",
    },
    {
      key: "2",
      name: (
        <div className="flex items-center gap-x-2">
          <img src={person} alt="" />
          <p>John Brown</p>
        </div>
      ),
      department: "ui ux designer",
    },
    {
      key: "3",
      name: (
        <div className="flex items-center gap-x-2">
          <img src={person} alt="" />
          <p>John Brown</p>
        </div>
      ),
      department: "ui ux designer",
    },

    {
      key: "6",
      name: (
        <div className="flex items-center gap-x-2">
          <img src={person} alt="" />
          <p>John Brown</p>
        </div>
      ),
      department: "ui ux designer",
    },
    {
      key: "7",
      name: (
        <div className="flex items-center gap-x-2">
          <img src={person} alt="" />
          <p>John Brown</p>
        </div>
      ),
      department: "ui ux designer",
    },
  ];
  const columns2 = [
    {
      title: "#sl",
      dataIndex: "img",
    },
    {
      title: "Student Name",
      dataIndex: "studentName",
    },

    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Admission Date",
      dataIndex: "admissionDate",
    },
    {
      title: "Actions",
      render: function (data: any) {
        return (
          <div className="flex gap-x-2">
            <FiEdit
              className="cursor-pointer text-customPrimary"
              onClick={() => console.log(data)}
            />
            <RxCross1
              className="cursor-pointer "
              onClick={() => console.log(data)}
            />
          </div>
        );
      },
    },
  ];
  const data2 = [
    {
      key: "1",
      img: (
        <>
          <img src={person} alt="" />
        </>
      ),
      studentName: "John Brown",
      phone: "018888888",
      address: "dhaka,bangladesh",
      department: "ui ux designer",
      admissionDate: "12-08-2023",
    },
    {
      key: "1",
      img: (
        <>
          <img src={person} alt="" />
        </>
      ),
      studentName: "John Brown",
      phone: "018888888",
      address: "dhaka,bangladesh",
      department: "ui ux designer",
      admissionDate: "12-08-2023",
    },
    {
      key: "1",
      img: (
        <>
          <img src={person} alt="" />
        </>
      ),
      studentName: "John Brown",
      phone: "018888888",
      address: "dhaka,bangladesh",
      department: "ui ux designer",
      admissionDate: "12-08-2023",
    },
    {
      key: "1",
      img: (
        <>
          <img src={person} alt="" />
        </>
      ),
      studentName: "John Brown",
      phone: "018888888",
      address: "dhaka,bangladesh",
      department: "ui ux designer",
      admissionDate: "12-08-2023",
    },
    {
      key: "1",
      img: (
        <>
          <img src={person} alt="" />
        </>
      ),
      studentName: "John Brown",
      phone: "018888888",
      address: "dhaka,bangladesh",
      department: "ui ux designer",
      admissionDate: "12-08-2023",
    },
    {
      key: "1",
      img: (
        <>
          <img src={person} alt="" />
        </>
      ),
      studentName: "John Brown",
      phone: "018888888",
      address: "dhaka,bangladesh",
      department: "ui ux designer",
      admissionDate: "12-08-2023",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6 ">Overview</h1>

      <div>
        <DashboardSurvery />
      </div>
      <div className="mt-6">
        <Row gutter={16}>
          <Col lg={14}>
            <div>
              <StudentEnrollmentChart />
            </div>
          </Col>
          <Col lg={10}>
            <Table
              theme={tablethemes}
              title="Mentors List"
              page={5}
              seeAll="seeAll"
              needPagination={false}
              total={data.length}
              columns={columns}
              data={data}
              loading={false}
            />
          </Col>
        </Row>
      </div>
      <div className="mt-6">
        <Row>
          <Col lg={24}>
            <Table
              theme={paginationThemes}
              title="Student List"
              seeAll="seeAll"
              loading={false}
              data={data2}
              columns={columns2}
              page={6}
              total={data2.length}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}
