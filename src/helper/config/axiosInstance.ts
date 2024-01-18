import axios, { AxiosError } from "axios";
import Cookies from "universal-cookie";
const cookie = new Cookies();
const axiosInstance = axios.create();
axiosInstance.interceptors.request.use((config) => {
  const token = cookie.get("token");
  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }
  return config;
});
// Add an interceptor to handle errors
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const err = error as AxiosError;
    return Promise.reject({
      error: {
        status: err.response?.status,
        data: err.response?.data || err.message,
      },
    });
  }
);
export default axiosInstance;
