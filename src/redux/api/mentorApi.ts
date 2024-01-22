/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { baseApi } from "./baseApi";
import { tagTypes } from "../../types/tags";

const mentorsApi = baseApi.injectEndpoints({
  endpoints: (builder: any) => ({
    getallmentors: builder.query({
      query: () => ({
        url: "/mentors/all/",
        method: "GET",
      }),
      providesTags: [tagTypes.mentor, tagTypes.user],
    }),
    getsinglementor: builder.query({
      query: (id: number) => ({
        url: `/mentors/all/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.mentor, tagTypes.user],
    }),
    updatementor: builder.mutation({
      query: ({ id, data }: any) => ({
        url: `/mentor/${id}`,
        method: "PUT",
        params: { _method: "PUT" },
        body: data,
      }),
      invalidatesTags: [tagTypes.mentor, tagTypes.user],
    }),
  }),
});

export const {
  useUpdatementorMutation,
  useGetallmentorsQuery,
  useGetallmentorsMutation,
  useUpdatementorQuery,
} = mentorsApi;
