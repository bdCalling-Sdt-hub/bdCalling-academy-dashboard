/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { baseApi } from "./baseApi";
import { tagTypes } from "../../types/tags";

const EventsApi = baseApi.injectEndpoints({
  endpoints: (builder: any) => ({
    addEvent: builder.mutation({
      query: (courseData: any) => ({
        url: "/events",
        method: "POST",
        body: courseData,
      }),
      invalidatesTags: [tagTypes.event],
    }),
    getAllEvents: builder.query({
      query: (params: any) => ({
        url: "/events",
        method: "GET",
        params: params,
      }),
      providesTags: [tagTypes.event],
    }),
    getSingleEvents: builder.query({
      query: (id: number) => ({
        url: `/events/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.event],
    }),

    updateEvents: builder.mutation({
      query: (data: any) => ({
        url: `/events/${data.id}`,
        method: "POST",
        params: { _method: "PUT" },
        body: data?.body,
      }),
      invalidatesTags: [tagTypes.event],
    }),
    deleteEvent: builder.mutation({
      query: (id: number) => ({
        url: `/events/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.event],
    }),
  }),
});

export const {
  useAddEventMutation,
  useGetAllEventsQuery,
  useGetSingleEventsQuery,
  useUpdateEventsMutation,
  useDeleteEventMutation,
} = EventsApi;
