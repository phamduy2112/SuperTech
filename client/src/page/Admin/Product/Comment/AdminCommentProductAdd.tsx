import { Button, Modal } from 'antd';
import React, { useState } from 'react'
import { TbPlaylistAdd } from 'react-icons/tb';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function AdminCommentProductAdd() {

    const [isModalOpen, setIsModalOpen] = useState(true);
    const ShowModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Button onClick={ShowModal} className='p-10' type="primary">
                <TbPlaylistAdd className='text-[18px]' />
                Bình Luận Sản Phẩm Mới
            </Button>
            <Modal title={`Tạo bình luận sản phẩm mới`} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText="Thêm"
                cancelText="Hủy bỏ">
                <form action="">
                    <div className='flex h-auto col-span-2 flex-col gap-4'>
                        <label htmlFor='ten_sp' className='text-[13px] text-[#81818177] font-medium'>Bình luận của tôi</label>
                        <input type='text' placeholder={`Chưa nhập`} className='h-[48px] bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px] p-[12px] outline-none  ' id='ten_sp' name='ten_sp' required />
                    </div>
                </form>
            </Modal>
        </>
    )
}


export default AdminCommentProductAdd