import { Button, Form, Input } from 'antd';
import React, { useState } from 'react';
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';
import { IoIosReturnRight, IoMdSend } from 'react-icons/io';

function Comment(props: any) {
  const [expandedComments, setExpandedComments] = useState<boolean[]>(new Array(props.reviews.length).fill(false));
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [activeForms, setActiveForms] = useState<boolean[]>(new Array(props.reviews.length).fill(false)); // State to manage reply forms

  const handleCommentClick = (index: number) => {
    const updatedExpandedComments = [...expandedComments];
    updatedExpandedComments[index] = !updatedExpandedComments[index];
    setExpandedComments(updatedExpandedComments);
  };

  const handleDropdownToggle = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleFormToggle = (index: number) => {
    const updatedForms = [...activeForms];
    updatedForms[index] = !updatedForms[index]; // Toggle the specific reply form
    setActiveForms(updatedForms);
  };

  return (
    <div>
      <div className="w-full p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-[2rem] font-bold">Đánh giá Điện Thoại Iphone 15 Pro Max 256GB</h2>
        </div>
        <div className="mt-4 w-[50%]">
          <div className="text-[2.4rem] font-semibold text-red-500 flex items-center gap-[.5rem]">
            4.7 <FaStar className="text-[1.5rem]" />{" "}
            <span className="text-[1.8rem] text-blue-600">17 đánh giá</span>
          </div>
          {/* Rating bars for each star */}
          {[5, 4, 3, 2, 1].map((star, idx) => (
            <div className="flex items-center" key={star}>
              <span className="text-[2rem]">{star}★</span>
              <div className="w-3/4 h-2 bg-gray-200 ml-2 rounded">
                <div className="bg-orange-400 h-2" style={{ width: "80%" }} />
              </div>
              <span className="text-[2rem] ml-2">80%</span>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4">
        <div>
          <h4 className="py-[1rem] text-[2rem] font-semibold">Lọc theo</h4>
          <div className="flex gap-[1rem] ">
            <div className="cursor-pointer rounded-[3rem] text-[1.8rem] justify-center items-center gap-[.3rem] h-[3.5rem] flex border border-gray-600 w-[7rem] ">
              <span>Tất cả</span>
            </div>
            <div className="cursor-pointer text-[1.8rem] rounded-[3rem] justify-center items-center gap-[.3rem] h-[3.5rem] flex border border-gray-600 w-[12rem]">
              <span>Đã mua hàng</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between flex-wrap">
          {props.reviews.map((review, index) => {
            return (
              <div className="flex items-start space-x-4 mt-[1rem] w-[48%]" key={index}>
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
                          <div className="ml-2 text-[1.5rem] text-gray-500">4/5/2025</div>
                          <div className="ml-2 flex text-[1.3rem] items-center text-orange-500">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                          </div>
                        </div>
                        <p className="mt-1 text-gray-800 text-[1.8rem]">Hàng tốt quá</p>
                      </div>

                      <div className="flex justify-between items-center flex-col text-[1.8rem] text-gray-500 mt-2 space-x-3">
                        <div className="flex gap-[.5rem] ">
                          <span>2h trước</span>
                          <div className='relative'>
                            <BsThreeDots
                              className="cursor-pointer"
                              onClick={() => handleDropdownToggle(index)}
                            />
                            {activeDropdown === index && (
                              <div className="w-[120px] bg-white rounded-lg shadow-lg absolute right-0 mt-2 p-2">
                                <div className="flex flex-col space-y-2">
                                  <button
                                    onClick={() => {
                                      // Handle edit
                                    }}
                                    className="text-sm text-blue-500 hover:text-blue-700 transition-colors"
                                  >
                                    Chỉnh sửa
                                  </button>
                                  <button
                                    onClick={() => {
                                      // Handle delete
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

                        <div className="flex items-center gap-[.5rem]">
                          {/* Like button */}
                          <button className="flex items-center text-purple-600">
                            <AiOutlineLike /> <span>10</span>
                          </button>
                          {/* Dislike button */}
                          <button
                            onClick={() => handleFormToggle(index)}
                            className="flex items-center text-purple-600 ml-4"
                          >
                            Phản hồi
                          </button>
                        </div>
                      </div>
                    </div>
                    <button
                      className="mt-2 text-purple-600 text-[1.8rem] flex gap-[.5rem]"
                      onClick={() => handleCommentClick(index)}
                    >
                      <IoIosReturnRight />
                      {expandedComments[index] ? "Ẩn phản hồi" : "Xem phản hồi"}
                    </button>

                    <div>
                      {/* Comment form */}
                      {activeForms[index] && (
                        <Form
                          name="basic"
                          autoComplete="off"
                          className="bg-white shadow-md rounded-lg mt-[1rem]"
                        >
                          <Form.Item
                            className="relative"
                            name="comment"
                          >
                            <Input
                              className="py-3 px-4 w-full rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                              placeholder="Viết phản hồi..."
                            />
                            <Button
                              type="primary"
                              htmlType="submit"
                              className="absolute top-1/2 transform -translate-y-1/2 right-2"
                            >
                              <IoMdSend />
                            </Button>
                          </Form.Item>
                        </Form>
                      )}
                    </div>

                    {expandedComments[index] && (
                      <div className="ml-12 mt-4 border-l-2 border-purple-300 pl-4">
                        {review.replies.length > 0 ? (
                          review.replies.map((reply, replyIndex) => (
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
                                    </div>   <p className="mt-1 text-gray-800 text-[1.8rem]">{reply.content}</p>
                                  </div>

                                  <div className="flex justify-between items-center flex-col text-[1.8rem] text-gray-500 mt-2 space-x-3">
                                    <div className="flex gap-[.5rem]">
                                      <span>2h trước</span>
                                      <div className='relative'>
                                        <BsThreeDots
                                          className="cursor-pointer"
                                          onClick={() => handleDropdownToggle(index)}
                                        />
                                        {activeDropdown === index && (
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
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Comment;