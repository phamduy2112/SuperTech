import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { FiMinus } from 'react-icons/fi';
import { GoPlus } from 'react-icons/go';
import { IoMdClose } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../../../redux/hooks';
import { decreaseItemQuantity, inCreaseItemQuantity, removeItemFromCart } from '../../../../../../redux/cart/cart.slice';
import { formatCurrencyVND, truncateText } from '../../../../../../utils';
import img from '../../../../../../assets/pngwing.com 1.png'
interface TaskCart {
  onClose: () => void;
}

function TaskCart({ onClose }: TaskCart) {
  const dispatch = useAppDispatch();

  const listCart = useAppSelector((state) => state.cart.listCart);
  console.log(listCart);
  
  const totalItem = useAppSelector((state) => state.cart.totalItems);

  const handleRemoveItem = (product_id: any) => {
    dispatch(removeItemFromCart({ product_id }));
  };

  const decreaseItem = (product_id: any) => {
    dispatch(decreaseItemQuantity({ product_id }));
  };

  const inCreaseItem = (product_id: any) => {
    dispatch(inCreaseItemQuantity({ product_id }));
  };

  const navigate = useNavigate();

  return (
    <div className='w-[350px] h-[100vh] bg-[#E5E5E5] absolute top-0 right-0'>
      <div className='w-[100%] py-[2rem] px-[1rem] flex justify-between items-center'>
        <div className='text-[1.8rem] font-semibold'>
          GIỎ HÀNG
        </div>
        <div className='text-[2rem] cursor-pointer' onClick={onClose}>
          <IoMdClose />
        </div>
      </div>
      {listCart.length>0 ? (
        <div>
        <div className='bg-[white] px-2 py-[1rem]'>
               
               {listCart.map((item) => {
                 return (
                   <div key={item.product_id} className='flex py-[1rem] border border-b-[gray]'>
                     <div className='w-[90px]'>
                       <img
                         className='w-[100%]'
                         src="https://cdn.tgdd.vn/Products/Images/42/303825/iphone-15-plus-512gb-xanh-thumb-600x600.jpg"
                         alt=""
                       />
                     </div>
                     <div className='w-[65%]'>
                       <h3 className='text-[1.6rem] font-semibold'>
                         {truncateText(item?.product_name,20)}
                         </h3>
                         <p className='text-[1.5rem] mt-[.5rem]'>
                           {item?.selectedStorage !=undefined? `${item?.selectedStorage?.storage} MB/` :''}
                           {item?.selectedColor !=undefined? `${item?.selectedColor?.color}` :''}
                         </p>
                         <div className='py-[.5rem]'>
                         {item?.product_discount > 0 ? (
                                   <span className="text-customColor font-semibold text-[1.6rem] ">
                                     {formatCurrencyVND(
                                       Number(item?.product_price) *
                                         (1 - Number(item?.product_discount / 100))
                                     )}
                                     <span className="text-gray-400 font-semibold line-through text-[1.5rem] ">
                                       {formatCurrencyVND(item?.product_price)}
                                     </span>
                                   </span>
                                 ) : (
                                   <span className="text-customColor font-semibold  text-[1.6rem] ">
                                     {formatCurrencyVND(item?.product_price)}
                                   </span>
                                 )}
                         </div>
                     
                       {/* <p className='text-[#7500CF] font-semibold text-[1.6rem] py-[.5rem]'>30.000.000 đ
                         <span style={{ textDecoration: 'line-through' }} className='text-[1.5rem] text-[gray]'>28.000.000</span>
                       </p> */}
                       <div className='text-[1.6rem] border border-[#7500CF] flex items-center w-[33%] justify-between'>
                         <div className='border text-[1.7rem] border-r-[#7500CF] py-1 cursor-pointer'>
                           <FiMinus onClick={() => decreaseItem(item.product_id)} />
                         </div>
                         <div>{item.quantity}</div>
                         <div className='border text-[1.7rem] border-l-[#7500CF] py-1 cursor-pointer'>
                           <GoPlus onClick={() => inCreaseItem(item.product_id)} />
                         </div>
                       </div>
                     </div>
                     <div className='text-[2rem] cursor-pointer text-[#7500CF]' onClick={() => handleRemoveItem(item.product_id)}>
                       <FaTrash />
                     </div>
                   </div>
                 );
               })}
        
               <div className='flex justify-end pt-6'>
                 <h4 className='text-[1.5rem] font-semibold'>Tổng đơn: <span>0 đ</span></h4>
               </div>
             </div>
        
             <div className='w-[100%] bg-[#7500CF] py-[1rem] px-[1rem] cursor-pointer'>
               <div className='text-[1.5rem] text-white text-center' onClick={() => navigate('/giỏ-hàng')}>
                 Xem Giỏ Hàng
               </div>
             </div>
        </div>
      ) :<div className='text-[1.5rem] flex justify-center flex-col items-center'>
        <img src={img} alt="" className='w-[20rem]'/>
        <div className='text-[1.7rem] py-5'>Chưa có sản phẩm trong giỏ hàng</div>
        <button className='w-[10rem] h-[3.5rem] bg-customColor text-white'>Quay lại</button>
        </div>}

 
    </div>
  );
}

export default TaskCart;
