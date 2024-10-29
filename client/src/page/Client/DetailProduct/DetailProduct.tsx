import React, { useEffect, useState } from "react";
import { Container } from "../../../components/Style/Container";
import { FaStar } from "react-icons/fa";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { IoIosReturnRight } from "react-icons/io";
import { Rate } from "antd";
import TextArea from "antd/es/input/TextArea";
import { data } from "./data";
import Comment from "./Component/Comment";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getProductByIdThunk } from "../../../redux/product/product.slice";
import { getCommentByIdProductThunk } from "../../../redux/comment/comment.slice";
import CommentForm from "./Component/CommentForm";


function DetailProduct() {
  const { id } = useParams(); // Lấy id từ URL
  const dispatch=useAppDispatch();
  const userDetail=useAppSelector((state)=>state.product.productDetail)
  const getCommentById=useAppSelector((state)=>state.listComment.listComment)

  console.log(userDetail);
  
  useEffect(()=>{
    const numericId = Number(id); // Ép chuỗi id thành số
    if (!isNaN(numericId)) {
      dispatch(getProductByIdThunk(numericId));
      dispatch(getCommentByIdProductThunk(numericId))
    }
  },[id,dispatch])
  console.log(getCommentById);
  
  const [listProduct, setProduct] = useState({
    productName: "Tên sản phẩm",
    price: 5000000,
    discount: 10,
    // color: "Xanh",
    // storage: "64GB",
    colors: [
      {
        color: "Xanh",
        variants: [
          {
            storage: "64GB",
            price: 4800000,
          },
          {
            storage: "128GB",
            price: 51000,
          },
        ],
      },
      {
        color: "Đen",
        variants: [
          {
            storage: "64GB",
            price: 1,
          },
          {
            storage: "128GB",
            price: 2,
          },
        ],
      },
      {
        color: "Trắng",
        variants: [
          {
            storage: "64GB",
            price: 3,
          },
          {
            storage: "128GB",
            price: 4,
          },
        ],
      },
    ],
    specifications: {
      screen: "6.5 inch OLED",
      battery: "4500 mAh",
    },
    reviews: [
      {
        rating: 4.5,
        comment: "Sản phẩm tốt, nhưng thời lượng pin cần cải thiện.",
        replies: [
          {
            user: "Nguyễn Văn A",
            comment: "Đồng ý, pin dùng được khoảng 1 ngày.",
          },
          {
            user: "Lê Thị B",
            comment: "Mình thấy pin ổn với tầm giá.",
          },
        ],
      },
      {
        rating: 5,
        comment: "Màn hình đẹp, giá hợp lý.",
        replies: [],
      },
    ],
  });
  
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<any>(null);
  const [variants, setVariants] = useState<any[]>([]); // Lưu các variants tương ứng với màu
  
  useEffect(() => {
    // Mặc định chọn màu và variant đầu tiên khi trang load
    if (listProduct.colors.length > 0) {
      const firstColor = listProduct.colors[0];
      setSelectedColor(firstColor.color);
      setSelectedVariant(firstColor.variants[0]);
      setVariants(firstColor.variants); // Lưu variants mặc định
    }
  }, [listProduct]);
  
  const handleColorChange = (color: string) => {
    const newColor = listProduct.colors.find((item) => item.color === color);
    if (newColor) {
      setSelectedColor(newColor.color);
      setSelectedVariant(newColor.variants[0]); // Chọn bộ nhớ mặc định đầu tiên khi thay đổi màu
      setVariants(newColor.variants); // Cập nhật các variants cho màu đã chọn
    }
  };
  
  // Hàm để thay đổi variant khi người dùng chọn bộ nhớ khác
  const handleVariantChange = (variant: any) => {
    setSelectedVariant(variant);
  };
  
  const [visibleCommentIndex, setVisibleCommentIndex] = useState<number | null>(null);

  return (
    <Container>
      <div>
        <div>
          <div className="border border-b-red-600 border-transparent py-[2rem]">
            <h3 className="font-semibold text-[2rem]">
              {userDetail.product_name}
            </h3>
          </div>
          <div className="flex">
            <div className="w-[50%] p-[3rem]">
              <div className="w-[80%] mx-auto">
                <img
                  className="w-[100%]"
                  // src={laptop}
                  alt=""
                />
              </div>
              <div className="flex items-center mt-[1rem] justify-center">
                <div className="w-[15%]">
                  <img
                    className=""
                    src="https://cdn2.fptshop.com.vn/unsafe/384x0/filters:quality(100)/2023_9_13_638302298834482205_apw-s9-gps-41-dayvai-vang-1.jpg"
                    alt=""
                  />
                </div>

                <div className="w-[15%]">
                  <img
                    className=""
                    src="https://cdn2.fptshop.com.vn/unsafe/384x0/filters:quality(100)/2023_9_13_638302298834482205_apw-s9-gps-41-dayvai-vang-1.jpg"
                    alt=""
                  />
                </div>
                <div className="w-[15%]">
                  <img
                    className=""
                    src="https://cdn2.fptshop.com.vn/unsafe/384x0/filters:quality(100)/2023_9_13_638302298834482205_apw-s9-gps-41-dayvai-vang-1.jpg"
                    alt=""
                  />
                </div>
                <div className="w-[15%]">
                  <img
                    className=""
                    src="https://cdn2.fptshop.com.vn/unsafe/384x0/filters:quality(100)/2023_9_13_638302298834482205_apw-s9-gps-41-dayvai-vang-1.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <h4 className="text-[1.9rem] font-semibold">
                  Thông tin sản phẩm
                </h4>
                <div>
                  <h5 className="text-[1.7rem]  font-semibold py-5">
                    Mô tả sản phẩm
                  </h5>
                  <p className="text-[1.6rem]">
                    Sau nhiều thế hệ điện thoại của Apple thì cái tên “Plus”
                    cũng đã chính thức trở lại vào năm 2022 và xuất hiện trên
                    chiếc iPhone 15 Plus 256GB, nổi trội với ngoại hình bắt
                    trend cùng màn hình kích thước lớn để đem đến không gian
                    hiển thị tốt hơn cùng cấu hình mạnh mẽ không đổi so với bản
                    tiêu chuẩn. Thân hình thanh mảnh cùng ngoại hình góc cạnh:
                  </p>
                </div>
                <div className=" pb-5">
                  <h5 className="text-[1.7rem]  font-semibold  py-5">
                    Mô tả sản phẩm
                  </h5>
                  <p className="text-[1.6rem]">
                    {" "}
                    Sau nhiều thế hệ điện thoại của Apple thì cái tên “Plus”
                    cũng đã chính thức trở lại vào năm 2022 và xuất hiện trên
                    chiếc iPhone 15 Plus 256GB, nổi trội với ngoại hình bắt
                    trend cùng màn hình kích thước lớn để đem đến không gian
                    hiển thị tốt hơn cùng cấu hình mạnh mẽ không đổi so với bản
                    tiêu chuẩn. Thân hình thanh mảnh cùng ngoại hình góc cạnh:
                  </p>
                </div>
                <div>
                  <img
                    src="https://cdn2.fptshop.com.vn/unsafe/800x0/tai_nghe_airpods_max_2024_6_ef5e1b2728.jpg"
                    alt=""
                  />
                </div>
                <div className="flex justify-center items-center mt-[1rem]">
                  <button className="p-[1rem] border text-[1.7rem]">
                    Xem thêm
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[45%]">
              <div className="flex items-center text-[2rem] text-center gap-[1rem] py-4">
                <p className="text-[red] font-semibold text-[2.2rem]">
                  27.000.000đ
                </p>
                <p className="text-[1.8rem] text-gray-500 line-through">
                  31.000.000đ
                </p>
                <p className="text-[1.8rem] px-[1rem] py-[.5rem] border">
                  Giảm 30%
                </p>
              </div>
              <div className="flex gap-[1rem]">
                
              {variants.map((variant, index) => (
        <button
          key={index}
          onClick={() => handleVariantChange(variant)}
          className={`py-[1.2rem] px-[2.5rem] text-[1.8rem] text-white ${
            selectedVariant?.storage === variant.storage ? "bg-[#9854CC] active" : "bg-gray-200"
          }`}
        >
          {variant.storage}
        </button>
      ))}
              </div>
              <div className="py-[1.5rem]">
                <h4 className="text-[1.6rem]">
                  Chọn màu để xem giá và tình trạng hàng 
                </h4>
                <div>
                  <div className="flex mt-[1rem] flex-wrap gap-[1rem]">
                  {
                        listProduct.colors.map((item)=>{
                          return    <div 
                          onClick={()=>{handleColorChange(item.color)}}

                          className="flex text-[1.5rem] gap-[.3rem] border py-4 px-5 rounded-md cursor-pointer">
                    
                          <div className="w-[30px]">
                            <img
                              src="https://cdn2.fptshop.com.vn/unsafe/384x0/filters:quality(100)/tai_nghe_airpods_max_2024_xanh_1_3aa5c4886e.jpg"
                              alt=""
                            />
                          </div>
                          <div>
                            <h4 className="font-semibold"> {item.color}</h4>
                            <p className="text-[red] font-semibold">20.000.000đ</p>
                          </div>
                        </div>
                        })
                      }
                   
                  </div>
                </div>
              </div>
              <div className="border rounded-lg p-4 bg-white shadow text-[2rem] my-[1rem]">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-600 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 12H4"
                      />
                    </svg>
                    <span>Miễn phí vận chuyển toàn quốc</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-600 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6h4"
                      />
                    </svg>
                    <span>Bảo hành 18 tháng chính hãng</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-600 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6h4"
                      />
                    </svg>
                    <span>
                      Bao xài đổi lỗi trong 30 ngày đầu nếu có lỗi phần cứng do
                      nhà sản xuất
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-600 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6h4"
                      />
                    </svg>
                    <span>Giá đã bao gồm VAT</span>
                  </li>
                </ul>
              </div>
              <div className="border rounded-lg p-4 bg-white shadow-md">
                <div className="flex justify-between items-center mb-4 text-[1.9rem]">
                  <h3 className="text-[2rem] font-semibold">Khuyến mãi</h3>
                  <span className=" text-gray-500 text-[1.9rem]">
                    Giá và khuyến mãi áp dụng từ 1/10 - 31/10
                  </span>
                </div>
                <ul className="space-y-2 text-[1.8rem]">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">🏅</span>
                    <span>Giảm ngay 600.000đ (đã trừ giá)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">🏅</span>
                    <span>Trợ giá 4G: Giảm thêm 300.000đ</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">🏅</span>
                    <span>
                      Thu cũ máy 2G, 3G lên đời máy 4G (hỗ trợ thu mọi tình
                      trạng, hỏng, cũ vỡ...)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">🏅</span>
                    <span>Mua kèm củ sạc 15W giá 169.000đ</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">🏅</span>
                    <span>Trả góp 0% qua Samsung Finance+</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">🏅</span>
                    <span>
                      Ưu đãi 20% Gói bảo hành mở rộng Samsung Care+ 6 tháng/1
                      năm
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">🏅</span>
                    <span>Phụ kiện giảm giá đến 35% khi mua cùng</span>
                  </li>

                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">🏅</span>
                    <span>
                      Giảm giá 50% Sim số đẹp và ưu đãi mua bảo hiểm rơi vỡ
                      thiết bị
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex justify-between mt-[1rem]">
                <button className="w-[49%] text-[1.9rem] border border-[#7500CF] text-[#7500CF] py-[1rem]">
                  Thêm giỏ hàng
                </button>
                <button className="w-[49%] text-[1.9rem] border py-[1rem] bg-[#7500CF] text-white">
                  Mua ngay
                </button>
              </div>
              <div className="text-[1.8rem] text-center py-[1rem]">
                Gọi
                <span className="text-[#7500CF]">1800-6601</span>
                để được tư vấn mua hàng (Miễn phí)
              </div>
              {/* Thông số kĩ thuật */}
              <div className="flex justify-between">
              <div className="w-[55%]">
                <h3 className="text-red-500 font-semibold mb-4 text-[1.9rem]">
                  Thông số kĩ thuật
                </h3>
                <div className="border rounded-lg p-4 ">
                  <table className="w-full border-collapse text-[1.9rem]">
                    <tbody>
                      <tr className="border-b">
                        <td className="font-semibold py-2 w-1/2">
                          Công nghệ màn hình
                        </td>
                        <td className="py-2 w-1/2">OLED</td>
                      </tr>
                      <tr className="border-b">
                        <td className="font-semibold py-2 w-1/2">
                          Độ phân giải
                        </td>
                        <td className="py-2 w-1/2">2532 × 1170 pixels</td>
                      </tr>
                      <tr className="border-b">
                        <td className="font-semibold py-2 w-1/2">
                          Màn hình rộng
                        </td>
                        <td className="py-2 w-1/2">6.1 inches</td>
                      </tr>
                      <tr className="border-b">
                        <td className="font-semibold py-2 w-1/2">
                          Tính năng
                        </td>
                        <td className="py-2 w-1/2">
                          Màn hình super Retina XDR, OLED, 460 ppi, HDR display,
                          công nghệ True Tone Wide color (P3), Haptic Touch, Lớp
                          phủ oleophobic chống bám vân tay
                        </td>
                      </tr>
                      <tr>
                        <td className="font-semibold py-2 w-1/2">
                          Tần số quét
                        </td>
                        <td className="py-2 w-1/2">60Hz</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <button className="w-[100%]  border text-[1.8rem] font-semibold py-[1rem] mt-[1rem]">
                  Xem chi tiết cấu hình
                </button>
              </div>
              <div className="w-[43%]">
                {/* Title Section */}
                <div className="flex items-center mb-4">
                  {/* <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 24 24">News Icon</svg> */}
                  <h2 className="text-[2rem] font-bold py-[1rem]">
                    Tin tức về sản phẩm
                  </h2>
                </div>
                {/* News Items List */}
                <div className="space-y-4 bg-white shadow-md rounded-lg p-7">
                  {/* Single News Item */}
                  <div className="flex items-start space-x-4">
                    <img
                      src="https://cdn-media.sforum.vn/storage/app/media/trannghia/Galaxy-S24-OneUI-6-1-1-cover.jpg"
                      alt="news image"
                      className="w-[7rem] h-[7rem] rounded-md object-cover"
                    />
                    <div className="flex-1">
                      <p className="text-[1.7rem] text-gray-800">
                        Không phải chờ tới cuối tháng 9 để có AI, Galaxy S24
                        Series vừa được cập nhật Galaxy AI phiên...
                      </p>
                    </div>
                  </div>
                </div>
                {/* View More Button */}
                <div className="mt-4">
                  <button className="w-full py-4 text-[1.9rem] font-semibold text-purple-600 bg-[white] shadow-md rounded-lg hover:bg-gray-200">
                    Xem tất cả bài viết
                  </button>
                </div>
              </div>
              </div>
            
       
            </div>
          </div>
          {/* Bình luận */}
         <Comment reviews={getCommentById}/>
          {/* Ý kiến */}
         <CommentForm id={id}/>
        </div>
      </div>
    </Container>
  );
}

export default DetailProduct;
