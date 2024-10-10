import React from 'react'
import { DataPageHome } from '../DataPageAdmin/DataPageHome';
import './AdminHome.css'
import { MdBarChart, MdCalendarMonth } from 'react-icons/md';
import { Bar, Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { TbPlayerTrackNextFilled } from 'react-icons/tb';
Chart.register(...registerables);




function AdminHome() {

  const BarDouble = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
        beginAtZero: true,

        grid: {
          display: false,
        },// Bật chồng cột cho trục x
      },
      y: {
        stacked: true, // Bật chồng cột cho trục y
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
    },
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },

    },
  };


  return (
    <div className='flex flex-col gap-6 bg-[#f2edf3] p-12 '>
      <div className='w-full h-[full] grid grid-cols-1 auto-rows-auto gap-[16px]  md:grid-cols-2 items-start lg:gap-[12px] lg:grid-cols-3'>
        {
          DataPageHome.map((item, i) => (
            <div key={i} className='bg-[white] flex items-start gap-[12px] px-[16px] py-[20px] rounded-xl'>
              <div className='w-[48px h-[48px] min-w-[48px] flex justify-center items-center rounded-full linear-gradient box-shadow text-white'>
                <span className='text-[32px]'>  {item.icon_box_page_home} </span>
              </div>
              <div className='text-[14px] font-medium flex flex-col gap-[8px]'>
                <p className='text-[#7c7c7c62]'>{item.title_box_page_home}</p>
                <div className='text-[24px] flex items-center gap-4 font-semibold leading-[1.4] text-[#FFD700]'>
                  {Number(item['total_box_page_home']).toLocaleString("vi")} {
                    item.symbol === '' ? <div className='w-[12px] h-[12px] bg-[#26ff26] rounded-full'></div> : item.symbol
                  }
                </div>
              </div>

            </div>
          ))
        }
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 w-full auto-cols-auto justify-center items-center'>
        <div className='bg-[white] h-full w-full flex flex-col gap-7 p-12 box-border shadow-lg rounded-xl text-[13px] font-medium'>
          <div className='flex  items-center justify-between'>
            <div className='flex items-center text-[white] linear-gradient1 rounded-lg p-[15px] gap-[7px] justify-center'>
              <span className=''>
                <MdCalendarMonth />
              </span>
              <span className=''>
                Tháng Này
              </span>
            </div>

            <div className='text-[35px] text-[#FFD700] '>
              <MdBarChart />
            </div>
          </div>
          <div className='w-full box-border h-full gap-7 flex flex-col xl:flex-row'>
            <div className='w-full xl:w-[250px] box-border h-[300px] flex flex-col leading-[40px]'>
              <div className='text-[15px] text-[#7c7c7c62]'>
                Tổng Doanh Thu
              </div>
              <div className='text-[30px] text-[#FFD700] '>
                300.000 VNĐ
              </div>

              <div className='flex-1 flex justify-center items-center'>
                <div className='flex gap-5 font-light text-[#24b124] w-[100px] shadow-[#6df3a093] shadow-md h-[100px] bg-[#92f59225] rounded-full items-center justify-center text-[15px]'>
                  <span className='rotate-[-90deg]'>            <TbPlayerTrackNextFilled />
                  </span>
                  <span>4.5%</span>
                </div>
              </div>
            </div>

            <div className='flex-1 box-border h-[300px]'>
              <Line
                data={{
                  labels: ['Tuần 1', 'Tuần 2', 'Tuần 3', 'Tuần 4'],
                  datasets: [
                    {
                      label: 'Doanh Thu',
                      data: [200, 3000, 400, 600],
                      backgroundColor: 'rgba(75, 112, 192, 0.2)',
                      borderColor: 'rgba(75, 112, 192,1)',
                      borderWidth: 1,
                      tension: 0.4,

                    },
                    {
                      label: 'Chi Tiêu',
                      data: [100, 800, 2980, 1520],
                      backgroundColor: 'rgba(75, 192, 192, 0.2)',
                      borderColor: 'rgba(75, 192, 192, 1)',
                      borderWidth: 1,
                      tension: 0.4,


                    },
                  ],
                }}
                options={options}
              />
            </div>
          </div>


        </div>
        <div className='bg-[white] h-full w-full flex flex-col gap-7 p-12 box-border shadow-lg rounded-xl text-[13px] font-medium'>
          <div className='flex  items-center justify-between'>
            <div className='flex items-center text-[white] linear-gradient1 rounded-lg p-[15px] gap-[7px] justify-center'>
              <span className=''>
                <MdCalendarMonth />
              </span>
              <span className=''>
                Tuần Này
              </span>
            </div>

            <div className='text-[35px] text-[#FFD700] '>
              <MdBarChart />
            </div>
          </div>
          <div className='w-full box-border h-full gap-7 flex flex-col xl:flex-row'>
            <div className='flex-1 box-border h-[300px]'>
              <Bar
                data={{
                  labels: ['Iphone 15', 'SamSung S24 UnTraGalaxy', 'Oppol A15', 'MSI GAMING'],
                  datasets: [
                    {
                      label: 'Nhập',
                      data: [200, 3000, 400, 600],
                      backgroundColor: 'rgba(75, 112, 192, 0.2)',
                      borderColor: 'rgba(75, 112, 192,1)',
                      borderWidth: 1,


                    },
                    {
                      label: 'Bán',
                      data: [100, 8000, 2980, 15020],
                      backgroundColor: 'rgba(75, 192, 192, 0.2)',
                      borderColor: 'rgba(75, 192, 192, 1)',
                      borderWidth: 1,



                    },
                  ],
                }}
                options={BarDouble}
              />
            </div>
          </div>


        </div>
        <div className='bg-[white] h-full w-full flex flex-col gap-7 p-12 box-border shadow-lg rounded-xl text-[13px] font-medium'>
          <div className='flex  items-center justify-between'>
            <div className='flex items-center text-[white] linear-gradient1 rounded-lg p-[15px] gap-[7px] justify-center'>
              <span className=''>
                <MdCalendarMonth />
              </span>
              <span className=''>
                Tuần Này
              </span>
            </div>

            <div className='text-[35px] text-[#FFD700] '>
              <MdBarChart />
            </div>
          </div>
          <div className='w-full box-border h-full gap-7 flex flex-col xl:flex-row'>
            <div className='flex-1 box-border h-[300px]'>


            </div>
          </div>


        </div>
        <div className='bg-[white] h-full w-full flex flex-col gap-7 p-12 box-border shadow-lg rounded-xl text-[13px] font-medium'>
          <div className='flex  items-center justify-between'>
            <div className='flex items-center text-[white] linear-gradient1 rounded-lg p-[15px] gap-[7px] justify-center'>
              <span className=''>
                <MdCalendarMonth />
              </span>
              <span className=''>
                Tuần Này
              </span>
            </div>

            <div className='text-[35px] text-[#FFD700] '>
              <MdBarChart />
            </div>
          </div>
          <div className='w-full box-border h-full gap-7 flex flex-col xl:flex-row'>
            <div className='flex-1 box-border h-[300px]'>
            wscsc

            </div>
          </div>


        </div>

      </div>


    </div>
  )
}

export default AdminHome
