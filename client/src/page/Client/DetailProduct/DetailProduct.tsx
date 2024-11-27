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
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getProductByIdThunk } from "../../../redux/product/product.slice";
import { getCommentByIdProductThunk, setcomment } from "../../../redux/comment/comment.slice";
import CommentForm from "./Component/CommentForm";
import ProductColor from "./Component/ProductColor";
import { IMG_BACKEND } from "../../../constants";
import { addItemToCart, addItemToOrder } from "../../../redux/cart/cart.slice";
import { formatCurrencyVND } from "../../../utils";



function DetailProduct() {
  const { id } = useParams(); // Lấy id từ URL
  const numericId = Number(id); // Ép chuỗi id thành số
  const navigate=useNavigate();
  
  const dispatch=useAppDispatch();
  const handleAddItem = (product: any) => {
    const productToCart = {
      ...product,
      selectedColor: objectColor,
      selectedStorage:objectStorage
    };
    console.log(productToCart);
    
    
  };

  const handleAddOrder=(product:any)=>{
    const productToCart = {
      ...product,
      selectedColor: objectColor // hoặc selectedColor, tùy vào thông tin bạn muốn lưu
    };
    dispatch(addItemToOrder(productToCart))
    navigate("/thanh-toan")
    
  }
  
  const productDetail=useAppSelector((state)=>state.product.productDetail)
  const socket=useAppSelector((state)=>state.socket.socket)
  const getCommentById=useAppSelector((state)=>state.listComment.listComment)

  // console.log(productDetail);
  const [selectedColor, setSelectedColor] = useState<any>(null);
  const [selectetStorage, setSelectedStorage] = useState<any>(null);
 const [objectColor,setOjectColor]=useState<any>(null)
const [objectStorage,setObjectStorage]=useState<any>(null)
console.log(objectColor);


  
  useEffect(()=>{
    if (!isNaN(numericId)) {
      dispatch(getProductByIdThunk(numericId));
      dispatch(getCommentByIdProductThunk(numericId))
    }
 
  },[numericId,dispatch])
  useEffect(() => {
    if (productDetail?.product_colors?.length > 0) {
      const firstColor = productDetail?.product_colors[0];
      setSelectedColor(firstColor?.color);
      setOjectColor(firstColor);
  
      // Cập nhật storage nếu có
      if (firstColor?.product_storages?.length > 0) {
        const firstStorage = firstColor.product_storages[0];
        setObjectStorage(firstStorage);
        setSelectedStorage(firstStorage);
      } else {
        setObjectStorage([]); // Hoặc giá trị mặc định
        setSelectedStorage(null); 
      }
    }
  }, [productDetail]);
console.log(objectStorage);

const handleColorChange = (color: string) => {
  const newColor = productDetail.product_colors.find((item) => item.color === color);
  
  if (newColor) {
    setSelectedColor(newColor.color);
    setOjectColor(newColor);

    // Nếu không có product_storages, đặt objectStorage về null
    if (newColor?.product_storages?.length > 0) {
      const firstStorage = newColor.product_storages[0];
      setObjectStorage(firstStorage);
      setSelectedStorage(firstStorage);
    } else {
      // Nếu không có storage, có thể reset objectStorage
      setObjectStorage([]); // Hoặc giá trị mặc định của bạn
    }
  }
};

const handleStorageChange = (storage: string) => {
  if (objectColor?.product_storages?.length > 0) {
    const newStorage = objectColor.product_storages.find((item) => item.storage === storage);
    if (newStorage) {
      setObjectStorage(newStorage);
      setSelectedStorage(newStorage);
    }
  } else {
    // Nếu không có storage, có thể đặt lại objectStorage
    setObjectStorage([]);
    setSelectedStorage(null);
  }
};
console.log(objectStorage);

 


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
            <div className="flex flex-col md:flex-row gap-8 bg-white rounded-lg p-[1rem]">
              {/* Left Column */}
              <div className="w-full md:w-[55%] p-6">
                <div className="w-[80%] mx-auto">
                  <img 
                    className="w-full my-8 max-w-[300px] mx-auto" 
                    src={`${IMG_BACKEND}/${objectColor?.image?.image_one}`} 
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
              <div className="w-full md:w-[45%] mx-auto text-xl ">
                <h3 className="text-[2.5rem] font-semibold pt-[1.3rem]">{productDetail?.product_name}</h3>
                {/* Price Section */}
                {productDetail?.product_discount > 0 ?
                <div className="flex items-center gap-4 py-4">
            
                <p className="text-red-500 font-semibold text-[2rem]">{formatCurrencyVND(((productDetail?.product_price + Number(objectStorage?.storage_price ||0)) *(1 - Number(productDetail?.product_discount / 100) )))}</p>
                <p className="text-xl text-gray-500 line-through">              
                    {formatCurrencyVND(productDetail?.product_price + Number(objectStorage?.product_storages?.storage_price || 0))}
                </p>
                <p className="text-xl px-4 py-2 border border-gray-300">{productDetail?.product_discount}%</p>
              </div>
                : 
                <p className="text-red-500 font-semibold text-[2rem] py-6">
                    {formatCurrencyVND(productDetail?.product_price + Number(objectStorage?.product_storages?.storage_price || 0))}
                    </p>

                    // Hehe
                }
                

                {/* Storage Variant Buttons */}
                <div className="flex gap-4 mb-6">
              
                {objectColor?.product_storages?.map((variant, index) => (
  <button key={index}                
  onClick={()=>{handleStorageChange(variant)}}
  className={`flex items-center gap-3 border py-4 px-6 rounded-md cursor-pointer hover:shadow-md ${selectetStorage.storage == variant.storage ? 'bg-slate-50' : ''}`}
>

    {variant?.storage} MB
  </button>
))}
                </div>

                {/* Color Selection */}
                <div className="py-6">
    <h4 className="text-2xl">Chọn màu để xem giá và tình trạng hàng</h4>
    <div className="flex flex-wrap gap-4 mt-4">
        {productDetail?.product_colors?.map((item) => (
            <div
                key={item.color}
                onClick={() => handleColorChange(item.color)}
                className={`flex items-center gap-3 border py-4 px-6 rounded-md cursor-pointer hover:shadow-md ${selectedColor === item.color ? 'bg-slate-50' : ''}`}
            >
              
                <img 
                    src={`${IMG_BACKEND}/${item?.image?.image_one}`} 
                    alt={item.color} 
                    className="w-10 rounded-md"
                />
                <div>
                    <h4 className="font-semibold text-lg">{item.color}</h4>
                    {/* <p className="text-red-500 font-semibold">{item.storage_price}đ</p> */}
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
                  <button 
                  onClick={()=>{
                    handleAddItem(productDetail)
                  }}
                  className="w-1/2 py-6 text-[1.7rem] font-medium border border-customColor text-customColor rounded-2xl hover:bg-purple-100">
                    Thêm giỏ hàng
                  </button>
                  <button 
                  onClick={()=>{handleAddOrder(productDetail)}}
                  className="w-1/2 py-6 text-[1.7rem] font-medium bg-customColor text-white rounded-2xl hover:bg-purple-700">
                    Mua ngay
                  </button>
                </div>                    
              </div>
            </div>
                {/* Ý kiến */}
      
                <Comment reviews={getCommentById}/>
                <CommentForm id={numericId}/>
          </div>
        </Container>

  );
}

export default DetailProduct;
// test