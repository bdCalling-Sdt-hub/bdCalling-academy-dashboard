/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { baseApi } from "./baseApi";
import { tagTypes } from "../../types/tags";

const CourseApi = baseApi.injectEndpoints({
  endpoints: (builder: any) => ({
    addCourse: builder.mutation({
      query: (courseData: any) => ({
        url: "/course",
        method: "POST",
        body: courseData,
      }),
      invalidatesTags: [tagTypes.course],
    }),
    getallCourse: builder.query({
      query: (params: any) => ({
        url: "/course",
        method: "GET",
        params: params,
      }),
      providesTags: [tagTypes.course],
    }),
    getSingleCourse: builder.query({
      query: (id: number) => ({
        url: `/course/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.course],
    }),
    getbuyingCourse: builder.query({
      query: () => ({
        url: `/students/buy/courses`,
        method: "GET",
      }),
      providesTags: [tagTypes.course],
    }),
    updateCourse: builder.mutation({
      query: (data: any) => ({
        url: `/course/${data.id}`,
        method: "POST",
        params: { _method: "PUT" },
        body: data?.body,
      }),
      invalidatesTags: [tagTypes.course],
    }),
    deleteCourse: builder.mutation({
      query: (id: number) => ({
        url: `/course/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.course],
    }),
  }),
});

export const {
  useAddCourseMutation,
  useGetallCourseQuery,
  useGetSingleCourseQuery,
  useUpdateCourseMutation,
  useDeleteCourseMutation,
  useGetbuyingCourseQuery,
} = CourseApi;
