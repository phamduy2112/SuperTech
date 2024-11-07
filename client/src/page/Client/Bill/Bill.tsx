import React from 'react'
import { Container } from '../../../components/Style/Container'
import { Steps } from 'antd'

function Bill() {
  return (
    <Container>
        <div className=' py-6 text-[1.5rem]'>
            <div className="my-[1.5rem] text-[1.5rem] text-gray-600">
              <a href="/" className="text-customColor hover:underline">
                Trang chủ
              </a>
              <span className="mx-2">/</span>
              <span>Xuất hóa đơn</span>
            </div>
            <div className='xll:w-[40%] lg:w-[60%] mx-auto my-[2rem] p-[2rem]'>
                <Steps
                  current={0}
                  percent={60}
                  items={[
                    {
                      title: 'Đơn hàng',
                
                    },
                    {
                      title: 'Thanh toán',
                    
                  
                    },
                    {
                      title: 'Xuất hoá đơn',
                    
                    },
                  ]}
                />
             </div>
        </div>
    </Container>
  )
}

export default Bill