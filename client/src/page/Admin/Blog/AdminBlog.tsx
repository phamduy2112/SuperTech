/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Table } from "antd";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2
import { BiSolidEdit } from "react-icons/bi";
import { CiBookmarkRemove } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  getAllBlogmediaThunk,
  getAllBlogThunk,
  setListBlog,
} from "../../../redux/blogredux/blog.slice";
import { TbPlaylistAdd } from "react-icons/tb";

function AdminBlog() {
  const ListBlog: any = useAppSelector((state) => state.listBlogStore.listBlog);
  const AppDispatch = useAppDispatch();

  useEffect(() => {
    AppDispatch(getAllBlogThunk());
    AppDispatch(getAllBlogmediaThunk());
  }, [AppDispatch]);

  const [data, setData] = useState<[]>();
  const [FilteredData, setFilteredData] = useState<[]>();

  const [statebuton, setsatebuton] = useState<number | null>(null);

  const socket = useAppSelector((state) => state.socket.socket);
  useEffect(() => {
    if (socket) {
      socket.on("GetAllBlog", (pvc) => {
        setData(pvc);
      });
      socket.on("ClickGetAllBlog", (pvc) => {
        setData(pvc);
      });
    }
  }, [AppDispatch, socket]);

  useEffect(() => {
    AppDispatch(setListBlog(data));
  }, [AppDispatch, data]);

  useEffect(() => {
    setFilteredData(ListBlog);
  }, [ListBlog]);

  const confirmDelete = (post_id: number) => {
    console.log(post_id);

    Swal.fire({
      title: "Bạn có chắc chắn muốn xóa?",
      text: "Hành động này không thể hoàn tác!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Xóa",
      cancelButtonText: "Hủy",
    }).then((result) => {
      if (result.isConfirmed) {
        if (socket) {
          socket.emit("deleteBlog", post_id);
        }
        Swal.fire("Đã Xóa!", "Bài viết đã được xóa.", "success");
      }
    });
  };

  const FilterType = (type: string) => {
    let NewData = [...(FilteredData || [])]; // Bản sao an toàn của mảng data

    if (type === "oldest") {
      NewData.sort((a: any, b: any) => {
        return (
          new Date(a.post_date).getTime() - new Date(b.post_date).getTime()
        );
      });
      setsatebuton(2);
      setFilteredData(NewData);
    }

    if (type === "newest") {
      NewData.sort((a: any, b: any) => {
        return (
          new Date(b.post_date).getTime() - new Date(a.post_date).getTime()
        );
      });

      setFilteredData(NewData);
      setsatebuton(1);
    }
  };

  // Cấu hình cột của bảng
  const columns = [
    {
      title: "ID",
      dataIndex: "post_id",
      key: "post_id",
    },
    {
      title: "Tiêu đề",
      dataIndex: "post_title",
      key: "post_title",
    },
    {
      title: "Nội dung",
      dataIndex: "post_content",
      key: "post_content",
    },
    {
      title: "URL Hình ảnh",
      dataIndex: "media_url",
      key: "media_url",
      render: (text) => (
        <a href={text} target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      ),
    },
    {
      title: "Ngày đăng",
      dataIndex: "post_date",
      key: "post_date",
    },
    {
      title: "Tác Vụ",
      key: "actions",
      render: (record: any) => (
        <div className="flex text-[24px] box-border gap-1 items-center">
          <BiSolidEdit className="cursor-pointer text-[#9000ff67] transition-all duration-700 hover:text-[#9000ffcb]" />
          <CiBookmarkRemove
            className="cursor-pointer text-red-300 transition-all duration-700 hover:text-[red]"
            onClick={() => confirmDelete(record.post_id)}
          />
        </div>
      ),
    },
  ];

  const Header = () => (
    <div className="flex items-center justify-between box-border p-[24px]">
      <span className="text-[30px] font-medium text-[#ffd700]">Bài Viết</span>
      <div className="flex gap-3">
        <Button className="p-10">Tải về PDF</Button>
        <Link to="/admin/quan-li-bai-viet/quan-li-binh-luan-bai-viet">
          <Button className="p-10" color="danger" variant="solid">
            Xem Bình Luận Bài Viết
          </Button>
        </Link>
        <Link to={"/admin/quan-li-bai-viet/them-bai-viet-moi"}>
          <Button className="p-10" type="primary">
            <TbPlaylistAdd className="text-[18px]" />
            Bài Viết Mới
          </Button>
        </Link>
      </div>
    </div>
  );

  const SearchBar = () => (
    <div className="flex p-[24px] items-center justify-between gap-3">
      <div className="flex-1 flex bg-[#00000008] focus:outline-dotted rounded-lg p-[16px]">
        <input
          type="text"
          className="flex-1 text-[15px] outline-none bg-transparent"
          placeholder="Tìm kiếm bài viết..."
          onChange={(e) => OnchangeInput(e)}
        />
      </div>
      <div className="flex gap-3">
        <Button
          className={`p-10 ${statebuton === 1 ? "bg-blue-500 text-white" : ""}`}
          onClick={() => FilterType("newest")}
        >
          Mới Nhất
        </Button>

        <Button
          className={`p-10 ${statebuton === 2 ? "bg-blue-500 text-white" : ""}`}
          onClick={() => FilterType("oldest")}
        >
          Cũ Nhất
        </Button>
      </div>
    </div>
  );

  function OnchangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    const abc = FilteredData?.filter((item: any) =>
      item.post_title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredData(abc);
  }

  return (
    <div className="flex flex-col p-12 gap-5 bg-[#f2edf3]">
      <div className="flex-1 gap-3 bg-white flex flex-col rounded-xl shadow-lg">
        <Header />
        <SearchBar />
        <Table
          columns={columns}
          dataSource={FilteredData}
          size="large"
          pagination={{ pageSize: 10 }}
        />
      </div>
    </div>
  );
}

