import { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';

const ReplyComment = (props) => {
  const [expandedComments, setExpandedComments] = useState<boolean[]>(new Array(props.reviews?.length).fill(true)); // Tất cả comment mặc định hiển thị
  const [replyEditForms, setReplyEditForms] = useState<boolean[][]>(
    props.reviews?.map((review) => new Array(review.replies_comment_products?.length).fill(false)) // Mặc định không có reply edit form
  );

  // Toggle reply edit form for specific reply
  const handleReplyEditToggle = (commentIndex: number, replyIndex: number) => {
    const updatedReplyEditForms = [...replyEditForms];
    updatedReplyEditForms[commentIndex][replyIndex] = !updatedReplyEditForms[commentIndex][replyIndex];
    setReplyEditForms(updatedReplyEditForms);
  };

  return (
    <div className="comment-section">
      {props.reviews?.map((review, index) => (
        <div key={index} className="comment-item">
          {/* Comment content */}
          <div className="flex justify-between">
            <div>
              <h3 className="font-bold text-[2rem]">phạm ngọc duy</h3>
              <div className="text-[1.5rem] text-gray-500 py-[.5rem]">4/5/2025</div>
              <p className="text-[1.8rem] text-gray-800">{review.comment_content}</p>
            </div>
            <div className="flex justify-between items-center text-[1.8rem] text-gray-500 mt-2">
              <BsThreeDots
                className="cursor-pointer"
                onClick={() => handleReplyEditToggle(index, 0)} // Toggle example (change as needed)
              />
            </div>
          </div>

          {/* Replies Section */}
          {expandedComments[index] && (
            <div className="ml-12 mt-4 border-l-2 border-purple-300 pl-4">
              {review.replies_comment_products?.length > 0 ? (
                review.replies_comment_products?.map((reply, replyIndex) => (
                  <div className="flex space-x-4" key={replyIndex}>
                    <img
                      src="https://cdn2.fptshop.com.vn/unsafe/800x0/tai_nghe_airpods_max_2024_6_ef5e1b2728.jpg"
                      alt="Avatar"
                      className="w-[4rem] h-[4rem] rounded-full"
                    />
                    <div className="flex w-[100%]">
                      <div className="flex justify-between w-[100%]">
                        <div>
                          <h3 className="font-bold text-[2rem]">phạm ngọc duy</h3>
                          <div className="flex items-center text-[1.5rem] py-[.5rem]">
                            <div className="ml-2 text-[1.5rem] text-gray-500">4/5/2025</div>
                          </div>
                          <p className="mt-1 text-gray-800 text-[1.8rem]">{reply.comment_content}</p>
                        </div>
                        <div className="flex justify-between items-center flex-col text-[1.8rem] text-gray-500 mt-2 space-x-3">
                          <div className="flex gap-[.5rem]">
                            <span>2h trước</span>
                            <div className="relative">
                              <BsThreeDots
                                className="cursor-pointer"
                                onClick={() => handleReplyEditToggle(index, replyIndex)}
                              />
                              {replyEditForms[index][replyIndex] && (
                                <div className="w-[120px] bg-white rounded-lg shadow-lg absolute right-0 mt-2 p-2">
                                  <div className="flex flex-col space-y-2">
                                    <button
                                      onClick={() => {
                                        // Handle edit reply
                                      }}
                                      className="text-sm text-blue-500 hover:text-blue-700 transition-colors"
                                    >
                                      Chỉnh sửa
                                    </button>
                                    <button
                                      onClick={() => {
                                        // Handle delete reply
                                      }}
                                      className="text-sm text-red-500 hover:text-red-700 transition-colors"
                                    >
                                      Xoá
                                    </button>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-[1.5rem]">Chưa có phản hồi nào.</p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ReplyComment;
