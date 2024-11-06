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
import UserDetail from "../page/Client/User/UserDetail/UserDetail";
import Order from "../page/Client/User/Order/Order";
import User from "../page/Client/User/User";
import OrderDetail from "../page/Client/User/OrderDetail/OrderDetail";
import Voucher from "../page/Client/Voucher/voucher"
import ChatAdmin from "../page/Admin/Chat/ChatAdmin";
import AdminStaff from "../page/Admin/User/AdminStaff";
import AdminSetting from "../page/Admin/Setting/AdminSetting";
import AdminAddProduct from "../page/Admin/Product/Component/AdminAddProduct";
import AdminEditProduct from "../page/Admin/Product/Component/AdminEditProduct";
import AdminCreateAccount from "../page/Admin/User/Component/AdminCreateAccount";
import AdminCustomerEdit from "../page/Admin/User/Component/AdminCustomerEdit";
import AdminOrderCreate from "../page/Admin/Order/Component/AdminOrderCreate";
import AdminOrderEdit from "../page/Admin/Order/Component/AdminOrderEdit";
import AdminCommentPost from "../page/Admin/Blog/Comment/AdminComment";
import AdminBlog from "../page/Admin/Blog/AdminBlog";
import AdminAddBlog from "../page/Admin/Blog/Component/AdminAddBlog";
import AdminEditBlog from "../page/Admin/Blog/Component/AdminEditBlog";
import ListProduct from "../page/Client/ListProduct/ListProduct";

export const router = createBrowserRouter([
  {
    element: <UserTemplate />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "tim-kiem",
        element: <Search />,
      },
      {
        path: "san-pham-yeu-thich/:id",
        element: <FavoriteProduct />,
      },
      {
        path: "san-pham-chi-tiet/:id",
        element: <DetailProduct />,
      },
      {
        path: "list-san-pham",
        element: <ListProduct />,
      },

      // Blog
      {
        path: "bai-viet",
        element: <ListBlog />,
      },
      {
        path: "bai-viet-chi-tiet",
        element: <DetailBlog />,
      },
      // User
      {
        element: <User />,
        children: [
          {
            path: "nguoi-dung",
            element: <UserDetail />,
          },
          {
            path: "don-hang-cua-ban",
            element: <Order />,
          },
          {
            path: "don-hang-chi-tiet-cua-ban/:id",
            element: <OrderDetail />,
          },
        ],
      },

      // Shopping
      {
        path: "gio-hang",
        element: <Cart />,
      },
      {
        path: "thanh-toan",
        element: <Pay />,
      },
      {
        path: "xuat-hoa-don",
        element: <Bill />,
      },
      {
        path: "ma-giam-gia",
        element:<Voucher/>
      },
      // Other pages
      {
        path: "gioi-thieu",
        element: <Introduce />,
      },
      {
        path: "lien-he",
        element: <Contact />,
      },
      {
        path: "cham-soc-khach-hang",
        element: <CustomerCare />,
      },
      {
        path: "hoi-dap",
        element: <QuestionAnswer />,
      },
    ],
  },
  {
    element: <AuthTemplate />,
    children: [
      {
        path: "dang-nhap",
        element: <Login />,
      },
      {
        path: "dang-ky",
        element: <Resigter />,
      },
      {
        path: "quen-mat-khau",
        element: <ForgetPassword />,
      },
    ],
  },
  {
    path: "admin",
    element: <AdminTemplate />,
    children: [
      {
        path: "trang-chu",
        element: <AdminHome />,
      },
      // Category
      {
        path: "quan-li-loai",
        element: <AdminCatelogry />,
      },
      // Product
      {
        path: "quan-li-san-pham",
        element: <AdminProduct />,
      },
      {
        path: "quan-li-san-pham/tao-san-pham-moi",
        element: <AdminAddProduct />,
      },
      {
        path: "quan-li-san-pham/sua-san-pham/:id",
        element: <AdminEditProduct />,
      },
      {
        path: "quan-li-san-pham/quan-li-binh-luan",
        element: <AdminCommentProduct />,
      },
      // Blog
      {
        path: "quan-li-bai-viet",
        element: <AdminBlog />,
      },
      {
        path: "quan-li-bai-viet/them-bai-viet-moi",
        element: <AdminAddBlog />,
      },
      {
        path: "quan-li-bai-viet/sua-bai-viet/:id",
        element: <AdminEditBlog />,
      },
      {
        path: "quan-li-bai-viet/quan-li-binh-luan-bai-viet",
        element: <AdminCommentPost />,
      },

      // Customers
      {
        path: "quan-li-khach-hang",
        element: <AdminUser />,
      },
      {
        path: "quan-li-nhan-vien",
        element: <AdminStaff />,
      },
      {
        path: "quan-li-nhan-vien/tao-nhan-vien-moi",
        element: <AdminCreateAccount />,
      },
      {
        path: "quan-li-khach-hang/tao-khach-hang-moi",
        element: <AdminCreateAccount />,
      },
      {
        path: "quan-li-nhan-vien/sua-nhan-vien/:id",
        element: <AdminCustomerEdit />,
      },
      {
        path: "quan-li-khach-hang/sua-khach-hang/:id",
        element: <AdminCustomerEdit />,
      },

      // Orders
      {
        path: "quan-li-don-hang",
        element: <AdminOrder />,
      },
      {
        path: "quan-li-don-hang/quan-li-don-hang-chi-tiet/:id",
        element: <AdminOrderDetail />,
      },
      {
        path: "quan-li-don-hang/tao-don-hang",
        element: <AdminOrderCreate />,
      },
      {
        path: "quan-li-don-hang/sua-don-hang/:id",
        element: <AdminOrderEdit />,
      },

      {
        path: "quan-li-tin-nhan",
        element: <ChatAdmin />,
      },
      {
        path: "quan-li-trang-web",
        element: <AdminSetting />,
      },
    ],
  },
]);
