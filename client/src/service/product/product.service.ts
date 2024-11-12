import { axiosWithAuth } from "../axios.config";

export const getProductCateloriesByDad = (name:string) => {
    return axiosWithAuth(`/list-product-catelories?category_dad=${name}`, {
      method: "get",
      
    }
 
  );
  };
export const getProducts = () => {
    return axiosWithAuth(`/products`, {
      method: "get",
      
    }
 
  );
  };
export const getProductsByIdCatelogry = (id:number) => {
    return axiosWithAuth(`/products/categories/${id}`, {
      method: "get",
      
    }
 
  );
  };
export const getProductDetail=(id:number)=>{
  return axiosWithAuth(`product-detail/${id}`,{
    method:"get"
  })
}

export const createProduct=(dataCreate:any)=>{
  return axiosWithAuth(`/create-products`,{
    method:"post",
    data:dataCreate
  })
}
export const createInforProduct=(dataCreate:any)=>{
  return axiosWithAuth(`/create-inforproduct`,{
    method:"post",
    data:dataCreate
  })
}
export const deleteProduct=(id:number)=>{
  return axiosWithAuth(`/detele-products/${id}`,{
    method:"delete",
  
  })
}