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
    getallClassSchedule: builder.query({
      query: () => ({
        url: `/schedules/all/admin`,
        method: "GET",
      }),
      providesTags: [tagTypes.classSchedule],
    }),
    showclassScheduleForMentors: builder.query({
      query: () => ({
        url: `/schedules/mentor`,
        method: "GET",
      }),
      providesTags: [tagTypes.classSchedule],
    }),
    showclassScheduleForStudents: builder.query({
      query: () => ({
        url: `schedules/fetch/student`,
        method: "GET",
      }),
      providesTags: [tagTypes.classSchedule],
    }),
    deleteClassScheduleById: builder.mutation({
      query: (id: number) => ({
        url: `/schedules/${id}`,
        method: "DELTE",
      }),
      invalidatesTags: [tagTypes.classSchedule],
    }),
  }),
});

export const {
  useAddClassScheduleMutation,
  useGetallClassScheduleQuery,
  useShowclassScheduleForMentorsQuery,
  useShowclassScheduleForStudentsQuery,
  useDeleteClassScheduleByIdMutation,
} = classScheduleApi;
