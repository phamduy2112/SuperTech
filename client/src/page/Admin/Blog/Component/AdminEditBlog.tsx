import React, { useState } from 'react'
import ReactQuill from 'react-quill'

function AdminEditBlog() {
  const [value, setValue] = useState('')
  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
    ['link', 'image', 'video', 'formula'],

    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction

    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean']
  ];

  return (
    <div className=' flex-1 grid grid-cols-1 p-[24px] bg-[#f2edf3]'>

      <div className='bg-white min-h-[1500px] shadow-lg rounded-xl row-span-2 leading-[2] box-border p-[24px] gap-6 flex flex-col'>
        <span className='text-[30px] font-medium text-[#ffd700]'>Sửa Bài Viết</span>

        <div className='flex h-auto flex-col gap-4'>
          <label htmlFor='quantity' className='text-[13px] text-[#81818177] font-medium'>Tiêu đề bài viết</label>
          <input type='text' className='h-[48px] bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px] p-[12px] outline-none' id='quantity' name='quantity' required />
        </div>
        <div className='flex h-auto flex-col gap-4'>
          <label htmlFor='quantity' className='text-[13px] text-[#81818177] font-medium'>Url</label>
          <input type='text' className='h-[48px] bg-[#81818113] focus:text-[white] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px] p-[12px] outline-none' id='quantity' name='quantity' required />
        </div>

        <div className='flex flex-col h-full w-full gap-4'>
          <label htmlFor='quantity' className='text-[13px] text-[#81818177] font-medium'>Nội dung bài viết</label>
          <ReactQuill
            theme='snow'
            value={value}
            onChange={setValue}
            modules={{
              toolbar: toolbarOptions,
            }}
            className='bg-white flex-1 shadow-lg rounded-xl row-span-2  gap-3 flex flex-col'
          />
        </div>

      </div>

    </div>
  )
}

export default AdminEditBlog