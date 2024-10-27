import { useState } from "react";
import { Rate, Input } from "antd";
import axios from "axios"; // Hoặc thư viện gọi API bạn đang dùng
import { useAppDispatch } from "../../../../redux/hooks";
import { createCommentByIdProductThunk } from "../../../../redux/comment/comment.slice";
const { TextArea } = Input;

const CommentForm = (props:any) => {

  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
    const dispatch=useAppDispatch();
    
  const handleSubmit = async () => {
    try {
   console.log(props.id);
   
    const newComment={
        product_id:Number(props.id),
             comment_content: comment,
        comment_star: rating,
    }
    // const id=props.id
    dispatch(createCommentByIdProductThunk(newComment))
    // console.log(newComment);
    
    } catch (error) {
      console.error("Error submitting comment:", error);
      alert("Có lỗi xảy ra khi gửi bình luận.");
    }
  };
  const isDisabled = !comment.trim();

  return (
    <div>
      <h3 className="text-[2rem]">Ý kiến của bạn</h3>
      <div className="mt-[2rem] flex">
        <div className="w-[10%]">
          <img
            src="https://cdn2.fptshop.com.vn/unsafe/800x0/tai_nghe_airpods_max_2024_6_ef5e1b2728.jpg"
            alt="news image"
            className="w-[12rem] h-[12rem] rounded-[50%] object-cover"
          />
          <Rate className="mt-4" onChange={setRating} value={rating} />
        </div>
        <div className="w-[90%]">
          <TextArea
            rows={6}
            placeholder="Nhập ý kiến của bạn..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
       <div className="flex justify-end">
            <button
              className={`py-[1rem] px-[2rem] text-[1.9rem] mt-4 rounded-md ${
                isDisabled ? "bg-gray-400 text-gray-200" : "bg-[#7500CF] text-white"
              }`}
              onClick={handleSubmit}
              disabled={isDisabled}
            >
              Hoàn tất
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentForm;