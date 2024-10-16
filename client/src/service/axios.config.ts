
import axios from "axios";
import { URL_BACKEND } from "../constants";
import { getCookie } from "../utils";
export const axiosWithAuth = axios.create({
    baseURL: `${URL_BACKEND}`,

    // Đợi phản hồi của một Api -> giới hạn 3p
    timeout: 180_000,
});


// Inside your request interceptor
axiosWithAuth.interceptors.request.use(
    (config) => {
      // Call the getCookie function to get the token value
      const token = getCookie();
      if (token) {
        config.headers.token = token;  // Attach the token to the headers
      }
  
      return config;
    },
    (e) => {
      return Promise.reject(e);
    }
  );