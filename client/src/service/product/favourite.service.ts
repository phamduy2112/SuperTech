import { axiosWithAuth } from "../axios.config";


export const getFavouriteProducts = () => {
    return axiosWithAuth(`/favorite-product`, {
      method: "get",
      
    }
 
  );
  };
export const checkFavouriteProducts = (id:number) => {
    return axiosWithAuth(`/favorite-product/${id}`, {
      method: "get",
      
    }
 
  );
  };

export const createFavouriteProduct=(dataCreate:any)=>{
    // console.log(dataCreate);
    
  return axiosWithAuth(`/favorite-product-create`,{
    method:"post",
    data:dataCreate
  })
}
