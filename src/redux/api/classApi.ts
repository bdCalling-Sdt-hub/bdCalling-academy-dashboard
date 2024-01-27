/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { baseApi } from "./baseApi";
import { tagTypes } from "../../types/tags";

const classApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addClasses: builder.mutation({
      query: (data) => ({
        url: "/class",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.class],
    }),
    getClassesbyCourseId: builder.query({
      query: (id: number) => ({
        url: `/class/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.class, tagTypes.course],
    }),
    getAllClassModulesbyClassId: builder.query({
      query: (id: number) => ({
        url: `/class-single/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.class, tagTypes.course],
    }),
    updateClassesById: builder.mutation({
      query: (data: any) => ({
        url: `/class/${data?.id}`,
        method: "POST",
        params: { _method: "PUT" },
        body: data?.body,
      }),
      invalidatesTags: [tagTypes.class, tagTypes.course],
    }),
  }),
});

export const {
  useAddClassesMutation,
  useGetClassesbyCourseIdQuery,
  useGetAllClassModulesbyClassIdQuery,
  useUpdateClassesByIdMutation,
} = classApi;
