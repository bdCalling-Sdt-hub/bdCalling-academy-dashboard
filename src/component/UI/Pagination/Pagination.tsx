/* eslint-disable @typescript-eslint/no-explicit-any */
import { ConfigProvider, Pagination } from "antd";
import { paginationThemes2 } from "../../../themes/Index";

export default function CustomPaginations({
  total,
  pageSize = 5,
  size,
  handleOnChange,
}: any) {
  const themes = {
    components: {
      ...paginationThemes2,
    },
  };
  return (
    <div>
      <ConfigProvider theme={themes}>
        <Pagination
          defaultPageSize={10}
          size={size}
          defaultCurrent={1}
          //"The term 'page size' refers to the amount of data displayed per pagination, determining how many items are shown on each page, such as 1, 2, 3, 4, etc.
          pageSize={pageSize}
          total={total}
          onChange={handleOnChange}
        />
      </ConfigProvider>
    </div>
  );
}
