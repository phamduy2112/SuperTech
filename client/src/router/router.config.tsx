import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Client/Home/Home";
import UserTemplate from "../template/user/UserTemplate";
import Search from "../page/Client/Search/Search";
import ListBlog from "../page/Client/Blog/ListBlog/ListBlog";
import Login from "../page/Client/Auth/Login/Login";
import Resigter from "../page/Client/Auth/Resigter/Resigter";
import ForgetPassword from "../page/Client/Auth/Forget/ForgetPassword";
import DetailBlog from "../page/Client/Blog/DetailBlog/DetailBlog";
import DetailProduct from "../page/Client/DetailProduct/DetailProduct";
import Cart from "../page/Client/Cart/Cart";
import Pay from "../page/Client/Pay/Pay";
import Bill from "../page/Client/Bill/Bill";
import CustomerCare from "../page/Client/PagesMore/CustomerCare";
import QuestionAnswer from "../page/Client/PagesMore/QuestionAnswer";
import Introduce from "../page/Client/Introduce/Introduce";
import Contact from "../page/Client/Contact/Contact";
import AuthTemplate from "../page/Client/Auth/Auth";

export const router = createBrowserRouter([
  {
    element: <UserTemplate />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/sản-phẩm-chi-tiết",
        element: <DetailProduct />,
      },
      
      // Blog
      {
        path: "/bài-viết",
        element: <ListBlog />,
      },
      {
        path: "/bài-viết-chi-tiết",
        element: <DetailBlog />,
      },
      // Mua hàng
      {
        path: "/giỏ-hàng",
        element: <Cart />,
      },
      {
        path: "/thanh-toán",
        element: <Pay />,
      },
      {
        path: "/xuất-hóa-đơn",
        element: <Bill />,
      },
      // các trang khác
      {
        path: "/giới-thiệu",
        element: <Introduce />,
      },
      {
        path: "/liên-hệ",
        element: <Contact />,
      },
      {
        path: "chăm-sóc-khách-hàng",
        element: <CustomerCare />,
      },

      {
        path: "/hỏi-đáp",
        element: <QuestionAnswer />,
      },
    ],
  },
  {

    element: <AuthTemplate/>,
    children:[
       {
        path: "/đăng-nhập",
        element: <Login />,
      },
      {
        path: "/đăng-kí",
        element: <Resigter />,
      },
      {
        path: "/quên-mật-khẩu",
        element: <ForgetPassword />,
      }, 
    ]
  
  }
  // {
  //   path: 'admin',
  //   element: <AdminTemplate/>,
  //   children:[
  //     // {
  //     //   path: 'films',
  //     //   element: <Films/>
  //     // },

  //   ]
  // }
]);
