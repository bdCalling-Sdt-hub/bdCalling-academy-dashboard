/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table as AntTable, ConfigProvider } from "antd";
import { paginationThemes2 } from "../../../themes/Index";

const showTotal = (total: number, range: any) => (
  <div className="text-start">
    <span>
      Showing {range[0]}-{range[1]} of {total} Records.
    </span>
  </div>
);
export default function Table({
  page,
  total,
  loading,
  onTableChange,
  columns,
  data,
  needPagination,
  style,
  theme,
}: any) {
  const combinedTheme = {
    components: {
      ...theme,
      ...paginationThemes2,
    },
  };

  return (
    <ConfigProvider theme={combinedTheme}>
      <AntTable
        style={style}
        loading={loading}
        columns={columns}
        dataSource={data}
        pagination={
          needPagination && {
            pageSize: page,
            total: total,
            showTotal: showTotal,
          }
        }
        onChange={onTableChange}
      ></AntTable>
    </ConfigProvider>
  );
}
