import * as Yup from "yup";
import { useFormik } from "formik";
import { signup, signin } from "../service";
import { useNavigate } from "react-router-dom";
import { saveLocalStorage } from "../utils";
import { ACCESS_TOKEN, GROUP_ID } from "../constants";
import { useAppDispatch } from "../redux/hooks";
import { getProfileThunk } from "../redux/auth/auth.slice";

export const useFormikHook = (type: string) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const taiKhoanRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z][a-zA-Z\d]*$/;

    const hoTenRegex =
        /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+$/u;

    const phoneRegExp =
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const signInValidation = {
        taiKhoan: Yup.string()
            .matches(
                taiKhoanRegex,
                "Yêu cầu phải có chữ và số,không được bắt đầu bằng số và không được có ký tự đặc biệt",
            )
            .required("Required"),
        password: Yup.string()
            .min(6, "Nhập ít nhất là 6 ký tự")
            .required("Required"),
    };

    const signUpnValidation = {
        ...signInValidation,
        hoTen: Yup.string()
            .matches(hoTenRegex, "Yêu cầu toàn bộ là chữ")
            .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        sdt: Yup.string()
            .matches(phoneRegExp, "Phone number is not valid")
            .required("Required"),
    };

    const validationSchema =
        type === "signup"
            ? Yup.object(signUpnValidation)
            : Yup.object(signInValidation);

    const { handleSubmit, touched, errors, getFieldProps } = useFormik({
        initialValues: {
            taiKhoan: "",
            password: "",
            hoTen: "",
            email: "",
            sdt: "",
        },

        onSubmit: (values) => {
            switch (type) {
                case "signup":
                    const signUpPayLoad = {
                        taiKhoan: values.taiKhoan,
                        matKhau: values.password,
                        email: values.email,
                        soDt: values.sdt,
                        hoTen: values.hoTen,
                        maNhom: GROUP_ID,
                    };
                    signup(signUpPayLoad)
                        .then((res) => {
                            console.log(res);
                            navigate("/login");
                        })
                        .catch((e) => {
                            console.log(e);
                            alert(e.response.data.message);
                        });
                    break;
                case "signin":
                    const signInPayLoad = {
                        taiKhoan: values.taiKhoan,
                        matKhau: values.password,
                    };
                    signin(signInPayLoad)
                        .then((r) => {
                            saveLocalStorage(
                                ACCESS_TOKEN,
                                r.data.content.accessToken,
                            );
                            navigate("/");
                            dispatch(getProfileThunk());   
                        })
                        .catch((e) => {
                            alert(e.response.data.message);
                        });

                    break;
                default:
            }
        },
        validationSchema: validationSchema,
    });

    return [
        { touched, errors },
        { handleSubmit, getFieldProps },
    ];
};