// Component Header
const Header = () => (
  <div className="flex items-center justify-between box-border p-[24px]">
    <span className="text-[30px] font-medium text-[#ffd700]">Bài Viết</span>
    <div className="flex gap-3">
      <Button className="p-10">Tải về PDF</Button>
      <Link to="/admin/quan-li-bai-viet/quan-li-binh-luan-bai-viet">
        <Button className="p-10" color="danger" variant="solid">
          Xem Bình Luận Bài Viết
        </Button>
      </Link>
      <Link to={"/admin/quản-lí-bài-viết/thêm-bài-viết-mới"}>
        <Button className="p-10" type="primary">
          <TbPlaylistAdd className="text-[18px]" />
          Bài Viết Mới
        </Button>
      </Link>
    </div>
  </div>
);

// Component SearchBar
const SearchBar = ({ setSearchQuery, setFilterType, filterType }) => (
  <div className="flex p-[24px] items-center justify-between gap-3">
    <div className="flex-1 flex bg-[#00000008] focus:outline-dotted rounded-lg p-[16px]">
      <input
        type="text"
        className="flex-1 text-[15px] outline-none bg-transparent"
        placeholder="Tìm kiếm bài viết..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
    <div className="flex gap-3">
      <Button
        className={`p-10 ${
          filterType === "newest" ? "bg-blue-500 text-white" : ""
        }`}
        onClick={() => setFilterType("newest")}
      >
        Mới Nhất
      </Button>
      <Button
        className={`p-10 ${
          filterType === "oldest" ? "bg-blue-500 text-white" : ""
        }`}
        onClick={() => setFilterType("oldest")}
      >
        Cũ Nhất
      </Button>
    </div>
  </div>
);

// Component TableContent
const TableContent = ({ columns, data }) => (
  <div className="p-[24px]">
    <Table
      columns={columns}
      dataSource={data}
      size="large"
      pagination={{ pageSize: 10 }}
    />
  </div>
);

export default AdminBlog;
