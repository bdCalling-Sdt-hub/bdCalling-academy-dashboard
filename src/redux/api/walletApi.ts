/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { baseApi } from "./baseApi";
import { tagTypes } from "../../types/tags";

const walletApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllWalletIncomeInformation: builder.query({
      query: () => ({
        url: "/incomes",
        method: "GET",
      }),
      providesTags: [tagTypes.wallet],
    }),
    getAllWalletActivityData: builder.query({
      query: () => ({
        url: `/orders/`,
        method: "GET",
      }),
      providesTags: [tagTypes.wallet],
    }),
    getAllIncomeInChart: builder.query({
      query: (params: any) => ({
        url: `/incomes/chart`,
        method: "GET",
        params: params,
      }),
      providesTags: [tagTypes.wallet],
    }),
  }),
});

export const {
  useGetAllWalletIncomeInformationQuery,
  useGetAllWalletActivityDataQuery,
  useGetAllIncomeInChartQuery,
} = walletApi;
