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
      invalidatesTags: [tagTypes.user, tagTypes.mentor],
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
    updateProfile: builder.mutation({
      query: ({ id, body }: any) => ({
        url: `/profile/edit/${id}`,
        method: "PUT",
        params: { _method: "PUT" },

        body: body,
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
  }),
});

export const {
  useLoginMutation,
  useGetmyprofileQuery,
  useRegisterMutation,
  useUpdateProfileMutation,
  useDeleteProfileMutation,
} = authApi;
