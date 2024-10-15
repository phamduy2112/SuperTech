import React, { useState } from 'react'
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';
import { IoIosReturnRight } from 'react-icons/io';

function Comment(props:any) {
    const [expandedComments, setExpandedComments] = useState<boolean[]>(new Array(props.reviews.length).fill(false));

    const handleCommentClick = (index: number) => {
      // Tạo một bản sao của mảng expandedComments
      const updatedExpandedComments = [...expandedComments];
      // Đổi trạng thái của bình luận đã nhấn
      updatedExpandedComments[index] = !updatedExpandedComments[index];
      setExpandedComments(updatedExpandedComments);
    };

  return (
    <div>
            <div className="w-full p-4">
              <div className="flex justify-between items-center">
                <h2 className="text-[2rem] font-bold">
                  Đánh giá Điện Thoại Iphone 15 Pro Max 256GB
                </h2>
              </div>
              <div className="mt-4 w-[50%]">
                <div className="text-[2.4rem] font-semibold text-red-500 flex items-center gap-[.5rem]">
                  4.7 <FaStar className="text-[1.5rem]" />{" "}
                  <span className="text-[1.8rem] text-blue-600">
                    17 đánh giá
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-[2rem]">5★</span>
                  <div className="w-3/4 h-2 bg-gray-200 ml-2 rounded">
                    <div
                      className="bg-orange-400 h-2"
                      style={{ width: "80%" }}
                    />
                  </div>
                  <span className="text-[2rem] ml-2">80%</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[2rem]">4★</span>
                  <div className="w-3/4 h-2 bg-gray-200 ml-2 rounded">
                    <div
                      className="bg-orange-400 h-2"
                      style={{ width: "80%" }}
                    />
                  </div>
                  <span className="text-[2rem] ml-2">80%</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[2rem]">3★</span>
                  <div className="w-3/4 h-2 bg-gray-200 ml-2 rounded">
                    <div
                      className="bg-orange-400 h-2"
                      style={{ width: "80%" }}
                    />
                  </div>
                  <span className="text-[2rem] ml-2">80%</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[2rem]">2★</span>
                  <div className="w-3/4 h-2 bg-gray-200 ml-2 rounded">
                    <div
                      className="bg-orange-400 h-2"
                      style={{ width: "80%" }}
                    />
                  </div>
                  <span className="text-[2rem] ml-2">80%</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[2rem]">1★</span>
                  <div className="w-3/4 h-2 bg-gray-200 ml-2 rounded">
                    <div
                      className="bg-orange-400 h-2"
                      style={{ width: "80%" }}
                    />
                  </div>
                  <span className="text-[2rem] ml-2">80%</span>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div>
                <h4 className="py-[1rem] text-[2rem] font-semibold">
                  Lọc theo
                </h4>
                <div className="flex gap-[1rem] ">
                  <div className="cursor-pointer rounded-[3rem] text-[1.8rem] justify-center items-center gap-[.3rem] h-[3.5rem] flex border border-gray-600 w-[7rem] ">
                    <span>Tất cả</span>
                  </div>
                  <div className="cursor-pointer text-[1.8rem] rounded-[3rem]  justify-center items-center gap-[.3rem] h-[3.5rem] flex border border-gray-600 w-[12rem]">
                    <span>Đã mua hàng</span>
                  </div>
                </div>
              </div>
             
              <div className="flex justify-between flex-wrap">
              {props.reviews.map((review, index) => {
  return (
    <div className="flex items-start space-x-4 mt-[1rem] w-[48%]">
               
    <img
      src="https://cdn2.fptshop.com.vn/unsafe/800x0/tai_nghe_airpods_max_2024_6_ef5e1b2728.jpg"
      alt="Avatar"
      className="w-[5rem] h-[5rem] rounded-full"
    />
    {/* Comment Content */}
    <div className="flex w-[100%] justify-between">
      <div className="w-[100%]">
        <div className="flex justify-between">
          <div>
            <h3 className="font-bold text-[2rem]">phạm ngọc duy</h3>
            <div className="flex items-center text-[1.5rem] py-[.5rem]">
              <div className="ml-2 text-[1.5rem] text-gray-500">
                4/5/2025
              </div>
              <div className="ml-2 flex text-[1.3rem] items-center text-orange-500">
      
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            <p className="mt-1 text-gray-800 text-[1.8rem]">
              Hàng tốt quá
            </p>
          </div>

          <div className="flex justify-between items-center flex-col text-[1.8rem] text-gray-500 mt-2 space-x-3">
            <div className="flex gap-[.5rem] ">
              <span>2h trước</span>
              <BsThreeDots className="cursor-pointer" />
            </div>

            <div className="flex items-center gap-[.5rem]">
              {/* Like button */}
              <button className="flex items-center text-purple-600">
                <AiOutlineLike /> <span>10</span>
              </button>
              {/* Dislike button */}
              <button className="flex items-center text-purple-600 ml-4">
                <AiOutlineDislike /> <span>2</span>
              </button>
            </div>
          </div>

        </div>
        <button
                        className="mt-2 text-purple-600 text-[1.8rem] flex gap-[.5rem]"
                        onClick={() => handleCommentClick(index)}
                      >
                        <IoIosReturnRight/>
                        {expandedComments[index] ? "Ẩn phản hồi" : "Xem phản hồi"}
                      </button>
                      {expandedComments[index] && (
                            <div className="ml-12 mt-4 border-l-2 border-purple-300 pl-4">
                            {
                                review.replies.length > 0 ?(
                                    review.replies.map((reply, replyIndex) => {
                                        return        <div className="flex  space-x-4">
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
                                        <div className="ml-2 text-[1.5rem] text-gray-500">
                                          4/5/2025
                                        </div>
                                     
                                      </div>
                                      <p className="mt-1 text-gray-800 text-[1.8rem]">
                                        Hàng tốt quá
                                      </p>
                                    </div>
                          
                                    <div className="flex justify-between items-center flex-col text-[1.8rem] text-gray-500 mt-2 space-x-3">
                                      <div className="flex gap-[.5rem] ">
                                        <span>2h trước</span>
                                        <BsThreeDots className="cursor-pointer" />
                                      </div>
                          
                                      <div className="flex items-center gap-[.5rem]">
                                        {/* Like button */}
                                        <button className="flex items-center text-purple-600">
                                          <AiOutlineLike /> <span>10</span>
                                        </button>
                                        {/* Dislike button */}
                                        <button className="flex items-center text-purple-600 ml-4">
                                          <AiOutlineDislike /> <span>2</span>
                                        </button>
                                      </div>
                                    </div>
                          
                                  </div>
                                        </div>
                                      </div>
                                    })

                             
                                ) :(
                                    <p className="text-gray-600 text-[1.6rem]">Chưa có phản hồi nào.</p>

                                )
                            }
                       
                
                            
                          </div>
                      )}
    
      </div>

      {/* Reply Section */}
    </div>
  </div> 
  )
              }
              
          )}

              
               

              
              </div>
       
            </div>
            <div className="flex justify-center items-center">
               <button className="text-[2rem] bg-[#7500CF] text-white w-[100px] py-[1rem] rounded-lg">Xem thêm</button>
            </div>
             
          </div>
  )
}

export default Comment