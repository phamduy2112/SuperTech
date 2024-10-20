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
export const getProductsByIdCatelogry = (id) => {
    return axiosWithAuth(`/products/categories/${id}`, {
      method: "get",
      
    }
 
  );
  };
export const getProductDetail=(id)=>{
  return axiosWithAuth(`product-detail/${id}`,{
    method:"get"
  })
}
