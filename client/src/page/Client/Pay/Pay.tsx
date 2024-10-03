import { Breadcrumb } from 'antd'
import React from 'react'

function Pay() {
  return (
    <div className='w-[80%] mx-auto'>
    <Breadcrumb
    items={[
      {
        title: <a href=''>Trang chủ</a>,
      },
      {
        title: "Thanh toán",
      },
 
    ]}
  />

    <div>

    </div>
    <div>
      <div className=''>
        <h3 className='text-[2.5rem]'>Thông tin thanh toán</h3>
      </div>
      <div></div>
    </div>
    </div>
  )
}

export default Pay