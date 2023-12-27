/* eslint-disable @typescript-eslint/no-explicit-any */
import { getuserFromLocalStroage } from "../utils/localStroage";

export const storeUserInfo = (key: string, value: any) => {
  console.log(key, value);
  localStorage.setItem(key, JSON.stringify(value));
};
export const getuser = (key: string) => {
  const getuserInfo = getuserFromLocalStroage(key);
  if (!getuserInfo) return {};
  const user = JSON.parse(getuserInfo);
  return user;
};
export const isLoggedIn = (): boolean => {
  const user = getuserFromLocalStroage("user");
  return !!user;
};
export const removeUserInfo = (key: string): void => {
  localStorage.removeItem(key);
};
