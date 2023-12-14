/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table as AntTable } from "antd";

export default function Table({
  page,
  total,
  title,
  loading,
  onTableChange,
  columns,
  data,
  needPagination,
  seeAll,
}: any) {
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        boxShadow: "#000000",
      }}
    >
      <div className="flex justify-between mb-4">
        <h1 className="text-lg font-semibold   ">{title ? title : ""}</h1>
        <h1 className="text-lg text-customPrimary font-semibold cursor-pointer  ">
          {seeAll ? seeAll : ""}
        </h1>
      </div>
      <AntTable
        loading={loading}
        columns={columns}
        dataSource={data}
        pagination={
          needPagination && {
            pageSize: page,
            total: total,
          }
        }
        onChange={onTableChange}
      ></AntTable>
    </div>
  );
}
