/* eslint-disable @typescript-eslint/no-explicit-any */
// import { ArrowDownOutlined } from "@ant-design/icons";

import dayjs from "dayjs";
import Table from "../../UI/Table/Table";

export default function ActivityCard({ wallet, loading }: any) {
  console.log("wallet", wallet);
  // const handleDownl  oad = (id: string) => {
  //   console.log(id);
  // };

  const column = [
    {
      title: "Serial",
      key: "index",
      dataIndex: "index",
    },
    {
      title: "Student Name",
      key: "studentName",
      dataIndex: "studentName",
    },
    {
      title: "GetWay",
      key: "getway",
      dataIndex: "getway",
    },
    {
      title: "Transaction ID",
      key: "transaction_id",
      dataIndex: "transaction_id",
    },
    {
      title: "Date",
      key: "date",
      dataIndex: "date",
    },
    {
      title: "Amount",
      key: "amount",
      dataIndex: "amount",
    },
  ];

  const data = wallet?.map((data: any, index: number) => {
    return {
      index: index + 1,
      studentName: data?.studentName,
      getway: data?.getway,
      transaction_id: data?.transaction_id,
      date: dayjs(data?.date).format("YYYY-MM-DD"),
      amount: data?.amount,
    };
  });
  const tablethemes = {
    Table: {
      lineHeight: 1,
      borderRadius: 8,
    },
  };
  return (
    // <div className="flex justify-between my-4 h-[44px]  pr-4">
    //   {/* <div
    //     onClick={() => handleDownload("id")}
    //     className="border  border-[#7A7A7A] p-[10px] cursor-pointer flex justify-center rounded h-[26px] w-[26px] text"
    //   >
    //     <ArrowDownOutlined style={{ color: "#2BA24C" }} />
    //   </div> */}

    //   <p>{getway}</p>
    //   <p>{transaction_id}</p>
    //   <p>{formatedData}</p>
    // </div>
    // <Row>
    //   <Col lg={6}>
    //     <p>{studentName}</p>
    //   </Col>
    //   <Col lg={6}>
    //     <p>{getway}</p>
    //   </Col>
    //   <Col lg={6}>
    //     <p>{transaction_id}</p>
    //   </Col>
    //   <Col lg={6}>
    //     <p>{formatedData}</p>
    //   </Col>
    //   <Col lg={6}>
    //     <p>BDT {amount}</p>
    //   </Col>
    // </Row>
    <div>
      <Table
        tableStyles={{ minHeight: "390px" }}
        style="bg-[white] "
        theme={tablethemes}
        page={6}
        link="/SUPER_ADMIN/mentors"
        needPagination={true}
        total={data?.length}
        columns={column}
        data={data}
        loading={loading}
      />
    </div>
  );
}
