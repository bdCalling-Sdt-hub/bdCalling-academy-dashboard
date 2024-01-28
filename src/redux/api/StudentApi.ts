/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { baseApi } from "./baseApi";
import { tagTypes } from "../../types/tags";

const studentApi = baseApi.injectEndpoints({
  endpoints: (builder: any) => ({
    getAllStudent: builder.query({
      query: () => ({
        url: "/students/all",
        method: "GET",
      }),
      providesTags: [tagTypes.user, tagTypes.student],
    }),
    getSingleStudent: builder.query({
      query: (id: number) => ({
        url: `/students/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.student, tagTypes.user],
    }),
    getstudentsoverviewChart: builder.query({
      query: () => ({
        url: `/students/chart/data`,
        method: "GET",
      }),
      providesTags: [tagTypes.student, tagTypes.user],
    }),
    approveStudent: builder.query({
      query: (id: any) => ({
        url: `/account/approve/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.student, tagTypes.user],
    }),
    disapproveStudent: builder.query({
      query: (id: number) => ({
        url: `/account/unapprove/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.student, tagTypes.user],
    }),
  }),
});

export const {
  useGetAllStudentQuery,
  useGetSingleStudentQuery,
  useApproveStudentQuery,
  useDisapproveStudentQuery,
  useGetstudentsoverviewChartQuery,
} = studentApi;
