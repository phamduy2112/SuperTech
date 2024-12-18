import React, { useEffect } from "react";
import { Container } from "../../../../components/Style/Container";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { useParams } from "react-router-dom";
import {
  getAllBlogmediaThunk,
  getAllBlogThunk,
  getBlogByIdThunk,
} from "../../../../redux/blogredux/blog.slice";
import DOMPurify from 'dompurify';
// Component Breadcrumbs
function Breadcrumbs() {
  return (
    <div className="md:text-[1.5rem] md:py-6 px-10">
      <a href="/" className="text-violet-700 hover:underline">
        Trang chủ
      </a>
      <span className="mx-2">/</span>
      <a href="/bai-viet" className="text-violet-700 hover:underline">
        Bài Viết
      </a>
      <span className="mx-2">/</span>
      <span className="text-neutral-700">Chi tiết bài viết</span>
      <div>
        <span className="text-[30px] flex justify-center items-center font-medium text-violet-700">
          Chi tiết bài viết
        </span>
      </div>
    </div>
  );
}

function DetailBlog() {
  const ListBlog = useAppSelector((state) => state.blog.listBlog);
  const mediaPosts = useAppSelector((state) => state.blog.mediaPosts);
  const AppDispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    AppDispatch(getAllBlogThunk());
    AppDispatch(getAllBlogmediaThunk());
  }, [AppDispatch]);

  const mergedPosts = ListBlog.map((post) => {
    const mediaItem = mediaPosts.find((m) => m.post_id === post.post_id);
    return {
      ...post,
      media_url: mediaItem ? mediaItem.media_url : null,
    };
  });

  const Blog = mergedPosts.find((post) => post.post_id === parseInt(id));

  useEffect(() => {
    if (id != null) {
      AppDispatch(getBlogByIdThunk(parseInt(id)));
    }
  }, [AppDispatch, id]);

  const getRandomPosts = (posts, excludeId, count) => {
    const filteredPosts = posts.filter((post) => post.post_id !== excludeId);
    for (let i = filteredPosts.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [filteredPosts[i], filteredPosts[j]] = [
        filteredPosts[j],
        filteredPosts[i],
      ];
    }
    return filteredPosts.slice(0, count);
  };

  const relatedPosts = getRandomPosts(mergedPosts, parseInt(id), 5);

  return (
    <Container className="bg-white">
      <div className="py-4 md:py-6">
        <Breadcrumbs />
      </div>
      <div className="flex flex-col lg:flex-row lg:space-x-8 py-4 md:text-[1.5rem] leading-[2rem]">
        <div className="lg:w-[77%] space-y-6 bg-white">
          <h1 className="md:text-5xl font-bold text-gray-900 px-10">
            {Blog?.post_title}
          </h1>
          <div className="my-6 px-10">
            {Blog?.media_url ? (
              <img
                src={`https://res.cloudinary.com/dcvkmhlhw/image/upload/v1732821311/Blog/${Blog.media_url}`}
                alt="Hình ảnh minh họa bài viết"
                className="w-full lg:w-3/4 rounded-md"
/>
            ) : (
              <div className="w-full lg:w-3/4 h-64 bg-gray-300 rounded-md animate-pulse" />
            )}
          </div>
          <div className="flex text-gray-500 text-sm">
            <span className="text-lg md:text-xl px-5">{Blog?.post_date}</span>
            <span className="text-lg md:text-xl "> <span>💬</span>Sản phẩm tốt</span>
          </div>
          <div className="text-2xl text-gray-700 px-10" style={{ width: '95%' }} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(Blog?.post_content, { WHOLE_DOCUMENT: true }) }} />
        </div>

        <div className="lg:w-[30%] space-y-4">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 px-20">
            Bài viết liên quan
          </h3>
          <div className="grid grid-cols-1 gap-4 px-10">
            {relatedPosts.map((post) => (
              <div key={post.post_id} className="my-6 px-10">
                {post.media_url ? (
                  <img
                    src={`https://res.cloudinary.com/dcvkmhlhw/image/upload/v1732821311/Blog/${post.media_url}`}
                    alt={post.post_title}
                    className="w-full lg:w-3/4 rounded-md"
                  />
                ) : (
                  <div className="w-full lg:w-3/4 h-64 bg-gray-300 rounded-md animate-pulse" />
                )}
                <h4 className="text-xl font-medium mt-2">{post.post_title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Phần bình luận */}
      <div className="space-y-4 py-4 md:py-6">
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 px-10">
          Bình Luận
        </h3>
        <div className="space-y-4">
          <div className="flex space-x-4 items-center my-6 md:my-10 px-10">
            <img
              src="https://i.pinimg.com/originals/ea/1b/b8/ea1bb8dbc5b7eadf836b3a617377b7ff.png"
              alt="User Avatar"
              className="w-10 h-10 md:w-[3%] md:h-[3%] rounded-full object-cover"
            />
            <div>
              <strong className="block text-gray-800 text-xl md:text-2xl ">
                Phạm Ngọc Duy
              </strong>
              <p className="text-lg md:text-xl text-gray-500">4/5/2025</p>
              <p className="text-gray-800 text-xl md:text-2xl"> cmt đầu</p>
              <a
                href="#"
                className="text-blue-500 hover:underline text-lg md:text-xl"
              >
                ↻ 6 trả lời
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Form bình luận */}
      <div className="space-y-4">
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 px-10">
          Ý Kiến
        </h3>
        <div className="flex space-x-4 items-start px-10">
          <img
            src="https://i.pinimg.com/originals/ea/1b/b8/ea1bb8dbc5b7eadf836b3a617377b7ff.png"
alt="User Avatar"
            className="w-10 h-10 md:w-[3%] md:h-[3%] rounded-full object-cover"
          />
          <textarea
            className="w-full h-32 p-2 border border-gray-300 rounded-md placeholder:text-lg md:placeholder:text-2xl placeholder:p-3"
            placeholder="Chia sẻ ý kiến của bạn"
          ></textarea>
        </div>
        <div className="flex justify-end px-10 ">
          <button className="w-40 h-12 bg-customColor font-medium text-white rounded-md hover:bg-yellow-600 text-lg md:text-2xl">
            Hoàn tất
          </button>
        </div>
      </div>
    </Container>
  );
}

export default DetailBlog;
