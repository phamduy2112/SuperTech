import { axiosWithAuth } from "../axios.config";
import { TpayloadCheckCode, TpayloadCheckEmail, TpayloadPassword, TpayloadUser } from "./user.type";

export const getAllUser = () => {
  return axiosWithAuth("/users", {
    method: "get",
  });
};

export const getUserDetail = () => {
  return axiosWithAuth("/user-detail", {
    method: "get",
  });
};
export const updateUserDetail = (payload: TpayloadUser) => {
  return axiosWithAuth("/user-update", {
    method: "put",
    data: payload,
  });
};
export const verifyPassword = (password: string) => {
  return axiosWithAuth("/verify-password", {
    method: "post",
    data: password,
  });
};
export const changePassword = (password: string) => {
  return axiosWithAuth("/change-password", {
    method: "put",
    data: password,
  });
};
export const uploadImage = (file:string) => {
  return axiosWithAuth("/user-upload-image", {
    headers: {
      "Content-Type": "multipart/form-data", // Đảm bảo gửi đúng loại dữ liệu
    },
    method: "put",
    data: file,
  });
};

export const checkEmail = (payload:TpayloadCheckEmail) => {
  return axiosWithAuth("/forget-check-mail", {
    method: "post",
    data: payload,
  });
};

export const checkCode = (code:TpayloadCheckCode) => {
  return axiosWithAuth("/forget-check-code", {
    method: "post",
    data: code,
  });
};
export const fogetCheckPassword = (payload:TpayloadPassword) => {
  return axiosWithAuth("/forget-reset-password", {
    method: "put",
    data: payload,
  });
};
