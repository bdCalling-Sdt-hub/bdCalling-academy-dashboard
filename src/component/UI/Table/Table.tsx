/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table as AntTable, ConfigProvider } from "antd";
import { paginationThemes2 } from "../../../themes/Index";
import { useNavigate } from "react-router-dom";

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
  style,
  link,
}: any) {
  const navigate = useNavigate();
  const handleSeeAll = () => {
    navigate(link);
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
      <div
        className={`flex justify-between  items-center py-4 rounded   px-4 ${style}`}
      >
        <h1 className="text-lg font-semibold   ">{title}</h1>
        <button
          onClick={handleSeeAll}
          className="text-lg text-customPrimary  font-semibold cursor-pointer "
        >
          {seeAll}
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
