/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { message } from "antd";
const errorResponse = (error: any) => {
  return message.error(error?.data?.error);
};

export default errorResponse;
