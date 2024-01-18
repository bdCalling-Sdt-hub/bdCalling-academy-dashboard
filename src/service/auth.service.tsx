/* eslint-disable @typescript-eslint/no-explicit-any */
import Cookies from "universal-cookie";

export const storeUserInfo = (key: string, value: any) => {
  const cookie = new Cookies();
  cookie.set(key, value);
};
export const storeToken = (key: string, value: string) => {
  const cookie = new Cookies();
  cookie.set(key, value);
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
