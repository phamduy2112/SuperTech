type TFunction = () => any;
export const IIFE = (cb: TFunction) => {
    cb();
};

