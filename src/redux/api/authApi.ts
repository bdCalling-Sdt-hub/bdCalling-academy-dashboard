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
    updateprofile: builder.mutation({
      query: (data: any) => ({
        url: `/profile/edit/${data?.id}`,
        method: "PUT",
        params: { _method: "PUT" },
        body: data.body,
      }),
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
  useUpdateprofileMutation,
  useDeleteProfileMutation,
} = authApi;
