/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { DataSideBar } from './Data_Url_Title';
import { CiLogout } from 'react-icons/ci';
import './Sidebar.css';

function AdminSideBar() {
    
    const [openBoxIndex, setOpenBoxIndex] = useState(1); 
    const [openBoxChild, setBoxChild] = useState(null); 
    const [openChildIndex, setOpenChildIndex] = useState(1); 

    

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function toggleBox(boxId:any, box_id:any) {
        setOpenBoxIndex(openBoxIndex === boxId ? boxId : boxId);
        if (boxId === 6) {
            setBoxChild(openBoxChild === box_id ? box_id : box_id);
        }
    }
  
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function toggleChild(ChildId:any) {
        setOpenChildIndex(openChildIndex === ChildId ? ChildId : ChildId);
    }
  

    return (
        <div className='z-10 w-[310px] fixed h-full text-white bg-[#4B0085] overflow-y-auto scrollbar-custom'>
            <div className='text-[30px] font-extrabold h-[80px] flex flex-col justify-center items-center gap-3'>
                <span>SuperTech</span>
                <div className='bg-slate-200 w-[163px] h-[0.5px]'></div>
            </div>
            
            {DataSideBar.map((item, i) => (
                <div key={i} className='p-[12px] grid grid-cols-1 box-border'>
                    <span className='text-[10px] text-[#ffffffb0] font-bold'>{item.title}</span>
                    {Array.isArray(item.box) && item.box.length > 0 && (
                        <>
                            {item.box.map((box, j) => (
                                <div key={j} className='grid grid-cols-1 py-[12px] box-border justify-center items-start auto-rows-auto'>
                                    <div
                                        onClick={() => toggleBox(item.id, box.box_id)}
                                        className={`transition-all ${item.box.length > 1 ? (openBoxIndex === item.id ? (openBoxChild === box.box_id ? 'bg-[#ffffff36] duration-700' : 'duration-[500ms]') : '') : (openBoxIndex === item.id ? 'bg-[#ffffff36]' : 'duration-[500ms]')} flex items-center box-border w-full h-[46px] rounded cursor-pointer`}
                                    >
                                        <span className='ml-[12px] text-[24px]'>{box.icon}</span>
                                        <span className='ml-[12px] font-medium text-[15px]'>{box.box_title}</span>
                                        {box.iconChevronRight && (
                                            <span className={`transition-all text-[20px] ${openBoxIndex === item.id ? 'transform rotate-90 duration-500' : 'transform rotate-0 duration-500'} ml-[78px]`}>
                                                {box.iconChevronRight}
                                            </span>
                                        )}
                                    </div>
                                    {Array.isArray(box.child) && box.child.length > 0 && (
                                        <div
                                            className={`transition-all overflow-hidden cursor-pointer ${openBoxIndex === item.id ? 'max-h-screen duration-1000' : 'max-h-0 duration-[600ms]'}`}
                                        >
                                            {box.child.map((child, k) => (
                                                <div key={k} onClick={() => toggleChild(child.id_child)} className={`${openChildIndex === child.id_child ? 'bg-[#ffffff36]' : 'duration-[500ms]'} w-full h-[46px] box-border flex items-center`}>
                                                    <span className='ml-[42px] text-[24px]'>{child.icon_child}</span>
                                                    <span className='ml-[12px] text-[15px] font-medium'>{child.title_child}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </>
                    )}
                </div>
            ))}
            <div className='flex text-[13px] justify-center items-center gap-4'>
                <span className='text-[#FFCC00] text-[20px]'><CiLogout /></span>
                <span>Đăng Xuất</span>
            </div>
        </div>
    );
}

export default AdminSideBar;
