export type TpayloadCheckEmail={
    email:string
}
export type TpayloadCheckCode={
    code:number | string
}
export type TpayloadPassword={
    password: string
}
export type TpayloadUser = {
    user_id:number;
    user_name: string;
    user_address: string;
    user_phone: string;
};