import React from 'react'
import './css/detailBlogStyle.css'

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
    <div>
      <div className="detailBlog-container">
        <div className="detailBlog-text">
              <div className="detailBlog-link">
                Trang chủ/Bài viết/Top....
              </div>
              <div className="detaillBlog-title">
                Top 11+ Mẫu iPhone 13 ĐÁNG MUA nhất 2024
              </div>
              <div className="detailBlog-date">
                20/09/2023 
                <div className="deltailBlog-comma">-</div> 
                <div className="tacgia">Quang xấu chó vcl</div>
              </div>
              <div className="detailBlog-item">
                1. TOP 11+ Điện thoại quay TikTok đẹp, đáng mua nhất 2024
              </div>
              <div className="detailBlog-item-text">
                Để có được những thước phim sáng tạo, dễ lên xu hướng, thì thiết bị quay cũng đóng vai trò rất quan trọng. Ngay sau đây là TOP 11 dòng điện thoại quay 8K, quay video TikTok đẹp, giá tốt, đáng sở hữu nhất hiện nay.
              </div>
              <div className="detailBlog-sonItem">
                1.1. iPhone 15 Pro Max - Camera ấn tượng
              </div>
              <div className="detailBlog-img">
                <img src="https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone-13-Pro_Colors_09142021_big.jpg.large.jpg" alt="hình ảnh minh họa" />
              </div>
              <div className="detailBlog-item-text">
                Nếu bạn đang tìm kiếm dòng điện thoại có thể đáp ứng mọi xu hướng trên mạng xã hội thì đây là sản phẩm phù hợp nhất dành cho bạn.
  Mức giá hiện tại của dòng điện thoại này đã giảm đáng kể so với lúc vừa ra mắt, nhưng nếu bạn chưa có đủ kinh phí mà vẫn muốn trải nghiệm thì iPhone 14 Pro Max Cũ là lựa chọn đáng cân nhắc. 
  Đối với dòng iPhone 14 Pro Max Cũ 128GB hiện đang được bán ở 24hStore với mức giá 18.990.000 đồng. Tuy nhiên, mức giá trên vẫn có thể thay đổi tùy tình trạng của máy, màu sắc, nhu cầu thị trường và các chương trình khuyến mãi đi kèm.
              </div>
              <div className="detailBlog-commemtBar">
                    <div className="comment-section">
                      <h3 className="comment-title">
                              <span className="dot"></span>
                              Bình Luận
                      </h3>
                      <div className="comment">
                        <div className="comment-user">
                          <img src="https://i.pinimg.com/originals/ea/1b/b8/ea1bb8dbc5b7eadf836b3a617377b7ff.png" alt="User Avatar" className="user-avatar" />
                          <div className="user-info">
                            <strong>Phạm Ngọc Duy</strong>
                            <p className="comment-date">4/5/2025</p>
                            <p className="comment-text">cmt đầu</p>
                            <a href="#" className="reply-link"><span>↻</span> 6 trả lời</a>
                          </div>
                        </div>
                        <div className="comment-actions">
                          <p className="comment-time">2h trước</p>
                          <a href="#" className="view-details">xem chi tiết ▾</a>
                          <div className="like-dislike">
                            <span className="like">👍 10</span>
                            <span className="separator">|</span>
                            <span className="dislike">👎 2</span>
                          </div>
                        </div>
                      </div>
                      <div className="comment reply">
                        <div className="comment-user">
                          <img src="https://i.pinimg.com/originals/ea/1b/b8/ea1bb8dbc5b7eadf836b3a617377b7ff.png" alt="User Avatar" className="user-avatar" />
                          <div className="user-info">
                            <strong>Việt Quang</strong>
                            <p className="comment-date">4/5/2025</p>
                            <p className="comment-text">cmt thứ hai</p>
                            <a href="#" className="reply-link"><span>↻</span> 1 trả lời</a>
                          </div>
                        </div>
                        <div className="comment-actions">
                          <p className="comment-time">2h trước</p>
                          <div className="like-dislike">
                            <span className="like">👍 10</span>
                            <span className="separator">|</span>
                            <span className="dislike">👎 2</span>
                          </div>
                        </div>
                      </div>
                    </div>
              
              </div>
        </div>
        <div className="related-posts">
          <h3 className="related-title">Bài viết liên quan</h3>
          {posts.map((post) => (
            <div key={post.id} className="post">
              <img src={post.imageUrl} alt={post.title} className="post-image" />
              <p className="post-title">{post.title}</p>
            </div>
          ))}
        </div>
        <div className="comment-box">
            <h3 className="comment-title">
              <span className="dot"></span> Ý Kiến
            </h3>
            <div className="comment-input-container">
              <img src="https://i.pinimg.com/originals/ea/1b/b8/ea1bb8dbc5b7eadf836b3a617377b7ff.png" alt="User Avatar" className="user-avatar" />
              <textarea
                className="comment-input"
                placeholder="Chia sẻ ý kiến của bạn"
              ></textarea>
            </div>
            <button className="submit-button">Hoàn tất</button>
        </div>
      </div>
    </div>
  )
}

export default DetailBlog