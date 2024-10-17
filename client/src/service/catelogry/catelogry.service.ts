import { axiosWithAuth, options } from "../axios.config";
import { TPayloadCatelogry } from "./catelogry.type";

export const getCatelogry = () => {
    return axiosWithAuth("/categories", {
      method: "get",
      
    }
 
  );
  };