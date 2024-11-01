// create-order

import { axiosWithAuth } from "../axios.config";

export const createOrder = (data:any) => {
    return axiosWithAuth(`/create-order`, {
      method: "post",
      data
    }
 
  );
  };
export const createDetailOrder = (data:any) => {
    return axiosWithAuth(`/create-detail-order`, {
      method: "post",
      data
    }
 
  );
  };