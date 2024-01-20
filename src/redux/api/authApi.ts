/* eslint-disable @typescript-eslint/no-explicit-any */

import { baseApi } from "./baseApi";
import { tagTypes } from "../../types/tags";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder: any) => ({
    register: builder.mutation({
      query: (data: any) => ({
        url: "/register",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    login: builder.mutation({
      query: (userInfo: any) => ({
        url: "/login",
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    getmyprofile: builder.query({
      query: () => ({
        url: "/profile",
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
  }),
});

export const { useLoginMutation, useGetmyprofileQuery, useRegisterMutation } =
  authApi;
