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
  const numericId = Number(id); // Ép chuỗi id thành số

  const dispatch=useAppDispatch();
  const userDetail=useAppSelector((state)=>state.product.productDetail)
  const getCommentById=useAppSelector((state)=>state.listComment.listComment)

  console.log(userDetail);
  
  useEffect(()=>{
    if (!isNaN(numericId)) {
      dispatch(getProductByIdThunk(numericId));
      dispatch(getCommentByIdProductThunk(numericId))
    }
  },[numericId,dispatch])
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
          <div className="py-6 text-[1.5rem] leading-10">
            {/* Breadcrumb */}
            <div className="my-[1.5rem] text-[1.5rem] text-gray-600">
              <a href="/" className="text-customColor hover:underline">Trang chủ</a>
              <span className="mx-2">/</span>
              <span>Chi tiết sản phẩm</span>
            </div>

            {/* Main Content */}
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left Column */}
              <div className="w-full md:w-[55%] p-6">
                <div className="w-[80%] mx-auto">
                  <img 
                    className="w-full my-8 max-w-[300px] mx-auto" 
                    src="https://cdn2.fptshop.com.vn/unsafe/384x0/filters:quality(100)/2023_9_13_638302298834482205_apw-s9-gps-41-dayvai-vang-1.jpg" 
                    alt="product image" 
                  />
                </div>

                {/* Thumbnail Images */}
                <div className="flex items-center justify-center my-8 space-x-4">
                  {[...Array(4)].map((_, index) => (
                    <div key={index} className="w-[10%]">
                      <img 
                        className="w-full" 
                        src="https://cdn2.fptshop.com.vn/unsafe/384x0/filters:quality(100)/2023_9_13_638302298834482205_apw-s9-gps-41-dayvai-vang-1.jpg" 
                        alt={`thumbnail ${index + 1}`} 
                      />
                    </div>
                  ))}
                </div>

                {/* Product Info */}
                <div>
                  <h4 className="text-[1.9rem] font-semibold">Thông tin sản phẩm</h4>
                  <div className="pb-5">
                    <h5 className="text-[1.7rem] font-semibold py-5">Mô tả sản phẩm</h5>
                    <p className="text-[1.6rem]">
                      Sau nhiều thế hệ điện thoại của Apple thì cái tên “Plus”
                      cũng đã chính thức trở lại vào năm 2022 và xuất hiện trên
                      chiếc iPhone 15 Plus 256GB, nổi trội với ngoại hình bắt
                      trend cùng màn hình kích thước lớn để đem đến không gian
                      hiển thị tốt hơn cùng cấu hình mạnh mẽ không đổi so với bản
                      tiêu chuẩn. Thân hình thanh mảnh cùng ngoại hình góc cạnh
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

              {/* Right Column */}
              <div className="w-full md:w-[45%] mx-auto text-xl">
                {/* Price Section */}
                <div className="flex items-center gap-4 py-4">
                  <p className="text-red-500 font-semibold text-[2rem]">27.000.000đ</p>
                  <p className="text-xl text-gray-500 line-through">31.000.000đ</p>
                  <p className="text-xl px-4 py-2 border border-gray-300">30%</p>
                </div>

                {/* Storage Variant Buttons */}
                <div className="flex gap-4 mb-6">
                  {variants.map((variant, index) => (
                    <button
                      key={index}
                      onClick={() => handleVariantChange(variant)}
                      className={`py-3 px-6 text-xl text-white ${
                        selectedVariant?.storage === variant.storage ? 'bg-customColor' : 'bg-gray-400'
                      }`}
                    >
                      {variant.storage}
                    </button>
                  ))}
                </div>

                {/* Color Selection */}
                <div className="py-6">
                  <h4 className="text-2xl">Chọn màu để xem giá và tình trạng hàng</h4>
                  <div className="flex flex-wrap gap-4 mt-4">
                    {listProduct.colors.map((item) => (
                      <div
                        key={item.color}
                        onClick={() => handleColorChange(item.color)}
                        className="flex items-center gap-3 border py-4 px-6 rounded-md cursor-pointer hover:shadow-md"
                      >
                        <img 
                          src="https://cdn2.fptshop.com.vn/unsafe/384x0/filters:quality(100)/tai_nghe_airpods_max_2024_xanh_1_3aa5c4886e.jpg" 
                          alt={item.color} 
                          className="w-10 rounded-md"
                        />
                        <div>
                          <h4 className="font-semibold text-lg">{item.color}</h4>
                          <p className="text-red-500 font-semibold">20.000.000đ</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Delivery & Warranty Info */}
                <div className="rounded-lg p-6 bg-white shadow-md mb-6">
                  <ul className="space-y-3 items-center text-2xl">
                    <li className="flex items-center">
                      <svg className="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                      Miễn phí vận chuyển toàn quốc
                    </li>
                    <li className="flex items-center">
                      <svg className="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6h4" />
                      </svg>
                      Bảo hành 18 tháng chính hãng
                    </li>
                    <li className="flex items-center">
                      <svg className="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6h4" />
                      </svg>
                      Bao xài đổi lỗi trong 30 ngày nếu có lỗi phần cứng
                    </li>
                    <li className="flex items-center">
                      <svg className="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6h4" />
                      </svg>
                      Giá đã bao gồm VAT
                    </li>
                  </ul>
                </div>

                {/* Promotions Section */}
                <div className="rounded-lg p-6 bg-white shadow-md mb-6">
                  <div className="flex justify-between items-center mb-4 text-2xl">
                    <h3 className="font-semibold text-2xl">Khuyến mãi</h3>
                    <span className="text-gray-500">Áp dụng từ 1/10 - 31/10</span>
                  </div>
                  <ul className="space-y-3 text-xl">
                    <li className="flex items-start text-2xl">
                      <span className="text-yellow-500 mr-3">🏅</span> Giảm ngay 600.000đ (đã trừ giá)
                    </li>
                    <li className="flex items-start text-2xl">
                      <span className="text-yellow-500 mr-3">🏅</span> Trợ giá 4G: Giảm thêm 300.000đ
                    </li>
                    <li className="flex items-start text-2xl">
                      <span className="text-yellow-500 mr-3">🏅</span> Thu cũ máy 2G, 3G lên đời máy 4G
                    </li>
                    <li className="flex items-start text-2xl">
                      <span className="text-yellow-500 mr-3">🏅</span> Mua kèm củ sạc 15W giá 169.000đ
                    </li>
                  </ul>
                </div>

                {/* Technical Specifications */}
                <div className="flex justify-between">
                  <div className="w-[100%] mt-10">
                    <h3 className="text-red-500 font-semibold text-3xl mb-4">Thông số kĩ thuật</h3>
                    <div className="border rounded-lg p-6">
                      <table className="w-full border-collapse text-2xl leading-[3rem]">
                        <tbody>
                          <tr className="border-b">
                            <td className="font-semibold py-5 w-1/2">Công nghệ màn hình</td>
                            <td className="py-2 w-1/2">OLED</td>
                          </tr>
                          <tr className="border-b">
                            <td className="font-semibold py-5 w-1/2">Độ phân giải</td>
                            <td className="py-2 w-1/2">2532 × 1170 pixels</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <button className="w-full text-xl font-semibold py-4 border mt-4">Xem chi tiết cấu hình</button>
                  </div>
                </div>

                {/* Cart and Buy Now Buttons */}
                <div className="flex gap-4 mt-4">
                  <button className="w-1/2 py-6 text-[1.7rem] font-medium border border-customColor text-customColor rounded-2xl hover:bg-purple-100">
                    Thêm giỏ hàng
                  </button>
                  <button className="w-1/2 py-6 text-[1.7rem] font-medium bg-customColor text-white rounded-2xl hover:bg-purple-700">
                    Mua ngay
                  </button>
                </div>                    
              </div>
            </div>
                {/* Ý kiến */}
                {/* <div>
                    <h3 className="text-[2rem]">Ý kiến của bạn</h3>
                    <div className="mt-[2rem] flex">
                      <div className="w-[10%] mx-[1rem]">
                      <img
                              src="https://cdn2.fptshop.com.vn/unsafe/800x0/tai_nghe_airpods_max_2024_6_ef5e1b2728.jpg"
                              alt="news image"
                              className="w-[12rem] h-[12rem] rounded-[50%] object-cover"
                            />
                        <Rate className="mt-4"/>
                      </div>
                                <div className="w-[90%]">
                                <TextArea rows={6} placeholder="Đánh giá của bạn"  />
                                <div className="flex justify-end">
                                <button className="bg-customColor text-white py-[1rem] px-[2rem] font-medium text-[1.5rem] mt-4 rounded-md">Hoàn tất</button>
                                </div>
                                </div>
                    </div>
                </div>                 */}
                <Comment reviews={getCommentById}/>
                <CommentForm id={numericId}/>
          </div>
        </Container>

  );
}

export default DetailProduct;
