/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pagination } from "antd";

export default function CustomPaginations({
  total,
  pageSize = 5,
  size,
  handleOnChange,
}: any) {
  return (
    <div>
      <Pagination
        defaultPageSize={10}
        size={size}
        defaultCurrent={1}
        // page size means how much data we need to show per pagination and how much page size we need to show per page like 1,2,3,4,
        pageSize={pageSize}
        total={total}
        onChange={handleOnChange}
      />
    </div>
  );
}
