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
  export const truncateText = (text: string | null | undefined, limit: number) => {
    if (typeof text !== 'string') {
      return '';
    }
  
    if (text.length <= limit) {
      return text;
    } else {
      return text.substring(0, limit) + "...";
    }
  };
  export const formatCurrencyVND = (amount: number) => {
    // Làm tròn số đến hàng đơn vị
    const roundedAmount = Math.round(amount);
  
    // Định dạng số sang tiền Việt Nam
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(roundedAmount);
  };
  