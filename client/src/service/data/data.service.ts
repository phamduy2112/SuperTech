// /get-week-order-sales

import { axiosWithAuth } from "../axios.config";

export const getOrderWeekSales = () => {
    return axiosWithAuth(`/get-week-order-sales`, {
      method: "get",
	
    });
  };
export const getUserOrderCount = () => {
    return axiosWithAuth(`/get-user-order-count`, {
      method: "get",
	
    });
  };
export const getTopFiveProduct = () => {
    return axiosWithAuth(`/get-product-top-five`, {
      method: "get",
	
    });
  };