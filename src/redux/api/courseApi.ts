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
      query: () => ({
        url: "/course",
        method: "GET",
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
    updateCourse: builder.mutation({
      query: (data: any) => ({
        url: `/course/${data.id}`,
        method: "POST",
        params: { _method: "PUT" },
        body: data?.body,
      }),
      providesTags: [tagTypes.course],
    }),
    deleteCourse: builder.mutation({
      query: (id: number) => ({
        url: `/course/${id}`,
        method: "DELETE",
      }),
      providesTags: [tagTypes.course],
    }),
  }),
});

export const {
  useAddCourseMutation,
  useGetallCourseQuery,
  useGetSingleCourseQuery,
  useUpdateCourseMutation,
  useDeleteCourseMutation,
} = CourseApi;
