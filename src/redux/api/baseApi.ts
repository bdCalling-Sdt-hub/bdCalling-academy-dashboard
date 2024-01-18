import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "../features/tags";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.10.13:8000/api",
    // credentials: "include",
  }),
  tagTypes: tagTypesList,

  endpoints: () => ({}),
});
