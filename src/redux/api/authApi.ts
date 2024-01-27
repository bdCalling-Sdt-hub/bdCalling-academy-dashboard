/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { baseApi } from "./baseApi";
import { tagTypes } from "../../types/tags";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder: any) => ({
    register: builder.mutation({
      query: ({ body }: any) => ({
        url: "/register",
        method: "POST",
        body: body,
      }),
      invalidatesTags: [tagTypes.user, tagTypes.mentor, tagTypes.student],
    }),
    login: builder.mutation({
      query: (userInfo: any) => ({
        url: "/login",
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: [tagTypes.user, tagTypes.mentor],
    }),
    getmyprofile: builder.query({
      query: () => ({
        url: "/profile",
        method: "GET",
      }),
      providesTags: [tagTypes.user, tagTypes.mentor],
    }),
    updateprofile: builder.mutation({
      query: (data: any) => ({
        url: `/profile/edit/${data?.id}`,
        method: "POST",
        params: { _method: "PUT" },
        body: data.body,
      }),
      invalidatesTags: [tagTypes.user, tagTypes.mentor],
    }),
    deleteProfile: builder.mutation({
      query: (id: number) => ({
        url: `/profile/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.user, tagTypes.mentor],
    }),
    forgetPassword: builder.mutation({
      query: (email: string) => ({
        url: "/forget-pass",
        method: "POST",
        body: email,
      }),
    }),
    resetPassword: builder.mutation({
      query: (data: any) => ({
        url: "/reset-pass",
        method: "POST",
        body: data,
      }),
    }),
    updatePassword: builder.mutation({
      query: (data: any) => ({
        url: "/update-pass",
        method: "POST",
        body: data,
      }),
    }),
    verifyOtp: builder.mutation({
      query: (data: any) => ({
        url: "/verified-checker",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useGetmyprofileQuery,
  useRegisterMutation,
  useUpdateprofileMutation,
  useDeleteProfileMutation,
  useForgetPasswordMutation,
  useResetPasswordMutation,
  useVerifyOtpMutation,
  useUpdatePasswordMutation,
} = authApi;
