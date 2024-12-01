import React, { useState, useRef } from 'react';
import ReactQuill from 'react-quill';

function AdminAddBlog() {
  const [value, setValue] = useState('');
  const quillRef = useRef();

  // Các tùy chọn của toolbar cho Quill
  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],
    ['link', 'image', 'video'],
    [{ 'header': 1 }, { 'header': 2 }],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'indent': '-1' }, { 'indent': '+1' }],
    ['clean']
  ];

  // Hàm upload ảnh lên Cloudinary và chèn vào Quill
  const handleImageUpload = (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'uploadBlog');  // Đảm bảo upload preset đã được tạo trên Cloudinary
    formData.append('folder', 'Blog');  // Folder lưu ảnh trên Cloudinary

    fetch('https://api.cloudinary.com/v1_1/dcvkmhlhw/image/upload', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      if (data.secure_url) {
        const editor = quillRef.current.getEditor();
        const range = editor.getSelection();
        // Chèn ảnh vào Quill tại vị trí con trỏ
        editor.insertEmbed(range.index, 'image', data.secure_url);
      }
    })
    .catch(error => console.error('Error uploading image: ', error));
  };

  return (
    <div className="flex-1 p-24 bg-[#f2edf3]">
      <div className="bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-semibold">Bài Viết</h2>

        <div className="mt-4">
          <label htmlFor="title">Tiêu đề bài viết</label>
          <input type="text" className="w-full p-2 mt-2" id="title" name="title" />
        </div>

        <div className="mt-4">
          <label htmlFor="content">Nội dung bài viết</label>
          <ReactQuill
            ref={quillRef}
            theme="snow"
            value={value}
            onChange={setValue}
            modules={{
              toolbar: {
                container: toolbarOptions,
                handlers: {
                  image: () => {
                    const input = document.createElement('input');
                    input.setAttribute('type', 'file');
                    input.setAttribute('accept', 'image/*');
                    input.click();

                    input.onchange = () => {
                      const file = input.files[0];
                      if (file) {
                        handleImageUpload(file);
                      }
                    };
                  },
                },
              },
            }}
            formats={['bold', 'italic', 'underline', 'link', 'image']}
            className="bg-white flex-1 shadow-lg rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default AdminAddBlog;
