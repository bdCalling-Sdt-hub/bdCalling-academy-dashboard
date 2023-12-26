import { getuserFromLocalStroage } from "../utils/localStroage";
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
