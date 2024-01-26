/* eslint-disable @typescript-eslint/no-explicit-any */
export const storeUserInfo = (key: string, value: any) => {
  localStorage.setItem(key, value);
};
export const storeToken = (key: string, value: any) => {
  localStorage.setItem(key, value);
};
export const getuserInfo = (key: string) => {
  return localStorage.getItem(key) ?? null;
};
export const getToken = () => {
  return localStorage.user ?? {};
};
export const isLoggedIn = (): boolean => {
  const user = getToken();
  return !!user;
};
export const removeFromStroage = (key: string): void => {
  localStorage.removeItem(key);
};
