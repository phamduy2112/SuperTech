import { axiosWithAuth, options } from "../axios.config";
import { TPayloadCatelogry } from "./catelogry.type";

export const getCatelogry = () => {
    return axiosWithAuth("/categories", {
      method: "get",
      
    }
 
  );
  };
export const createCategory = (data:any) => {
    return axiosWithAuth("/categories-create", {
      method: "post",
      data
    }
 
  );
  };
export const deleteCategory = (id:number) => {
    return axiosWithAuth(`/categories-delete/${id}`, {
      method: "delete",
      
    }
 
  );
  };
export const putCategory = (data:any,id:number) => {
    return axiosWithAuth(`/categories-edit/${id}`, {
      method: "put",
    data  
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