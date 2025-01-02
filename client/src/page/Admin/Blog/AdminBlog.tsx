import { Button, Checkbox, List, Popover, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'; // Import SweetAlert2
import { FiFilter } from 'react-icons/fi';
import { GoSearch } from 'react-icons/go';
import { IoCloudDownloadOutline } from 'react-icons/io5';
import { BiSolidEdit } from 'react-icons/bi';
import { CiBookmarkRemove } from 'react-icons/ci';
import { TbPlaylistAdd } from 'react-icons/tb';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import DOMPurify from 'dompurify';
import { truncateText } from '../../../utils';
import { deleteBlogThunk, getAllBlogThunk } from '../../../redux/blogredux/blog.slice';

function AdminBlog() {
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ListBlog: any = useAppSelector((state) => state.blog.listBlog);


  const dispatch=useAppDispatch();
  useEffect(() => {
    dispatch(getAllBlogThunk());
  }, [dispatch]);
console.log(ListBlog);



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
      width: 700,
      render: (text) => (
        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(truncateText(text,60)) }} />
      ),
    },
    {
      title: "URL Hình ảnh",
      dataIndex: "media_url",
      key: "media_url",
      render: (text, recoil) => {
        const mediaUrl =
            recoil?.media_posts?.[0]?.media_url || "https://via.placeholder.com/100";
    
        return (
            <img
                src={`https://res.cloudinary.com/dcvkmhlhw/image/upload/v1732821311/Blog/${mediaUrl}`}
                alt="Hình ảnh"
                className="w-[100px] h-[100px] object-cover"
            />
        );
    }
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
            onClick={() => hanldClickDelete(record.post_id)}
            className="cursor-pointer text-red-300 transition-all duration-700 hover:text-[red]"
          />
        </div>
      ),
    },
  ];

  const hanldClickDelete = (post_id: number) => {

    dispatch(deleteBlogThunk(post_id));
  }









  const [valueInputSearch, setvalueInputSearch] = useState(``);
  const [DataBlog, setDataBlog] = useState<any[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setvalueInputSearch(e.target.value);
  }
const [selectedCheckbox, setSelectedCheckbox] = useState('');

  useEffect(() => {
    const sortedList = [...ListBlog];
    if (selectedCheckbox.toLowerCase() === 'new') {
      sortedList.sort((a, b) => new Date(b?.post_date).getTime() - new Date(a?.post_date).getTime());

    } else {
      sortedList.sort((a, b) => new Date(a?.post_date).getTime() - new Date(b?.post_date).getTime());

    }
    setDataBlog(sortedList);
  }, [ListBlog, selectedCheckbox]);

  useEffect(() => {
    setDataBlog(ListBlog)
  }, [ListBlog])

  useEffect(() => {
    if (valueInputSearch.trim() === "") {
      setDataBlog(ListBlog);
    } else {
      const sanitizedSearchTerm = valueInputSearch.replace(/\s+/g, '').toLowerCase();

      const filteredData = ListBlog.filter((item: any) => {
        const post_title = item?.post_title;

        // Kiểm tra kiểu dữ liệu và xử lý khi post_title là null hoặc undefined
        const post_titleString = typeof post_title === 'string' ? post_title : String(post_title || '');

        // Loại bỏ khoảng trắng và chuyển về chữ thường
        return post_titleString.replace(/\s+/g, '').toLowerCase().includes(sanitizedSearchTerm);
      });

      setDataBlog(filteredData);
    }
  }, [valueInputSearch, ListBlog]);


  return (
    <div className='flex  flex-col p-12 gap-5 bg-[#f2edf3]'>
      <div className='flex-1 gap-3 bg-white flex flex-col rounded-xl shadow-lg'>
        <div className='flex items-center justify-between box-border p-[24px]'>
          <span className='text-[30px] font-medium text-[#ffd700]'>Bài Viết</span>
          <div className='flex gap-3'>
            <Button className='p-10'>
              <IoCloudDownloadOutline className='text-[18px]' />
              Tải về PDF
            </Button>
            <Link to={'/admin/quản-lí-bài-viết/quản-lí-bình-luận-bài-viết'}>
              <Button className='p-10' color="danger" variant="solid">
                Xem Bình Luận Bài Viết
              </Button>
            </Link>
            <Link to={'/admin/quan-li-bai-viet/them-bai-viet-moi'}>
              <Button className='p-10' type="primary">
                <TbPlaylistAdd className='text-[18px]' />
                Bài Viết Mới
              </Button>
            </Link>
          </div>
        </div>

        <div className='flex p-[24px] items-center justify-between gap-3'>
          {/* <div className='flex-1 flex bg-[#00000008] focus:outline-dotted rounded-lg p-[16px]'>
            <input type="text" className='flex-1 text-[15px] outline-none bg-transparent' onChange={handleSearch} placeholder='Tìm kiếm bài viết' />
            <GoSearch className='text-[18px]' />
          </div> */}

          <Popover
            content={<div className='flex flex-col'>


              {/* <div className='flex justify-between p-[12px] w-[200px] gap-2'>
                <label className='text-[14px]'>Mới nhất</label>
<Checkbox checked={selectedCheckbox === 'new'} onChange={() => setSelectedCheckbox('new')}></Checkbox>
              </div>
              <div className='flex gap-2 justify-between p-[12px]'>
                <label className='text-[14px]'>Cũ nhất</label>
                <Checkbox checked={selectedCheckbox === 'old'} onChange={() => setSelectedCheckbox('old')}></Checkbox>
              </div> */}



            </div>}
            title="Lọc"
            trigger="click"
            placement="bottomRight"
          >
            <Button className='p-10'>
              <FiFilter className='text-[18px]' />
              Lọc
            </Button>
          </Popover>
        </div>

        <div className='p-[24px] relative overflow-x-auto h-[1000px] flex flex-col'>
           <Table
            className='flex-1'

            columns={columns}
            dataSource={ListBlog}
            size='large'
            pagination={{ pageSize: 10 }}
          /> 
        </div>
      </div>
    </div >
  );
}

export default AdminBlog;
