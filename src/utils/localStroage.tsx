/* eslint-disable @typescript-eslint/no-explicit-any */
export const setLocalStroage = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};
export const getuserFromLocalStroage = (key: string) => {
  if (!key) {
    return null;
  }
  return localStorage.getItem(key);
};
