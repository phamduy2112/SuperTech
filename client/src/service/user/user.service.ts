import { axiosWithAuth, options } from "../axios.config";

export const getUserDetail = () => {
    return axiosWithAuth("/user-detail", {
      method: "get",
      
    }
 
  );
  };
export const updateUserDetail = (payload:any) => {
    return axiosWithAuth("/user-update", {
      method: "put",
      data:payload
    }
 
  );
  };
  export const verifyPassword=(password:string)=>{
    return axiosWithAuth("/verify-password",{
        method:"post",
        data:password
    })
  }
  export const changePassword=(password:string)=>{
    return axiosWithAuth("/change-password",{
        method:"put",
        data:password
    })
  }