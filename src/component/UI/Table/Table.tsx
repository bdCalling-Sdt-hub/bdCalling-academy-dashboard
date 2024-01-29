/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table as AntTable, ConfigProvider } from "antd";
import { paginationThemes2 } from "../../../themes/Index";
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
          }
        }
        onChange={onTableChange}
      ></AntTable>
    </ConfigProvider>
  );
}
