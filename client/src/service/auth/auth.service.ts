import { axiosWithAuth } from "../axios.config";
import { TPayloadRegister } from "./auth.type";

export const signup = (payload: TPayloadRegister) => {
    return axiosWithAuth("/register", {
      method: "post",
      data: payload,
    });
  };
  