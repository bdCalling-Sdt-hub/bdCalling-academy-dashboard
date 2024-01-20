/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { baseApi } from "./baseApi";
import { tagTypes } from "../../types/tags";

const mentorsApi = baseApi.injectEndpoints({
  endpoints: (builder: any) => ({
    getallmentors: builder.query({
      query: () => ({
        url: "/mentor",
        method: "GET",
      }),
      providesTags: [tagTypes.mentor],
    }),
    getsinglementor: builder.query({
      query: (id: number) => ({
        url: `/mentor/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.mentor],
    }),
    updatementor: builder.mutation({
      query: (data: any) => ({
        url: `/mentor/${data?.id}`,
        method: "PUT",
        params: { _method: "PUT" },
        body: data.body,
      }),
      invalidatesTags: [tagTypes.mentor],
    }),
  }),
});

export const {
  useUpdatementorMutation,
  useGetallmentorsQuery,
  useGetallmentorsMutation,
  useUpdatementorQuery,
} = mentorsApi;
