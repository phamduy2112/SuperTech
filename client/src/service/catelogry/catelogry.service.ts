import { axiosWithAuth, options } from "../axios.config";
import { TPayloadCatelogry } from "./catelogry.type";

export const getCatelogry = () => {
    return axiosWithAuth("/categories", {
      method: "get",
      
    }
 
  );
  };
export const getCatelogryDad = () => {
    return axiosWithAuth("/categories_dad", {
      method: "get",
      
    }
 
  );
  };
  export const getCatelogryDadById=(id:number)=>{
    return axiosWithAuth(`/categories_dad/${id}`, {
      method: "get",
      
    }
 
  );
  }