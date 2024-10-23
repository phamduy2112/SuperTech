import { Button, Timeline } from 'antd'
import React from 'react'
import { FiPhone } from 'react-icons/fi'
import { IoCloudDownloadOutline } from 'react-icons/io5'
import { MdOutlineMail } from 'react-icons/md'
import { TbPlaylistAdd } from 'react-icons/tb'
import './OrderDetail.css';
import { Link, useParams } from 'react-router-dom'

function AdminOrderDetail() {
  const { id } = useParams();
  const timeline = [
    {
      children: 'Đang chuẩn bị hàng',
      color: 'blue',

    },
    {
      children: 'Hủy hàng',
      color: 'red',

    },
    {
      children: 'Đang chuẩn bị hàng',
      color: 'blue',

    },
    {
      children: 'Đang giao hàng 15-10-2024',
      color: 'rgb(255 208 0)',
    },
    {
      dot: <div style={{ fontSize: '16px' }} />,
      children: `Nhận hàng trước ngày 25-10-2024`,
    },
    {
      color: 'green',
      children: 'Đã giao hàng 24-10-2024',
    },
    {
      color: 'orange',
      children: 'Đã trả hàng 26-10-2024',
    },

  ];

  return (
    <div className='flex-1 bg-slate-200 grid xl:grid-cols-3 gap-5 auto-rows-[minmax(50px,auto)] p-12'>
      <div className='xl:row-span-2 bg-white p-[16px] gap-5 rounded-lg  shadow-lg box-border xl:col-span-2'>
        <div className='flex flex-col gap-7 h-full '>
          <div className='flex h-auto'>
            <div className='text-[24px] font-medium w-[50%]'>
              Đơn hàng #1
            </div>
            <div className='flex justify-end gap-4  w-[50%]'>
              <Button className='p-10'>
                <IoCloudDownloadOutline className='text-[18px]' />
                Tải về PDF
              </Button>
              <Link to={`/admin/quản-lí-đơn-hàng/sửa-đơn-hàng/${id}`}>
                <Button className='p-10' type="primary">
                  <TbPlaylistAdd className='text-[18px]' />
                  Sửa đơn hàng
                </Button>
              </Link>
            </div>
          </div>
          <div className='h-[570px] overflow-y-scroll flex flex-col gap-3 scrollbar'>

            <div className='text-[14px] p-[24px] rounded-lg bg-[#c0bebe3f] flex justify-between items-center'>
              <div className='flex items-center gap-5'>
                <div className='w-[100px] h-[100px]'>
                  <img className='object-cover' src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTiFUVJ3gV2PJwAlILJS24uapdocrcEmzW2R_dz_hOLw9pvrbHsINkPYuGb-lkiWhXkkL11ZpZZwcP14Yi0tvg_Cv3jov8LTLxYlbQjB2vfX6fJ93ZovK4gR1lc&usqp=CAE" alt="" />
                </div>
                <div className='flex flex-col gap-5'>
                  <span className='font-medium text-[16px]'>Iphone 15 Promax 1TB</span>
                  <span>ID:11234</span>
                </div>
              </div>
              <div className='flex flex-col items-end gap-5 '>
                <span className='font-medium'>30.000.000 VNĐ</span>
                <span>Số lượng: 3</span>
              </div>
            </div>
            <div className='text-[14px] p-[24px] rounded-lg bg-[#c0bebe3f] flex justify-between items-center'>
              <div className='flex items-center gap-5'>
                <div className='w-[100px] h-[100px]'>
                  <img className='object-cover' src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTiFUVJ3gV2PJwAlILJS24uapdocrcEmzW2R_dz_hOLw9pvrbHsINkPYuGb-lkiWhXkkL11ZpZZwcP14Yi0tvg_Cv3jov8LTLxYlbQjB2vfX6fJ93ZovK4gR1lc&usqp=CAE" alt="" />
                </div>
                <div className='flex flex-col gap-5'>
                  <span className='font-medium text-[16px]'>Iphone 15 Promax 1TB</span>
                  <span>ID:11234</span>
                </div>
              </div>
              <div className='flex flex-col items-end gap-5 '>
                <span className='font-medium'>30.000.000 VNĐ</span>
                <span>Số lượng: 3</span>
              </div>
            </div>
            <div className='text-[14px] p-[24px] rounded-lg bg-[#c0bebe3f] flex justify-between items-center'>
              <div className='flex items-center gap-5'>
                <div className='w-[100px] h-[100px]'>
                  <img className='object-cover' src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTiFUVJ3gV2PJwAlILJS24uapdocrcEmzW2R_dz_hOLw9pvrbHsINkPYuGb-lkiWhXkkL11ZpZZwcP14Yi0tvg_Cv3jov8LTLxYlbQjB2vfX6fJ93ZovK4gR1lc&usqp=CAE" alt="" />
                </div>
                <div className='flex flex-col gap-5'>
                  <span className='font-medium text-[16px]'>Iphone 15 Promax 1TB</span>
                  <span>ID:11234</span>
                </div>
              </div>
              <div className='flex flex-col items-end gap-5 '>
                <span className='font-medium'>30.000.000 VNĐ</span>
                <span>Số lượng: 3</span>
              </div>
            </div>
            <div className='text-[14px] p-[24px] rounded-lg bg-[#c0bebe3f] flex justify-between items-center'>
              <div className='flex items-center gap-5'>
                <div className='w-[100px] h-[100px]'>
                  <img className='object-cover' src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTiFUVJ3gV2PJwAlILJS24uapdocrcEmzW2R_dz_hOLw9pvrbHsINkPYuGb-lkiWhXkkL11ZpZZwcP14Yi0tvg_Cv3jov8LTLxYlbQjB2vfX6fJ93ZovK4gR1lc&usqp=CAE" alt="" />
                </div>
                <div className='flex flex-col gap-5'>
                  <span className='font-medium text-[16px]'>Iphone 15 Promax 1TB</span>
                  <span>ID:11234</span>
                </div>
              </div>
              <div className='flex flex-col items-end gap-5 '>
                <span className='font-medium'>30.000.000 VNĐ</span>
                <span>Số lượng: 3</span>
              </div>
            </div>

            <div className='text-[14px] p-[24px] rounded-lg bg-[#c0bebe3f] flex justify-between items-center'>
              <div className='flex items-center gap-5'>
                <div className='w-[100px] h-[100px]'>
                  <img className='object-cover' src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTiFUVJ3gV2PJwAlILJS24uapdocrcEmzW2R_dz_hOLw9pvrbHsINkPYuGb-lkiWhXkkL11ZpZZwcP14Yi0tvg_Cv3jov8LTLxYlbQjB2vfX6fJ93ZovK4gR1lc&usqp=CAE" alt="" />
                </div>
                <div className='flex flex-col gap-5'>
                  <span className='font-medium text-[16px]'>Iphone 15 Promax 1TB</span>
                  <span>ID:11234</span>
                </div>
              </div>
              <div className='flex flex-col items-end gap-5 '>
                <span className='font-medium'>30.000.000 VNĐ</span>
                <span>Số lượng: 3</span>
              </div>
            </div>

          </div>
        </div>



      </div>
      <div className=' row-span-2 bg-white p-[16px] gap-5 flex flex-col rounded-lg shadow-lg box-border'>
        <div className='w-full'>
          <span className='text-[24px] font-medium'>Khách mua</span>

        </div>
        <div className='flex border border-t-0 border-l-0  border-r-0 py-[15px] gap-3 items-center'>
          <div className='w-[50px] h-[50px]  rounded-full overflow-hidden'>
            <img className='object-cover' src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-1/370806166_3341899006026926_5652140347426452061_n.jpg?stp=dst-jpg_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=dZ_Nu8wRLDYQ7kNvgFc2SaN&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=Ad7EQ_yznO5jU3F0m_NA0A-&oh=00_AYCx4rrRw9vLsFpiFbBkBZypo_yJYRvKgnlHDEfmCuEODA&oe=6713AC0D" alt="" />
          </div>
          <div className='text-[14px]  flex flex-col  justify-center gap-[6px] text-[#737373]'>
            <span className='text-[20px] font-medium text-black'>
              Phạm Ngọc Duy
            </span>
            <div className='flex gap-2 items-center'>
              <p className='w-[10px] h-[10px] bg-[#03e003] rounded-full'></p>
              <span>
                Khách hàng
              </span>
            </div>

          </div>
        </div>
        <div className='flex border border-t-0 border-l-0  border-r-0 py-[15px] gap-3 items-center'>
          <div className='text-[14px]  flex flex-col  justify-center gap-[6px] text-[#737373]'>

            <div className='flex gap-2 items-center'>
              <MdOutlineMail />

              <span>
                duy123@gmail.com
              </span>
            </div>
            <div className='flex leading-[2] gap-2 items-center'>
              <FiPhone />

              <span>
                0123456778
              </span>
            </div>


          </div>
        </div>
        <div className='flex leading-[2]  border border-t-0 border-l-0  border-r-0 py-[15px] gap-3 items-center'>
          <div className='text-[14px]  flex flex-col  justify-center gap-[6px] text-[#737373]'>
            <span className='text-[17px] font-medium text-black'>
              Thông tin người đặt hàng
            </span>
            <div className='flex gap-2 items-center'>
              <span className='font-medium'>Tên :</span>
              <span>
                Phạm Ngọc Duy
              </span>
            </div>
            <div className='flex gap-2 items-center'>
              <span className='font-medium'>Số điện thoại :</span>
              <span>
                0123456778
              </span>
            </div>
            <div className='flex gap-2 items-center'>
              <span className='font-medium'>Email :</span>
              <span>
                duy123@gmail.com
              </span>
            </div>
            <div className='flex gap-2 items-center'>
              <span className='font-medium'>Địa chỉ hiện tại :</span>
              <span>
                Phan Bội Hữu, Thanh Xuân, Hà Nội
              </span>
            </div>

          </div>
        </div>
        <div className='flex leading-[2] py-[15px] gap-3 items-center'>
          <div className='text-[14px]  flex flex-col  justify-center gap-[6px] text-[#737373]'>
            <span className='text-[17px] font-medium text-black'>
              Thông tin người nhận
            </span>
            <div className='flex gap-2 items-center'>
              <span className='font-medium'>Tên :</span>
              <span>
                Nguyễn Khách Việt Quang
              </span>
            </div>
            <div className='flex gap-2 items-center'>
              <span className='font-medium'>Số điện thoại :</span>
              <span>
                0123456778
              </span>
            </div>
            <div className='flex gap-2 items-center'>
              <span className='font-medium'>Email :</span>
              <span>
                quang123@gmail.com
              </span>
            </div>
            <div className='flex gap-2 items-center'>
              <span className='font-medium'>Địa chỉ hiện tại :</span>
              <span>
                12a,Phan Bội Hữu, Thanh Xuân, Hà Nội
              </span>
            </div>

          </div>
        </div>



      </div>
      <div className='bg-blue-600 h-auto xl:col-span-2'>
        <div className='flex flex-col gap-7 h-full   bg-white p-[16px] rounded-lg  shadow-lg box-border col-span-2'>
          <div className='flex text-[24px] font-medium w-[100%] h-auto'>
            Thanh Toán
          </div>
          <div className='min-h-[50px] overflow-y-scroll flex flex-col gap-3 scrollbar'>
            <div className='text-[14px]  flex flex-col leading-[2] justify-center gap-[6px] text-[#737373]'>
              <div className='flex gap-2 justify-between items-center'>
                <span className='font-medium'> Giá gốc</span>
                <span>
                  19.999.999 VNĐ
                </span>
              </div>
              <div className='flex gap-2 justify-between items-center'>
                <span className='font-medium'> Áp mã giảm giá</span>
                <span>
                  ̀500.000 VNĐ
                </span>
              </div> <div className='flex gap-2 justify-between items-center'>
                <span className='font-medium'> Giá đã giảm</span>
                <span>
                  18.499.000 VNĐ
                </span>
              </div>
              <div className='flex gap-2 justify-between items-center'>
                <span className='font-medium'> Phí khác </span>
                <span>
                  ̀Không có
                </span>
              </div>
              <div className='flex gap-2 justify-between items-center'>
                <span className='font-medium text-[black]'> Tổng </span>
                <span className='text-[black]'>
                  ̀18.499.000 VNĐ
                </span>
              </div>
              <div className='flex gap-2 justify-between items-center'>
                <span className='font-medium'>Phương thức thanh toán</span>
                <span>
                  Chuyển khoản
                </span>
              </div>




            </div>


          </div>
        </div>


      </div>
      <div className='bg-white p-[16px] h-[200px] flex flex-col items-center rounded-lg shadow-lg box-border '>
        <div className='w-full'>
          <span className='text-[24px] font-medium'>Lưu ý</span>

        </div>
        <div className='text-[#737373] py-[30px] font-normal w-[95%] text-[14px] text-justify leading-[2]'>
          Nếu có bất kỳ vấn đề hoặc sự chậm trễ nào với đơn đặt hàng của tôi, xin vui lòng liên hệ với tôi, tôi đánh giá cao sự giao tiếp rõ ràng và đánh giá cao sự chú ý của bạn đến từng chi tiết
        </div>
      </div>
      <div className='bg-white xl:col-span-2'>
        <div className='flex flex-col gap-7 h-full   bg-white p-[16px] rounded-lg  shadow-lg box-border col-span-2'>
          <div className='flex text-[24px] font-medium w-[100%] h-auto'>
            Tình trạng đơn hàng
          </div>
          <div className='min-h-[50px] flex flex-col gap-3'>
            <Timeline mode="alternate"
              items={timeline}
            >

            </Timeline>

          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminOrderDetail