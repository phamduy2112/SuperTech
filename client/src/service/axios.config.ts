import axios from "axios";
import { URL_BACKEND } from "../constants";
import { getLocalStorage, saveLocalStorage } from "../utils";

export const axiosWithAuth = axios.create({
    baseURL: `${URL_BACKEND}`,
    timeout: 180_000,
});

// Request Interceptor
axiosWithAuth.interceptors.request.use(
    (config) => {
        // Lấy token từ local storage và thêm vào headers
        const token = getLocalStorage("token");
        if (token) {
            config.headers.token = token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response Interceptor
axiosWithAuth.interceptors.response.use(
    (response) => {
        return response; // Trả về phản hồi nếu không có lỗi
    },
    async (error) => {
        const originalRequest = error.config;
        console.log(originalRequest);
        
        // Kiểm tra nếu có lỗi 401 và chưa thử lại yêu cầu
        if (error.response.data=="TokenExpiredError" && error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true; // Đánh dấu yêu cầu đã thử
            try {
                // Gọi API reset-token
                const response = await axios.post(`${URL_BACKEND}reset-token`, {
                    token: getLocalStorage("token"), // Gửi token hiện tại
                });

                const newToken = response.data.content; // Giả định bạn nhận được token mới từ phản hồi

                // Cập nhật token mới vào local storage
                saveLocalStorage("token", newToken);
                // Cập nhật lại headers cho yêu cầu gốc
                originalRequest.headers.token = newToken;

                // Thử lại yêu cầu ban đầu với token mới
                return axiosWithAuth(originalRequest);
            } catch (refreshError) {
                console.error("Unable to refresh token:", refreshError);
                // Có thể chuyển hướng về trang đăng nhập nếu không thể làm mới token
                // window.location.href = "/login"; // Ví dụ chuyển hướng
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error); // Trả về lỗi nếu không phải lỗi 401
    }
);