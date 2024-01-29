/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { baseApi } from "./baseApi";
import { tagTypes } from "../../types/tags";

const classScheduleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addClassSchedule: builder.mutation({
      query: (data) => ({
        url: "/schedules",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.classSchedule],
    }),
    getallClassSchedule: builder.mutation({
      query: (data: any) => ({
        url: `/schedules/all/admin`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.classSchedule],
    }),
    showclassScheduleForMentor: builder.mutation({
      query: (data: any) => ({
        url: `/schedules/mentor`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.classSchedule],
    }),
    // showclassScheduleForStudents: builder.mutation({
    //   query: () => ({
    //     url: `/schedules/mentor`,
    //     method: "GET",
    //   }),
    //   invalidatesTags: [tagTypes.classSchedule],
    // }),
    showClassScheduleForStudents: builder.mutation({
      query: (data: any) => ({
        url: `/schedules/fetch/student`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.classSchedule],
    }),
    deleteClassScheduleById: builder.mutation({
      query: (id: number) => ({
        url: `/schedules/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.classSchedule],
    }),
  }),
});

export const {
  useAddClassScheduleMutation,
  useGetallClassScheduleMutation,
  useShowclassScheduleForMentorMutation,
  useShowClassScheduleForStudentsMutation,
  useDeleteClassScheduleByIdMutation,
} = classScheduleApi;
