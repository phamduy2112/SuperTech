import { Button, Form, Input, Modal, Steps } from 'antd';
import React, { useState } from 'react'
import '../css/ModalEdit.css'
function ModalChangePassword() {
    const [page,setPage]=useState(1);
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
      setPage(1)
    };
    const handleOk = () => {
      setIsModalOpen(false);
      setPage(1)
    };
    const handleCancel = () => {
      setIsModalOpen(false);
      setPage(1)
    };
  return (
    <div className=''>
        <button onClick={showModal}
        className="p-[1rem] border text-[1.6rem] border-[#7500CF] text-[#7500CF]"
        >Đổi mật khẩu</button>
   
 
  <Modal title="Đổi mật khẩu" className='modal-edit' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
{
  page==1 ?( <div>
     <Steps
    current={0}
    percent={60}
    labelPlacement="vertical"
    items={[
   
      {
        title: 'Mật khẩu',
      
     
      },
      {
        title: 'Đổi mật khẩu',
      
      },
    ]}
  />

    <Form
       name="wrap"
       layout="vertical"
     >
       <Form.Item
         label="Mật khẩu cũ"
         name="username"
      
            >
         <Input />
       </Form.Item>
       <div className='flex gap-[1rem] justify-end button-edit'>
       <Button type="default"
           onClick={()=>{}}
           >Hủy</Button>
           <Button type="primary"
           onClick={()=>{setPage(2)}}
           >Tiếp tục</Button>
       
         </div>
     </Form>
    </div>) :( <div>
      <Steps
    current={1}
    percent={60}
    labelPlacement="vertical"
    items={[
   
      {
        title: 'Mật khẩu',
      
     
      },
      {
        title: 'Đổi mật khẩu',
      
      },
    ]}
  />
      <p className='text-[1.3rem]'>
  Cập nhật mật khẩu của bạn thành mật khẩu an toàn hơn. Mật khẩu mới của bạn phải dài ít nhất 8 ký tự, chứa ít nhất một chữ hoa, một chữ thường và một số. 
  </p>
 <Form
    name="wrap"
    layout="vertical"
  >
    <Form.Item
      label="Mật khẩu mới"
      name="username"
   
         >
      <Input />
    </Form.Item>
    <Form.Item
      label="Nhập lại mật khẩu"
      name="username"
   
         >
      <Input />
    </Form.Item>
    <div className='flex gap-[1rem] justify-end button-edit'>
       <Button type="default"
           onClick={()=>{}}
           >Hủy</Button>
           <Button type="primary"
           onClick={()=>{handleOk()}}
           >Đổi mật khẩu</Button>
       
         </div>
  </Form>
 </div>)
}
  </Modal> 
    </div>
  
  )
}

export default ModalChangePassword