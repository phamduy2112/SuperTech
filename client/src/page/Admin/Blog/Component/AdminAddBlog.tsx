import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { createBlogThunk } from "../../../../redux/blogredux/blog.slice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

function AdminAddBlog() {
  const socket = useAppSelector((state) => state.socket.socket);
  const [value, setValue] = useState("");
  const AppDispatch = useAppDispatch();
  const Navigate = useNavigate();
  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],
    ["link", "image", "video", "formula"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"],
  ];

  const [title, setTitle] = useState("");
  const [url, setUrl] = useState(null); // Initial value should be null for files
  const [content, setContent] = useState("");

  const handleFileChange = (e) => {
    // const file = e.target.files[0]; // Get the first selected file
    setUrl(e.target.files[0]); // Set the file object in state
  };

  const obj = async () => {
    if (title && url && content) {
      const data = {
        post_title: title,
        media_url: url,
        post_content: content,
      };

      const payload = await AppDispatch(createBlogThunk(data));
      console.log("Payload", payload.payload.post_id);
      Navigate("/admin/quan-li-bai-viet");
      Swal.fire({
        icon: "success",
        title: "Thêm bài viết thành công",
        showConfirmButton: false,
      });
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="flex-1 grid grid-cols-1 p-[24px] bg-[#f2edf3]">
      <div className="bg-white min-h-[1500px] shadow-lg rounded-xl row-span-2 leading-[2] box-border p-[24px] gap-6 flex flex-col">
        <div className="flex justify-between">
          <span className="text-[30px] font-medium text-[#ffd700]">
            Bài Viết
          </span>
          <button onClick={obj}>
            <span className="text-[20px] bg-violet-600 rounded-xl px-7 py-4 hover:bg-violet-700 font-medium text-[#ffffff]">
              Thêm Bài Viết
            </span>
          </button>
        </div>

        <div className="flex h-auto flex-col gap-4">
          <label
            htmlFor="title"
            className="text-[13px] text-[#81818177] font-medium"
          >
            Tiêu đề bài viết
          </label>
          <input
            type="text"
            className="h-[48px] bg-[#81818113] focus:text-[#050101] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px] p-[12px] outline-none"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            name="quantity"
            required
          />
        </div>

        <div className="flex h-auto flex-col gap-4">
          <label
            htmlFor="file"
            className="text-[13px] text-[#81818177] font-medium"
          >
            Url
          </label>
          <input
            type="file"
            onChange={handleFileChange}
            className="h-[48px] bg-[#81818113] focus:text-[#000000] focus:bg-[#81818149] transition-all ease-in-out duration-500 rounded-lg text-[13px] p-[12px] outline-none"
            id="file"
            name="quantity"
            required
          />
        </div>

        <div className="flex flex-col h-full w-full gap-4">
          <label
            htmlFor="content"
            className="text-[13px] text-[#81818177] font-medium"
          >
            Nội dung bài viết
          </label>
          <ReactQuill
            id="content"
            value={content}
            onChange={setContent}
            modules={{
              toolbar: toolbarOptions,
            }}
            className="bg-white flex-1 shadow-lg rounded-xl row-span-2 gap-3 flex flex-col"
          />
        </div>
      </div>
    </div>
  );
}

export default AdminAddBlog;
