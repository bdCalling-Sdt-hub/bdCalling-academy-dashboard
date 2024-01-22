import { getToken } from "./../../service/auth.service";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import axios, { AxiosError } from "axios";

const axiosInstance = axios.create();
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
// Add an interceptor to handle errors
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const err = error as AxiosError;
    const errorResponse = {
      status: err?.response?.status,
      // @ts-ignore
      message: err.response?.data?.error || err.message,
    };
    console.log(errorResponse);
    return Promise.reject(errorResponse);
  }
);
export default axiosInstance;
