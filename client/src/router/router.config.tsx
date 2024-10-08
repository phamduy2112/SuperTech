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
import FavoriteProduct from "../page/Client/FavoriteProduct/FavoriteProduct";
import AdminTemplate from "../template/admin/AdminTemplate";
import AdminHome from "../page/Admin/Home/AdminHome";
import AdminProduct from "../page/Admin/Product/AdminProduct";
import AdminCatelogry from "../page/Admin/Catelogory/AdminCatelogry";
import AdminUser from "../page/Admin/User/AdminUser";
import AdminCommentProduct from "../page/Admin/Product/Comment/AdminCommentProduct";
import AdminOrderDetail from "../page/Admin/Order/OrderDetail/AdminOrderDetail";
import AdminOrder from "../page/Admin/Order/AdminOrder";

export const router = createBrowserRouter([
  {
    element: <UserTemplate />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "tìm-kiếm",
        element: <Search />,
      },
      {
        path: "sản-phẩm-yêu-thích",
        element: <FavoriteProduct />,
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
  
  },
  {
    path: '/admin',
    element: <AdminTemplate/>,
    children:[
      {
        path: 'trang-chủ',
        element: <AdminHome/>
      },
      // Loại sản phẩm
      {
        path: 'quản-lí-loại',
        element: <AdminCatelogry/>
      },
      // sản phẩm
      {
        path: 'quản-lí-sản-phẩm',
        element: <AdminProduct/>
      },
      {
        path:"quản-lí-bình-luận",
        element:<AdminCommentProduct/>
      },
      // Blog
      {
        path: 'quản-lí-sản-phẩm',
        element: <AdminProduct/>
      },
      // Khách hàng
      {
        path: 'quản-lí-khách-hàng',
        element: <AdminUser/>
      },
      // đơn hàng
      {
        path: 'quản-lí-đơn-hàng',
        element: <AdminOrder />
      },
      // Đơn hàng chi tiết
      {
        path: 'quản-lí-đơn-hàng-chi-tiết',
        element: <AdminOrderDetail/>
      },
      // Thống kê
      
    ]
  }
]);
