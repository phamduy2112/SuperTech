import React from 'react'
import { Container } from '../../../components/Style/Container'

function DetailProduct() {
  return (
    <Container>
      <div>
        <div>
          <div className='border border-b-red-600 border-transparent py-[2rem]'>
            <h3 className='font-semibold text-[2rem]'>iPhone 15 Pro Max 256GB Chính Hãng VN/A</h3>
          </div>
          <div className='flex'>
            <div className='w-[40%] p-[3rem]'>
              <div className='w-[100%]'>
            <img
            className='w-[100%]'
            src="https://cdn2.fptshop.com.vn/unsafe/384x0/filters:quality(100)/2023_9_13_638302298834482205_apw-s9-gps-41-dayvai-vang-1.jpg" alt="" />

              </div>
              <div className='flex items-center mt-[1rem] justify-center'>
                <div className='w-[15%]'>
                <img
              className=''
              src="https://cdn2.fptshop.com.vn/unsafe/384x0/filters:quality(100)/2023_9_13_638302298834482205_apw-s9-gps-41-dayvai-vang-1.jpg" alt="" />
                </div>
            
                <div className='w-[15%]'>
                <img
              className=''
              src="https://cdn2.fptshop.com.vn/unsafe/384x0/filters:quality(100)/2023_9_13_638302298834482205_apw-s9-gps-41-dayvai-vang-1.jpg" alt="" />
                </div>
                <div className='w-[15%]'>
                <img
              className=''
              src="https://cdn2.fptshop.com.vn/unsafe/384x0/filters:quality(100)/2023_9_13_638302298834482205_apw-s9-gps-41-dayvai-vang-1.jpg" alt="" />
                </div>
                <div className='w-[15%]'>
                <img
              className=''
              src="https://cdn2.fptshop.com.vn/unsafe/384x0/filters:quality(100)/2023_9_13_638302298834482205_apw-s9-gps-41-dayvai-vang-1.jpg" alt="" />
                </div>
            
              </div>
              <div>
                <h4>Thông tin sản phẩm</h4>
                <div>
                  <h5>Thông tin sản phẩm</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quia architecto nam alias reiciendis quod porro laborum magni itaque eum harum maxime sed, mollitia adipisci recusandae, quaerat qui hic quisquam assumenda necessitatibus ad in? Assumenda pariatur doloremque voluptatum, accusantium exercitationem dicta eum? Ab natus doloremque necessitatibus labore exercitationem perspiciatis minima?</p>
                </div>
              </div>
            </div>
            <div className='w-[40%]'>
              <div className='flex text-[2rem] text-center gap-[1rem] py-4'>
                <p className='text-[red] font-semibold'>27.000.000đ</p>
                <p className="text-[1.8rem] text-gray-500"  style={{textDecoration:"line-through"}}>31.000.000đ</p>
                <p className='text-[1.8rem] px-[1rem] py-[.5rem] border'>Giảm 30%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default DetailProduct