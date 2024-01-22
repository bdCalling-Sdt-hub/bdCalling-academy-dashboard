/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { baseApi } from "./baseApi";
import { tagTypes } from "../../types/tags";

const departmentApi = baseApi.injectEndpoints({
  endpoints: (builder: any) => ({
    addCategory: builder.mutation({
      query: (data: any) => ({
        url: "/category",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.category],
    }),
    getallCategories: builder.query({
      query: () => ({
        url: "/category",
        method: "GET",
      }),
      providesTags: [tagTypes.category],
    }),
    getsingleCategory: builder.query({
      query: (id: number) => ({
        url: `/category/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.category],
    }),
    updateCategory: builder.mutation({
      query: (data: any) => ({
        url: `/category/${data?.id}`,
        method: "PUT",
        params: { _method: "PUT" },
        body: data.body,
      }),
      invalidatesTags: [tagTypes.category],
    }),
  }),
});

export const {
  useAddCategoryMutation,
  useGetallCategoriesQuery,
  useGetsingleCategoryQuery,
  useUpdateCategoryMutation,
} = departmentApi;
