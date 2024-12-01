import React, { useEffect, useState } from 'react';
import './AdminHome.css';
import { MdBarChart, MdCalendarMonth } from 'react-icons/md';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { TbChartBubbleFilled, TbPlayerTrackNextFilled } from 'react-icons/tb';
import { Calendar, ConfigProvider, Table } from 'antd';
import viVN from 'antd/lib/locale/vi_VN';
import LineChart from './Component/chart/LineChart';
import { useAppSelector } from '../../../redux/hooks';
import { BiBox } from 'react-icons/bi';
import { Box } from '../DataPageAdmin/DataPageHome';
import BarChart from './Component/chart/BarChart';
import TableChiTieu from './Component/chart/TableChiTieu';
import PieChart from './Component/chart/PieChart';
import { getNewCustomerThisWeek } from '../../../service/user/user.service';


Chart.register(...registerables);

function AdminHome() {



// online 
const [onlineCount, setOnlineCount] = useState<number>(0);
const [getNewCustomer,setGetNewCustomer]=useState(0);

const socket = useAppSelector((store) => store.socket.socket); // Lấy socket từ Redux

useEffect(() => {
  if (!socket) return; // Nếu socket chưa được kết nối thì không làm gì

  // Lắng nghe sự kiện "getOnlineUsersCount"
  socket.on("getOnlineUsersCount", (count: number) => {
    setOnlineCount(count); // Cập nhật số lượng người dùng online
  });

  // Cleanup sự kiện khi component unmount
  return () => {
    socket.off("getOnlineUsersCount");
  };
}, [socket]);
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChange = (pagination: any, filters: any, sorter: any) => {
   
 

  };
useEffect(()=>{
  const fetchApi=async()=>{
   const responsive=await getNewCustomerThisWeek()
    setGetNewCustomer(responsive.data.content.length)
  }
  fetchApi()
},[])

  const columns = [
    {
      title: 'Tên',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Số Tiền Mua Hàng',
      dataIndex: 'money',
      key: 'money',

      sorter: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        compare: (a: any, b: any) => a.money - b.money,
        multiple: 1, // Cột này có độ ưu tiên cao nhất
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (text: any) => {
        return text.toLocaleString('vi-VN') + ' VNĐ';
      },

    },
    {
      title: 'Số Đơn Hàng',
      dataIndex: 'order',
      key: 'date',
      sorter: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        compare: (a: any, b: any) => a.order - b.order,
      },
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Doe',
      money: 32000,
      address: '10 Downing Street',
      order: 100
    },
    {
      key: '2',
      name: 'Jane Smith',
      money: 28000,
      address: '20 Queen Street',
      order: 10

    },
    {
      key: '3',
      name: 'Jane Smith',
      money: 280000,
      address: '20 Queen Street',
      order: 10

    },
    {
      key: '4',
      name: 'Jane Smith',
      money: 20008,
      address: '20 Queen Street',
      order: 200

    },
    {
      key: '5',
      name: 'Jane Smith',
      money: 100000,
      address: '20 Queen Street',
      order: 120
    },
  ]


  return (
    <div className=' flex flex-col gap-6 bg-[#f2edf3] p-12'>
      <div className='w-full h-[full] grid grid-cols-1 auto-rows-auto gap-[16px] md:grid-cols-2 items-start lg:gap-[12px] lg:grid-cols-3'>
       
          <Box
        id_box_page_home={1}
        title_box_page_home="Khách hàng và admin Online"
        total_box_page_home={onlineCount}
        icon_box_page_home={<TbChartBubbleFilled />}
        symbol=""
      />
          <Box
        id_box_page_home={2}
        title_box_page_home="Khách hàng và admin Online"
        total_box_page_home={getNewCustomer}
        icon_box_page_home={<TbChartBubbleFilled />}
        symbol=""
      />
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 w-full auto-cols-auto justify-center items-center'>
        <div className='bg-[white] h-full w-full flex flex-col gap-7 p-12 box-border shadow-lg rounded-xl text-[13px] font-medium'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center text-[white] linear-gradient1 rounded-lg p-[15px] gap-[7px] justify-center'>
              <span><MdCalendarMonth /></span>
              <span>Tháng Này</span>
            </div>
            <div className='text-[35px] text-[#FFD700]'><MdBarChart /></div>
          </div>
          <div className='w-full box-border h-full gap-7 flex flex-col xl:flex-row'>
            <div className='w-full xl:w-[250px] box-border h-[300px] flex flex-col leading-[40px]'>
              <div className='text-[15px] text-[#7c7c7c62]'>Tổng Doanh Thu</div>
              <div className='text-[30px] text-[#FFD700]'>300.000 VNĐ</div>
              <div className='flex-1 flex justify-center items-center'>
                <div className='flex gap-5 font-light text-[#24b124] w-[100px] shadow-[#6df3a093] shadow-md h-[100px] bg-[#92f59225] rounded-full items-center justify-center text-[15px]'>
                  <span className='rotate-[-90deg]'><TbPlayerTrackNextFilled /></span>
                  <span>4.5%</span>
                </div>
              </div>
            </div>

<LineChart/>
          </div>
        </div>

        <div className='bg-[white] h-full w-full flex flex-col gap-7 p-12 box-border shadow-lg rounded-xl text-[13px] font-medium'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center text-[white] linear-gradient1 rounded-lg p-[15px] gap-[7px] justify-center'>
              <span><MdCalendarMonth /></span>
              <span>Tuần Này</span>
            </div>
            <div className='text-[35px] text-[#FFD700]'><MdBarChart /></div>
          </div>
          <div className='w-full box-border h-full gap-7 flex flex-col xl:flex-row'>
            <div className='flex-1 box-border h-[300px]'>
      <BarChart></BarChart>
            </div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 lg:flex gap-3 w-full'>
        <div className='w-full h-[500px] lg:h-auto lg:w-[40%] bg-[white] p-12 box-border shadow-lg rounded-xl text-[13px] font-medium flex flex-col gap-7'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center text-[white] linear-gradient1 rounded-lg p-[15px] gap-[7px]'>
              <span><MdCalendarMonth /></span>
              <span>Tuần Này</span>
            </div>
            <div className='text-[35px] text-[#FFD700]'><MdBarChart /></div>
          </div>
          <div className='flex-1 justify-center relative items-center flex'>
           <PieChart/>
          </div>
        </div>

        <div className='bg-[white] w-full lg:w-[70%] p-12 box-border shadow-lg rounded-xl text-[13px] font-medium flex flex-col gap-7'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center text-[white] linear-gradient1 rounded-lg p-[15px] gap-[7px]'>
              <span><MdCalendarMonth /></span>
              <span>Tình Trang Mua Bán Tuần Này</span>
            </div>
          </div>
          <div className='flex-1'>
            <Table
              columns={columns}
              dataSource={data}
              pagination={{ pageSize: 5 }}
              size="large"
              onChange={onChange}
            />
          </div>
        </div>


      </div>
      <div className=' grid grid-cols-1 lg:flex gap-3 w-full'>


        <div className='bg-[white] w-full lg:w-[70%] p-12 box-border shadow-lg rounded-xl text-[13px] font-medium flex flex-col gap-7'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center text-[white] linear-gradient1 rounded-lg p-[15px] gap-[7px]'>
              <span><MdCalendarMonth /></span>
              <span>Bảng Xếp Hạng Người Chi Tiêu</span>
            </div>
          </div>
          <div className='flex-1'>
       <TableChiTieu/>
          </div>
        </div>
        <div className='w-full lg:w-[40%] bg-white p-12 box-border shadow-lg rounded-xl text-[13px] font-medium flex flex-col gap-7'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center text-[white] linear-gradient1 rounded-lg p-[15px] gap-[7px]'>
              <span><MdCalendarMonth /></span>
              <span>Ngày Hôm Nay</span>
            </div>
          </div>
          <div className='flex-1 justify-center items-center'>
            <ConfigProvider locale={viVN}>
              <Calendar
                fullscreen={false}
              // Nếu cần có thể thêm các props khác như onChange, value, etc.
              />
            </ConfigProvider>          </div>
        </div>


      </div>



    </div>
  );
}

export default AdminHome;
