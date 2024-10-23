import { ReactNode } from "react";
import { AiOutlineProduct } from "react-icons/ai";
import { FaUserFriends, FaUsers } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { MdAreaChart, MdOutlineStackedLineChart, MdShowChart } from "react-icons/md";
import { PiCodesandboxLogoDuotone } from "react-icons/pi";
import { TbChartBubbleFilled } from "react-icons/tb";

export interface BoxPageHome{
    id_box_page_home: number;
    title_box_page_home:string;
    total_box_page_home:number;
    icon_box_page_home:ReactNode;
    symbol:string | ReactNode;

}


export const DataPageHome:BoxPageHome[] = [
    {
        id_box_page_home: 1,
        title_box_page_home: "Khách Hàng Mới",
        total_box_page_home:350,
        icon_box_page_home:<IoStatsChart />,
        symbol:<MdShowChart />


    },
    {
        id_box_page_home: 2,
        title_box_page_home: "Tổng Doanh Thu",
        total_box_page_home:3000000,
        icon_box_page_home:<MdAreaChart />,
        symbol:"VNĐ"
    },
    {
        id_box_page_home: 3,
        title_box_page_home: "Đơn Hàng",
        total_box_page_home:3500,
        icon_box_page_home:<MdOutlineStackedLineChart /> ,
        symbol:<MdShowChart />


    },
    {
        id_box_page_home: 4,
        title_box_page_home: "Tổng Khách Hàng",
        total_box_page_home:1280,
        icon_box_page_home:<FaUsers />,
        symbol:<FaUserFriends />
    },
    {
        id_box_page_home: 5,
        title_box_page_home: "Khách Hàng Online",
        total_box_page_home:12,
        icon_box_page_home:<TbChartBubbleFilled />,
        symbol:""
    },{
        id_box_page_home: 6,
        title_box_page_home: "Tổng Sản Phẩm",
        total_box_page_home:120,
        icon_box_page_home:<AiOutlineProduct />,
        symbol:<PiCodesandboxLogoDuotone />


    }
]