// create-order

import axios from "axios";
import { axiosWithAuth } from "../axios.config";
export const getOrderAll=()=>{
  return axiosWithAuth("/get-order-all",{
    method:"get"
  })
}
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
export const getOrderByIdUser=()=>{
  return axiosWithAuth(`/order-by-id-user`,{
    method:"get",
  })
}
export const changeStatusOrder=(id:number,data:any)=>{
  return axiosWithAuth(`/change-status-order/${id}`,{
    method:"put",
    data
  })
}
export const getDetailOrder=(id:number)=>{
  return axiosWithAuth(`/detail-order/${id}`,{
    method:"get",

  })
}
export const getDistrictsCity=(cityCode:string)=>{
  return axios.get(`https://vn-public-apis.fpo.vn/districts/getByProvince?provinceCode=${cityCode}&limit=-1`);

}
export const getAllCity=()=>{
  return axios.get(`https://vn-public-apis.fpo.vn/provinces/getAll?limit=-1`
  )
}