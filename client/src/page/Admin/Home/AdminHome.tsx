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


Chart.register(...registerables);

function AdminHome() {
  const Doughnut = {
    responsive: true,
    type: 'doughnut',
    cutout: '85%',
    maintainAspectRatio:true

  };


// online 
const [onlineCount, setOnlineCount] = useState<number>(0);
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
  const columns2 = [
    {
      title: 'Hình',
      dataIndex: 'image',
      key: 'image',
      render: (src: string) => {
        return <img className='rounded-full object-cover' src={src} alt="Product" style={{ width: 50, height: 50 }} />;
      },
    },
    {
      title: 'Tên',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Số Tiền Mua Hàng',
      dataIndex: 'amount',
      key: 'amount',
      sorter: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        compare: (a: any, b: any) => a.amount - b.amount,
        multiple: 1,
      },

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (text: any) => {
        return text.toLocaleString('vi-VN') + ' VNĐ';
      },
    },
    {
      title: 'Top Người Chi Tiêu',
      dataIndex: 'Top',
      key: 'Top',
      sorter: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        compare: (a: any, b: any) => a.Top - b.Top,
        multiple: 1,
      },
    },
  ];

  const data2 = [
    {
      key: '1',
      name: 'Đàm Vĩnh Hưng',
      amount: 32000,
      Top: 3,
      image: 'https://suckhoedoisong.qltns.mediacdn.vn/Images/phamquynh/2021/05/09/Ong%20hoang%20nhac%20Viet%20co%20suc%20hut%20khung%20khiep%20khi%20chuyen%20sang%20nghe%20ban%20hang%20online.jpg', // Thay bằng link hình thực tế
    },
    {
      key: '2',
      name: 'Linda',
      amount: 28000,
      Top: 4,
      image: 'https://ss-images.saostar.vn/wp700/pc/1663774403117/saostar-4cq6vc6i0rukgvli.jpg',
    },
    {
      key: '3',
      name: 'J97 Trịnh Trần Phương Tuấn',
      amount: 280000,
      Top: 1,
      image: 'https://thanhnien.mediacdn.vn/Uploaded/haoph/2021_10_21/jack-va-thien-an-5805.jpeg',
    },
    {
      key: '4',
      name: 'Hiền Hồ G63',
      amount: 20008,
      Top: 5,
      image: 'https://nld.mediacdn.vn/291774122806476800/2022/4/19/n-ho-di-show-chan-dai-toi-nach-nhung-mat-do-cung-hien-ho-toi-do-nhat-nhung-khong-vo-duyen-98fe21-ve-1639984218-310-width1017height1482-11113367-1650361452542454885009.jpg',
    },
    {
      key: '5',
      name: 'Cô Ba Báo',
      amount: 100000,
      Top: 2,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvnIE6H1laYWVs_SWOd9Pw1DCHaF0Cc-ycTNyPGuMkMWxQyQm-pRXHpf8lGOysT7wXqmU&usqp=CAU',
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChange = (pagination: any, filters: any, sorter: any) => {
    // Ghi lại thông tin phân trang
    console.log('Pagination:', pagination);

    // Ghi lại các bộ lọc đã áp dụng
    console.log('Filters:', filters);

    // Ghi lại thông tin sắp xếp
    console.log('Sorter:', sorter);

  };


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
        {/* {DataPageHome.map((item, i) => (
          <div key={i} className='bg-[white] flex items-start gap-[12px] px-[16px] py-[20px] rounded-xl'>
            <div className='w-[48px] h-[48px] min-w-[48px] flex justify-center items-center rounded-full linear-gradient box-shadow text-white'>
              <span className='text-[32px]'>{item.icon_box_page_home}</span>
            </div>
            <div className='text-[14px] font-medium flex flex-col gap-[8px]'>
              <p className='text-[#7c7c7c62]'>{item.title_box_page_home}</p>
              <div className='text-[24px] flex items-center gap-4 font-semibold leading-[1.4] text-[#FFD700]'>
                {Number(item['total_box_page_home']).toLocaleString("vi")} {item.symbol === '' ? <div className='w-[12px] h-[12px] bg-[#26ff26] rounded-full'></div> : item.symbol}
              </div>
            </div>
          </div>
        ))} */}
          <Box
        id_box_page_home={1}
        title_box_page_home="Khách hàng và admin Online"
        total_box_page_home={onlineCount}
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
            <Pie className='absolute'
              data={{
                labels: ['Tuần 1', 'Tuần 2', 'Tuần 3', 'Tuần 4'],
                datasets: [
                  {
                    label: 'Doanh Thu',
                    data: [200, 300, 400, 600],
                    backgroundColor: [
                      'rgb(255, 99, 132)',
                      'rgb(76, 175, 80)',
                      'rgb(54, 162, 235)',
                      'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4,
                    weight: 100
                  },
                ]
              }}
              options={Doughnut}
              

            />
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
