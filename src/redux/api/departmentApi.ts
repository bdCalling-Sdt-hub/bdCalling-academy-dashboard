/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { baseApi } from "./baseApi";
import { tagTypes } from "../features/tags";

const departmentApi = baseApi.injectEndpoints({
  endpoints: (builder: any) => ({
    addDepartment: builder.mutation({
      query: (data: any) => ({
        url: "/department",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.department],
    }),
    getallDepartments: builder.query({
      query: () => ({
        url: "/department",
        method: "GET",
      }),
      providesTags: [tagTypes.department],
    }),
    getsingleDepartment: builder.query({
      query: (id: number) => ({
        url: `/department/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.department],
    }),
    updateDepartment: builder.mutation({
      query: (data: any) => ({
        url: `/department/${data?.id}`,
        method: "PUT",
        params: { _method: "PUT" },
        body: data.body,
      }),
      invalidatesTags: [tagTypes.department],
    }),
  }),
});

export const {
  useAddDepartmentMutation,
  useGetallDepartmentsQuery,
  useGetsingleDepartmentMutation,
  useUpdateDepartmentMutation,
} = departmentApi;
