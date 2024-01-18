/* eslint-disable @typescript-eslint/no-explicit-any */

import { baseApi } from "../../api/baseApi";
import { tagTypes } from "../tags";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder: any) => ({
    login: builder.mutation({
      query: (userInfo: any) => ({
        url: "/login",
        method: "POST",
        data: userInfo,
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

export const { useLoginMutation } = authApi;
