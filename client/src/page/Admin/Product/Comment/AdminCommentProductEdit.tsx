import { Modal } from 'antd';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../../redux/hooks';
import { getReplies_comment_productThunk } from '../../../../redux/comment/comment.slice';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function AdminCommentProductEdit(props: any) {
    const AlllistCommentReplies = useSelector((state: any) => state.listComment.listAllReplies_comment_product)

    const AppDispatch = useAppDispatch();

    console.log('ee', props);


    useEffect(() => {
        AppDispatch(getReplies_comment_productThunk(props.props.productId))
    }, [props.props.productId, AppDispatch])

    console.log(AlllistCommentReplies);






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

    useEffect(() => {
        ShowModal();
    }, [props.props])

    return (
        <>
            <Modal title={`Phản hồi bình luận sản phẩm thứ ${props.props.key}`} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText="Thêm"
                cancelText="Hủy bỏ">
                <form action="">
                    <div className='flex h-auto flex-col gap-4'>
                        <label htmlFor='ten_sp' className='text-[13px] text-[#81818177] font-medium'>Nội dung bình luận</label>
                        <input type='text' placeholder={props.props.content} disabled className='h-[48px] cursor-not-allowed bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px] p-[12px] outline-none  ' id='ten_sp' name='ten_sp' required />

                    </div>
                    <div className='flex h-auto col-span-2 flex-col gap-4 '>
                        <label htmlFor='ten_sp' className='text-[13px] text-[#81818177] font-medium'>Tên người bình luận</label>
                        <input type='text' placeholder={props.props.userName} disabled className='h-[48px] cursor-not-allowed bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px] p-[12px] outline-none  ' id='ten_sp' name='ten_sp' required />

                    </div>
                    <div className='flex h-auto col-span-2 flex-col gap-4 '>
                        <label htmlFor='ten_sp' className='text-[13px] text-[#81818177] font-medium'>Vai trò</label>
                        <input type='text' placeholder={props.props.role} disabled className='h-[48px] cursor-not-allowed bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px] p-[12px] outline-none  ' id='ten_sp' name='ten_sp' required />

                    </div>
                    <div className='flex h-auto col-span-2 flex-col gap-4'>
                        <label htmlFor='ten_sp' className='text-[13px] text-[#81818177] font-medium'>Tên sản phẩm</label>
                        <input type='text' placeholder={props.props.productName} disabled className='h-[48px] cursor-not-allowed bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px] p-[12px] outline-none  ' id='ten_sp' name='ten_sp' required />
                    </div>
                    <div className='flex h-auto col-span-2 flex-col gap-4'>
                        <label htmlFor='ten_sp' className='text-[13px] text-[#81818177] font-medium'>Ngày</label>
                        <input type='text' placeholder={props.props.date} disabled className='h-[48px] bg-[#81818113] cursor-not-allowed focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px] p-[12px] outline-none  ' id='ten_sp' name='ten_sp' required />
                    </div>

                    <div className='flex h-auto col-span-2 flex-col gap-4'>
                        <label htmlFor='ten_sp' className='text-[13px] text-[#81818177] font-medium'>Câu trả lời của tôi</label>
                        <input type='text' placeholder={`Chưa nhập`} className='h-[48px] bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px] p-[12px] outline-none  ' id='ten_sp' name='ten_sp' required />

                    </div>
                </form>
            </Modal>
        </>
    )
}

export default AdminCommentProductEdit