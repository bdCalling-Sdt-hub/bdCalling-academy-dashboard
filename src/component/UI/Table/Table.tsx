/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table as AntTable, ConfigProvider } from "antd";
import { paginationThemes2 } from "../../../themes/Index";

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
  theme,
}: any) {
  const handleSeeAll = (data: any) => {
    console.log(data);
  };
  const combinedTheme = {
    components: {
      ...theme,
      ...paginationThemes2,
    },
  };

  return (
    <div
      style={{
        // backgroundColor: "#FFFFFF",
        boxShadow: "#000000",
      }}
    >
      <div className="flex justify-between mb-4 pt-4 px-4">
        <h1 className="text-lg font-semibold   ">{title ? title : ""}</h1>
        <button
          onClick={handleSeeAll}
          className="text-lg text-customPrimary font-semibold cursor-pointer  "
        >
          {seeAll ? seeAll : ""}
        </button>
      </div>
      <ConfigProvider theme={combinedTheme}>
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
      </ConfigProvider>
    </div>
  );
}
