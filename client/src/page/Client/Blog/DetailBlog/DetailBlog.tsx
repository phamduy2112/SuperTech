import React from 'react';
import { Container } from '../../../../components/Style/Container';

// Breadcrumbs Component
function Breadcrumbs() {
  return (
    <div className="text-lg md:text-[1.5rem] py-4 md:py-6">
      <a href="/" className="text-customColor hover:underline">
        Trang chủ
      </a>
      <span className="mx-2">/</span>
      <span>Bài viết</span>
      <span className="mx-2">/</span>
      <span>Top...</span>
    </div>
  );
}

function DetailBlog() {
  const posts = [
    {
      id: 1,
      imageUrl: 'https://2tmobile.com/wp-content/uploads/2022/07/iphone-12-purple-2tmobile.jpg',
      title: 'TOP 9+ iPhone 2 mắt camera chụp ảnh đẹp ĐÁNG MUA nhất 2024',
    },
    {
      id: 2,
      imageUrl: 'https://cdn.tgdd.vn/Products/Images/42/228737/Kit/iphone-12-note-new.jpg',
      title: 'TOP 9+ iPhone 2 mắt camera chụp ảnh đẹp ĐÁNG MUA nhất 2024',
    },
    {
      id: 3,
      imageUrl: 'https://cdn.tgdd.vn/Products/Images/42/228737/Kit/iphone-12-note-new.jpg',
      title: 'TOP 9+ iPhone 2 mắt camera chụp ảnh đẹp ĐÁNG MUA nhất 2024',
    },
  ];

  return (
    <Container>
      <div className="py-4 md:py-6">
        <Breadcrumbs />
      </div>
      <div className="flex flex-col lg:flex-row lg:space-x-8 py-4 md:py-6 text-lg md:text-[1.5rem] leading-[2rem]">
        {/* Main Content */}
        <div className="lg:w-[77%] space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
            Top 11+ Mẫu iPhone 13 ĐÁNG MUA nhất 2024
          </h1>
          <div className="flex items-center text-gray-500 text-sm space-x-2">
            <span className="text-lg md:text-xl">20/09/2023</span>
            <span className="text-gray-300 text-xl">-</span>
            <span className="text-lg md:text-xl">Quang xấu chó vcl</span>
          </div>
          <p className="text-xl md:text-3xl font-semibold">
            1. TOP 11+ Điện thoại quay TikTok đẹp, đáng mua nhất 2024
          </p>
          <p>
            Để có được những thước phim sáng tạo, dễ lên xu hướng, thì thiết bị quay cũng đóng vai trò rất quan trọng. Ngay sau
            đây là TOP 11 dòng điện thoại quay 8K, quay video TikTok đẹp, giá tốt, đáng sở hữu nhất hiện nay.
          </p>
          <h2 className="text-2xl font-semibold">1.1. iPhone 15 Pro Max - Camera ấn tượng</h2>
          <div className="my-4">
            <img
              src="https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone-13-Pro_Colors_09142021_big.jpg.large.jpg"
              alt="hình ảnh minh họa"
              className="w-full lg:w-3/4 rounded-md"
            />
          </div>
          <p>
            Nếu bạn đang tìm kiếm dòng điện thoại có thể đáp ứng mọi xu hướng trên mạng xã hội thì đây là sản phẩm phù hợp nhất
            dành cho bạn. Mức giá hiện tại của dòng điện thoại này đã giảm đáng kể so với lúc vừa ra mắt, nhưng nếu bạn chưa có
            đủ kinh phí mà vẫn muốn trải nghiệm thì iPhone 14 Pro Max Cũ là lựa chọn đáng cân nhắc.
          </p>
        </div>

        {/* Related Posts */}
        <div className="lg:w-[23%] mt-8 lg:mt-0 space-y-4">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">Bài viết liên quan</h3>
          <div className="grid grid-cols-1 gap-4">
            {posts.map((post) => (
              <div key={post.id} className="bg-white rounded-md shadow-lg">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-[100%] h-[70%] object-cover"
                />
                <p className="p-4 text-gray-800 font-semibold">{post.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Comments Section */}
      <div className="space-y-4 py-4 md:py-6">
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">Bình Luận</h3>
        <div className="space-y-4">
          <div className="flex space-x-4 items-center my-6 md:my-10">
            <img
              src="https://i.pinimg.com/originals/ea/1b/b8/ea1bb8dbc5b7eadf836b3a617377b7ff.png"
              alt="User Avatar"
              className="w-10 h-10 md:w-[3%] md:h-[3%] rounded-full object-cover"
            />
            <div>
              <strong className="block text-gray-800 text-xl md:text-2xl">Phạm Ngọc Duy</strong>
              <p className="text-lg md:text-xl text-gray-500">4/5/2025</p>
              <p className="text-gray-800 text-xl md:text-2xl"> cmt đầu</p>
              <a href="#" className="text-blue-500 hover:underline text-lg md:text-xl">↻ 6 trả lời</a>
            </div>
          </div>
        </div>
      </div>

      {/* Comment Form */}
      <div className="space-y-4">
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">Ý Kiến</h3>
        <div className="flex space-x-4 items-start">
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
        <div className="flex justify-end">
          <button className="w-40 h-12 px-5 bg-customColor font-medium text-white rounded-md hover:bg-yellow-600 text-lg md:text-2xl">
            Hoàn tất
          </button>
        </div>
      </div>
    </Container>
  );
}

export default DetailBlog;