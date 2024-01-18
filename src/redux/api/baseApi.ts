import { createApi } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "../features/tags";
import { axiosBaseQuery } from "../../helper/config/axiosBaseQuery";
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: axiosBaseQuery({
    baseUrl: "http://192.168.10.13:8000/api",
    // credentials: "include",
  }),
  tagTypes: tagTypesList,

  endpoints: () => ({}),
});
