import Cookies from 'js-cookie';

type TFunction = () => any;
export const IIFE = (cb: TFunction) => {
    cb();
};

export const getCookie = () => {
    try {
      return Cookies.get('token'); 
    } catch (e) {
      return null;
    }
  };
  
  export const saveLocalStorage = (key: string, data: any) => {
    localStorage.setItem(key, JSON.stringify(data));
  };
  
  export const getLocalStorage = (key: string) => {
    try {
      return JSON.parse(localStorage.getItem(key) ?? "");
    } catch (e) {
      return null;
    }
  };
  
  export const removeLocalStorage = (key: string) => {
    localStorage.removeItem(key);
  };