// discount

import { axiosWithAuth } from "../axios.config";

export const getDiscountAll = () => {
    return axiosWithAuth(`/discount`, {
      method: "get",
      
    }
 
  );
  };