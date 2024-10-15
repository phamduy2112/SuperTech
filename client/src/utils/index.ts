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
  