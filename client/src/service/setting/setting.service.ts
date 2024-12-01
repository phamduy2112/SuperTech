import { axiosWithAuth } from '../axios.config';


export const getsetting = () => {
    return axiosWithAuth("/setting", {
        method: "GET",
    });
};
export const getsettingId = (id:number) => {
    return axiosWithAuth(`/setting/${id}`, {
        method: "GET",
    });
};
