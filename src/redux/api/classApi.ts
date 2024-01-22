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
      query: (data) => ({
        url: `/class/${data.id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.class, tagTypes.course],
    }),
  }),
});

export const { useAddClassesMutation, useGetClassesbyCourseIdQuery } = classApi;
