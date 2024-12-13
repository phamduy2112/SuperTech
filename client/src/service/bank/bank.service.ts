import { axiosWithAuth } from '../axios.config';


export const getsetting = () => {
    return axiosWithAuth("/autobank", {
        method: "GET",
    });
};
export const getsettingId = (id:number) => {
    return axiosWithAuth(`/setting/${id}`, {
        method: "GET",
    });
};
export const updatesettingId = (id:number, value:string) => {
    return axiosWithAuth(`/autobank-update/${id}`, {
        method: "PUT",
        data: {
            value: value
        },
        headers: {
            'Content-Type': 'application/json'
        }
    });
};