import { ReactNode } from "react";
import { BiBookAlt } from "react-icons/bi";
import { BsBoxes } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
import { FaChevronRight, FaRegEye, FaRegUserCircle } from "react-icons/fa";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { IoCellularOutline, IoHome, IoSettingsOutline } from "react-icons/io5";
import { MdBarChart, MdOutlineCategory } from "react-icons/md";
import { PiMessengerLogo } from "react-icons/pi";
import { TiDocumentText } from "react-icons/ti";

export interface Child {
  id_child: number;
  title_child: string;
  url_child: string;
  icon_child: ReactNode;
}

export interface Box {
  box_id: number;
  box_title: string;
  icon: ReactNode;
  iconChevronRight?: ReactNode; 
  url: string;
  child?: Child[];
}

export interface SidebarItem {
  id: number;
  title: string;
  box: Box[];
}

export const DataSideBar: SidebarItem[] = [
  {
    id: 1,
    title: 'Quản trị',
    box: [
      {
        box_id: 1,
        box_title: 'Bảng Điều Khiển',
        icon: <IoHome />,
        iconChevronRight: null,
        url: '',
        child: [],
      }
    ]
  },
  {
    id: 2,
    title: 'Tổng Quan Danh Mục',
    box: [
      {
        box_id: 1,
        box_title: 'Quản Lí Danh Mục',
        icon: <MdOutlineCategory />,
        iconChevronRight: <FaChevronRight />,
        url: '',
        child: [
          {
            id_child: 1,
            title_child: 'Danh Mục Sản Phẩm',
            url_child: '',
            icon_child: <FaRegEye />,
          },
          {
            id_child: 2,
            title_child: 'Danh Mục Bài Viết',
            url_child: '',
            icon_child: <HiMiniPencilSquare />,
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'Tổng Quan Sản Phẩm',
    box: [
      {
        box_id: 1,
        box_title: 'Quản Lí Sản Phẩm',
        icon: <MdBarChart />,
        iconChevronRight: <FaChevronRight />,
        url: '',
        child: [
          {
            id_child: 1,
            title_child: 'Xem Sản Phẩm',
            url_child: '',
            icon_child: <FaRegEye />,
          },
          {
            id_child: 2,
            title_child: 'Quản Lí Bình Luận',
            url_child: '',
            icon_child: <HiMiniPencilSquare />,
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: 'Tổng Quan Đơn Hàng',
    box: [
      {
        box_id: 1,
        box_title: 'Quản Lí Đơn Hàng',
        icon: <TiDocumentText />,
        iconChevronRight: null,
        url: '',
        child: [],
      }
    ]
  },
  {
    id: 5,
    title: 'Tổng Quan Người Dùng',
    box: [
      {
        box_id: 1,
        box_title: 'Danh Sách Khách Hàng',
        icon: <FaRegUserCircle />,
        iconChevronRight: null,
        url: '',
        child: [],
      }
    ]
  },
  {
    id: 6,
    title: 'Dịch Vụ',
    box: [
      {
        box_id: 1,
        box_title: 'Tin Nhắn hỗ Trợ',
        icon: <PiMessengerLogo /> ,
        iconChevronRight: null,
        url: '',
        child: [],
      },
      {
        box_id: 2,
        box_title: 'Bài Viết',
        icon:<BiBookAlt />,
        iconChevronRight: null,
        url: '',
        child: [],
      },
      {
        box_id: 3,
        box_title: 'Mã Giảm Giá',
        icon: <IoCellularOutline />,
        iconChevronRight: null,
        url: '',
        child: [],
      },
      {
        box_id: 4,
        box_title: 'Đơn hàng',
        icon: <BsBoxes />,
        iconChevronRight: null,
        url: '',
        child: [],
      },
    ]
  },{
    id: 7,
    title: 'Tác Vụ',
    box: [
      {
        box_id: 1,
        box_title: 'Cài Đặt Website',
        icon:<IoSettingsOutline />,
        iconChevronRight: null,
        url: '',
        child: [],
      },
      {
        box_id: 2,
        box_title: 'Đăng Xuất',
        icon:<CiLogout />,
        iconChevronRight: null,
        url: '',
        child: [],
      },
    ]
  }
];
