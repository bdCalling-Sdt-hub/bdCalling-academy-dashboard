import { WebStorage } from "redux-persist/lib/types";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const cookieStroage = (): WebStorage => {
  return {
    async getItem(key: string) {
      return cookies.get(key);
    },
    async setItem(key: string, value: string) {
      cookies.set(key, value);
    },
    async removeItem(key: string) {
      cookies.remove(key);
    },
  };
};
export default cookieStroage;
