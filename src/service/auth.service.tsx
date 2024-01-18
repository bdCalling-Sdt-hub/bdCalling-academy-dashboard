/* eslint-disable @typescript-eslint/no-explicit-any */
import Cookies from "universal-cookie";

export const storeUserInfo = (key: string, value: any) => {
  console.log(value);
  const data = {
    userName: value?.userName,
    email: value?.email,
    userType: value?.userType,
  };
  console.log(data);
  const cookie = new Cookies();
  cookie.set(key, data);
};
export const storeToken = (key: string, value: any) => {
  const cookie = new Cookies();
  cookie.set(key, JSON.stringify(value));
};
export const getuserInfo = (key: string) => {
  const cookie = new Cookies();
  const data = cookie.get(key);
  return data ? data : {};
};
export const getToken = (key: string) => {
  const cookie = new Cookies();
  const data = cookie.get(key);
  return data ? data : null;
};
export const isLoggedIn = (key: string): boolean => {
  const cookie = new Cookies();
  const user = cookie.get(key);
  return !!user;
};
export const removeUserInfo = (key: string): void => {
  const cookie = new Cookies();
  cookie.remove(key);
};
