import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import duy from "../../../assets/duy.png";
import thien from "../../../assets/thien.png";
import tri from "../../../assets/tri.png";
import quyen from "../../../assets/quyen.png";
import quang from "../../../assets/quang.png";
import thinh from "../../../assets/thinh.png";
import trangchu from "../../../assets/trangchu.jpg";
import bog from "../../../assets/bog.jpg";
import thanhtuu from "../../../assets/thanhtuu.png";
import { FaStar } from "react-icons/fa";
function Introduce() {
  return (
    <div className="w-[80%] m-auto">
      <div className=" flex py-[100px]  flex-col gap-[70px] justify-center items-center content-center">
        <div className="w-[817px] h-[150px] text-[64px] font-medium flex justify-center items-center">
          <span className="text-center">
            {" "}
            Đưa Việc Tìm Kiếm Của Bạn Lên Một Tầm Cao Mới
          </span>
        </div>
        <div className="w-[849px] h-[42px]  flex justify-center items-center  ">
          <span className=" text-center text-[18px] text-[#727171] ">
            SuperTech mặt hàng đồ dùng thiết bị đồ điện tử với các mặt hàng thời
            đại mới, luôn cập nhật và cho ra đời các sản phẩm tốt nhất cho người
            tiêu dùng, giao diện tiện lợi dễ dàng mua hàng hãy đến với chúng
            tôi.{" "}
          </span>
        </div>
        <div className=" flex gap-3  ">
          <div className=" w-[200px] h-[56px] flex justify-center items-center gap-3 rounded-full text-[#FFFFFF] text-[15px] font-medium bg-[#7500CF]">
            Bắt Đầu
            <span className="text-[21px] flex justify-center items-center">
              {" "}
              <FaArrowRightLong />
            </span>
          </div>
          <div className=" w-[200px] h-[56px] flex justify-center items-center gap-3 rounded-full text-[#FFFFFF] text-[15px] font-medium bg-[#272727]">
            Tìm Hiểu Thêm
          </div>
        </div>

        <div className="">
          <div className=" w-[1282px]  grid grid-cols-2 overflow-hidden rounded-2xl bg-[#e0d6e71f]">
            <div className="w-full">
              <img
                className="w-[641px] h-[525px] object-cover"
                src={trangchu}
                alt=""
              />
            </div>
            <div className="px-[44px] py-[31px] gap-[25px] flex flex-col">
              <span className="text-[#A3A3A3] text-[12px] "> Đầu tiên</span>
              <span className="text-[#000000] text-[32px] font-medium">
                {" "}
                thiết kế đơn giản nhưng tinh tế, dễ dàng ghi nhớ, phù hợp với
                thương hiệu chuyên cung cấp đồ công nghệ tiên tiến.
              </span>
              <span className="text-[20px] text-justify">
                {" "}
                <span className="text-black text-2xl m-6">•</span> Màu tím không
                chỉ đại diện cho sự đổi mới mà còn biểu trưng cho hiệu suất và
                khả năng mạnh mẽ của các sản phẩm mà{" "}
                <span className="text-[#7500CF]">SuperTech</span> cung cấp. Tông
                màu tím tượng trưng cho sự sang trọng và đột phá, đồng thời tạo
                ra sự kết nối với những ý tưởng sáng tạo. Đường viền sắc nét và
                góc cạnh của logo thể hiện tính chính xác và sự chú trọng đến
                từng chi tiết, phản ánh tinh thần làm việc nghiêm túc của đội
                ngũ <span className="text-[#7500CF]">SuperTech</span>. Logo
                không chỉ thu hút ánh nhìn mà còn khẳng định cam kết của thương
                hiệu đối với sự phát triển bền vững và công nghệ tiên tiến, mang
                lại giá trị cho người tiêu dùng.
              </span>
            </div>
          </div>

          <div className=" w-[1282px] grid grid-cols-2 overflow-hidden rounded-2xl bg-[#e0d6e71f]">
            <div className="px-[44px] py-[31px] gap-[25px] flex flex-col">
              <span className="text-[#A3A3A3] text-[12px] "> Thứ hai</span>
              <span className="text-[#000000] text-[32px] font-medium">
                {" "}
                Lịch sử và sứ mệnh của chúng tôi
              </span>
              <span className="text-[20px] text-justify">
                {" "}
                <span className="text-black text-2xl mr-2">•</span>Lịch sử của{" "}
                <span className="text-[#7500CF]">SuperTech</span> bắt đầu từ một
                nhóm đam mê công nghệ, với mục tiêu mang đến sản phẩm tiên tiến
                và chất lượng cho người tiêu dùng. Qua nhiều năm phát triển,
                Supertech đã xây dựng được uy tín trong lĩnh vực cung cấp thiết
                bị công nghệ hiện đại.
              </span>
              <span className="text-[20px] text-justify">
                {" "}
                <span className="text-black text-2xl mr-2">•</span>Sứ mệnh của
                chúng tôi là cung cấp các giải pháp công nghệ tối ưu, đáp ứng
                nhu cầu đa dạng của khách hàng. Chúng tôi cam kết không ngừng
                đổi mới và cải tiến, mang đến sản phẩm chất lượng cao, đồng thời
                tạo ra giá trị bền vững cho cộng đồng và môi trường.
              </span>
            </div>

            <div className="w-full">
              <img
                className="w-[641px] h-[525px] object-cover"
                src={bog}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[70px] py-[70px]">
        <div>
          <span className=" text-[64px] font-medium flex justify-center items-center">
            {" "}
            Sản Phẩm & Dịch Vụ
          </span>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center">
            <div className="w-[1282px] grid grid-cols-2 grid-rows-8 gap-3">
              <div className="bg-[#e6e6e650] hover:bg-[#e6e6e6] transition-all duration-700 rounded-xl row-span-3 flex justify-center items-center">
                <img
                  className="object-cover transition-transform duration-300 hover:scale-110"
                  src="https://gtctelecom.vn/uploads/images/san-pham/tainghe/Jabra-Pro-920-duo.png"
                  alt=""
                />
              </div>
              <div className="bg-[#e6e6e650]  hover:bg-[#e6e6e6] transition-all duration-700 rounded-xl row-span-5 flex justify-center items-center">
                <img
                  className="object-cover transition-transform duration-300 hover:scale-110"
                  src="https://i0.wp.com/vuatao.vn/wp-content/uploads/2021/12/iphone-11-pro-ctmobile-png.png?fit=600%2C600&ssl=1"
                  alt=""
                />
              </div>
              <div className="bg-[#e6e6e650]  hover:bg-[#e6e6e6] transition-all duration-700 rounded-xl row-span-5 flex justify-center items-center">
                <img
                  className="object-cover transition-transform duration-300 hover:scale-110"
                  src="https://cdn.tgdd.vn/Products/Images/42/329137/iphone-16-pink-600x600.png"
                  alt=""
                />
              </div>
              <div className="bg-[#e6e6e650]  hover:bg-[#e6e6e6] transition-all duration-700 rounded-xl row-span-3 flex justify-center items-center">
                <img
                  className="w-full h-full transition-transform duration-300 hover:scale-110"
                  src="https://dareu.com.vn/wp-content/uploads/2021/04/tai-nghe-gaming-dareu-eh925s-queen-01-400x400.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" ">
        <span className=" text-[50px] flex justify-center items-center font-medium">
          {" "}
          Thành Tựu
        </span>
      </div>

      <div className=" flex justify-center items-center">
        <div className=" w-[1200px] grid grid-cols-2 overflow-hidden rounded-2x1 bg-[#e0d6e71f] ">
          <div className="w-full">
            <img
              className=" w-[641px] h-[440px] object-cover"
              src={thanhtuu}
              alt=""
            />
          </div>

          <div className="px-[44px] py-[35px] gap-[35px] flex flex-col">
            <div className="h-[30%] text-[20px] text-justify">
              <span>
                Supertech cũng tự hào với dịch vụ uy tín, đảm bảo sự hài lòng
                của khách hàng sau khi mua sắm. Đội ngũ nhân viên chuyên nghiệp
                và am hiểu sản phẩm đã giúp cửa hàng xây dựng niềm tin vững chắc
                trong lòng khách hàng. Ngoài ra, Supertech còn chú trọng phát
                triển hệ thống bán hàng trực tuyến, mang lại trải nghiệm mua sắm
                nhanh chóng và tiện lợi cho quý khách hàng tân trọng!.
              </span>
            </div>

            <div className="flex-1 flex justify-between items-start flex-col">
              <div className="w-full grid grid-cols-3 ">
                <div className="flex flex-col gap-5  w-full text-[40px] font-medium ">
                  <span className="text-[#7500CF]"> 80+</span>
                  <span className="text-[10px]"> Người Dùng Mới</span>
                </div>
                <div className="flex flex-col gap-5  w-full text-[40px] font-medium">
                  <span className="text-[#7500CF]"> 160+</span>
                  <span className="text-[10px]"> Đơn Hàng</span>
                </div>
                <div className="flex flex-col gap-5  w-full text-[40px] font-medium">
                  <span className="text-[#7500CF]"> 60+</span>
                  <span className="text-[10px]"> Đánh Giá Tốt</span>
                </div>
              </div>

              <div className=" w-[100px] h-[30px] font-medium text-[15px] flex justify-center items-center rounded-[4px] text-[#FFFF] bg-[#7500CF] ">
                Xem thêm
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className=" flex flex-col justify-center items-center mb-40 gap-5">
          <h2 className="text-[50px] font-medium">Thành Viên</h2>
          <span className="text-[17px] font-medium text-[#727171]">
            Các thành viên tạo phát triển thương hiệu và Website
          </span>
        </div>

        <div className="grid grid-cols-3 gap-4  my-[70px]">
          <div className="translate-y-[-75px] relative overflow-hidden rounded-[10px]">
            <img className="w-full " src={duy} alt="" />
            <div className="absolute bottom-0 left-0 w-full p-[20px] bg-zinc-300 text-white text-[20px] text-center">
              <h2 className="text-[24px]">Phạm Ngọc Duy</h2>
              <span className="text-[15px] text-[#727171] ">Trưởng nhóm</span>
            </div>
          </div>
          <div className="translate-y-[0] relative overflow-hidden rounded-[10px]">
            <img className="w-full " src={thien} />
            <div className="absolute bottom-0 left-0 w-full p-[20px] bg-zinc-300 text-white text-[20px] text-center">
              <h2 className="text-[24px]">Lê Nguyễn Hoàng Thiện</h2>
              <span className="text-[15px] text-[#727171]">Phó nhóm</span>
            </div>
          </div>

          <div className="translate-y-[75px] relative overflow-hidden rounded-[10px] bg-slate-600">
            <img className="w-full " src={tri} alt="" />
            <div className="absolute bottom-0 left-0 w-full p-[20px] bg-zinc-300 text-white text-[20px] text-center ">
              <h2 className="text-[24px]">Lê Minh Trí</h2>
              <span className="text-[15px] text-[#727171]">Thành viên</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4  my-[70px] ">
          <div className="translate-y-[-75px] relative overflow-hidden rounded-[10px] bg-slate-300">
            <img className="w-full " src={quyen} alt="" />
            <div className="absolute bottom-0 left-0 w-full p-[20px] bg-zinc-300 text-white text-[20px] text-center">
              <h2 className="text-[24px]">Phạm Văn Quyến</h2>
              <span className="text-[15px] text-[#727171]">Thành viên</span>
            </div>
          </div>
          <div className="translate-y-[0] relative overflow-hidden rounded-[10px]">
            <img className="w-full " src={quang} alt="" />
            <div className="absolute bottom-0 left-0 w-full p-[20px] bg-zinc-300 text-white text-[20px] text-center">
              <h2 className="text-[24px]">Nguyến Khánh Việt Quang</h2>
              <span className="text-[15px] text-[#727171]">Thành viên</span>
            </div>
          </div>
          <div className="translate-y-[75px] relative overflow-hidden rounded-[10px]">
            <img className="w-full " src={thinh} alt="" />
            <div className="absolute bottom-0 left-0 w-full p-[20px] bg-zinc-300 text-white text-[20px] text-center">
              <h2 className="text-[24px]">Nguyễn Tấn Thịnh</h2>
              <span className="text-[15px] text-[#727171]">Thành viên</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-center items-center grid gap-10">
          <span className="text-[64px] font-medium  ">Đánh Giá Người Dùng</span>
          <span className="text-[17px] font-medium text-[#727171] flex justify-center items-center">
            {" "}
            Sự tin tưởng của người dùng với chúng tôi
          </span>
        </div>

        <div className="grid grid-cols-5 gap-4 my-[30px]">
          <div className="border-[1px] text-[black] rounded-[20px] gap-10">
            <div className="flex flex-col justify-between items-center gap-[20px] p-[20px]">
              <img
                className=" w-[100px] h-[100px] rounded-[50px] "
                src="https://duan24h.net/wp-content/uploads/2023/05/baby-red-3.webp"
                alt=""
              />
              <span className="text-[20px] font-medium ">BaBy Black</span>
              <span className="text-[12px] font-medium text-[#8F8F8F]">
                2h trước{" "}
              </span>
              <div>
                <span className="flex">
                  {" "}
                  <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                </span>
              </div>

              <span className="text-[12px] font-medium text-[#8F8F8F]">
                4/05/2025{" "}
              </span>
              <span className="text-[16px] font-thin">Sản phẩm tốt đấy...</span>
            </div>
          </div>
          <div className="border-[1px] text-[black] rounded-[20px] gap-10">
            <div className="flex flex-col justify-between items-center gap-[20px] p-[20px]">
              <img
                className=" w-[100px] h-[100px] rounded-[50px] "
                src="https://duan24h.net/wp-content/uploads/2023/05/baby-red-3.webp"
                alt=""
              />
              <span className="text-[20px] font-medium ">BaBy Black</span>
              <span className="text-[12px] font-medium text-[#8F8F8F]">
                2h trước{" "}
              </span>
              <div>
                <span className="flex">
                  {" "}
                  <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                </span>
              </div>

              <span className="text-[12px] font-medium text-[#8F8F8F]">
                4/05/2025{" "}
              </span>
              <span className="text-[16px] font-thin">Sản phẩm tốt đấy...</span>
            </div>
          </div>
          <div className="border-[1px] text-[black] rounded-[20px] gap-10">
            <div className="flex flex-col justify-between items-center gap-[20px] p-[20px]">
              <img
                className=" w-[100px] h-[100px] rounded-[50px] "
                src="https://duan24h.net/wp-content/uploads/2023/05/baby-red-3.webp"
                alt=""
              />
              <span className="text-[20px] font-medium ">BaBy Black</span>
              <span className="text-[12px] font-medium text-[#8F8F8F]">
                2h trước{" "}
              </span>
              <div>
                <span className="flex">
                  {" "}
                  <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                </span>
              </div>

              <span className="text-[12px] font-medium text-[#8F8F8F]">
                4/05/2025{" "}
              </span>
              <span className="text-[16px] font-thin">Sản phẩm tốt đấy...</span>
            </div>
          </div>
          <div className="border-[1px] text-[black] rounded-[20px] gap-10">
            <div className="flex flex-col justify-between items-center gap-[20px] p-[20px]">
              <img
                className=" w-[100px] h-[100px] rounded-[50px] "
                src="https://duan24h.net/wp-content/uploads/2023/05/baby-red-3.webp"
                alt=""
              />
              <span className="text-[20px] font-medium ">BaBy Black</span>
              <span className="text-[12px] font-medium text-[#8F8F8F]">
                2h trước{" "}
              </span>
              <div>
                <span className="flex">
                  {" "}
                  <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                </span>
              </div>

              <span className="text-[12px] font-medium text-[#8F8F8F]">
                4/05/2025{" "}
              </span>
              <span className="text-[16px] font-thin">Sản phẩm tốt đấy...</span>
            </div>
          </div>
          <div className="border-[1px] text-[black] rounded-[20px] gap-10">
            <div className="flex flex-col justify-between items-center gap-[20px] p-[20px]">
              <img
                className=" w-[100px] h-[100px] rounded-[50px] "
                src="https://duan24h.net/wp-content/uploads/2023/05/baby-red-3.webp"
                alt=""
              />
              <span className="text-[20px] font-medium ">BaBy Black</span>
              <span className="text-[12px] font-medium text-[#8F8F8F]">
                2h trước{" "}
              </span>
              <div>
                <span className="flex">
                  {" "}
                  <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                </span>
              </div>

              <span className="text-[12px] font-medium text-[#8F8F8F]">
                4/05/2025{" "}
              </span>
              <span className="text-[16px] font-thin">Sản phẩm tốt đấy...</span>
            </div>
          </div>
        </div>
      </div>

      <div className="py-[41px] px-[32px]">
        <div className="flex flex-col gap-6">
          <div>
            <span className=" text-[50px] flex justify-center items-center font-medium">
              Đối Tác SuperTech
            </span>
          </div>
          <div>
            <div className="text-[#727171] ">
              <span className=" text-[17px] flex justify-center items-center font-medium">
                Hơn gần 100 đối tác hợp tác cùng chúng tôi
              </span>
            </div>
            <div className="text-[#727171] ">
              <span className=" text-[17px] flex justify-center items-center font-medium">
                Mở ra cánh cửa tương lai thời đại công nghệ số và hỗ trợ{" "}
                <span className="text-[#FF0000]">24/24</span>{" "}
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center">
            <div className="w-[1282px] grid grid-cols-4 grid-rows-2 gap-3">
              <div className="bg-[#fffcfc] hover:bg-[white] transition-all duration-700 rounded-xl col-span-1 row-span-2 flex justify-center items-center">
                <img
                  className="object-cover transition-transform duration-300 hover:scale-75"
                  src="https://www.cdnlogo.com/logos/s/54/samsung.svg"
                  alt=""
                />
              </div>
              <div className="bg-[#ffffff] hover:bg-[white] transition-all duration-700 rounded-xl col-span-1 row-span-2 flex justify-center items-center">
                <img
                  className="object-cover transition-transform duration-300 hover:scale-75"
                  src="https://logoso1.com/wp-content/uploads/2020/09/logo-iphone.jpg"
                  alt=""
                />
              </div>
              <div className="bg-[#ffffff] hover:bg-[white] transition-all duration-700 rounded-xl col-span-1 row-span-2 flex justify-center items-center">
                <img
                  className="object-cover transition-transform duration-300 hover:scale-75"
                  src="https://bidesign.vn/uploads/advertise/thiet-ke-logo-sony.jpg"
                  alt=""
                />
              </div>
              <div className="bg-[#ffffff] hover:bg-[white] transition-all duration-700 rounded-xl col-span-1 row-span-2 flex justify-center items-center">
                <img
                  className="w-full h-full transition-transform duration-300 hover:scale-75"
                  src="https://brandcentral.hp.com/content/dam/sites/brand-central/elem-logo/images/Logo_1_dont.jpeg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center">
            <div className="w-[1282px] grid grid-cols-4 grid-rows-2 gap-3">
              <div className="bg-[#ffffff] hover:bg-[white] transition-all duration-700 rounded-xl col-span-1 row-span-2 flex justify-center items-center">
                <img
                  className="object-cover transition-transform duration-300 hover:scale-110"
                  src="https://inkythuatso.com/uploads/thumbnails/800/2021/11/logo-asus-inkythuatso-2-01-26-09-21-11.jpg"
                  alt=""
                />
              </div>
              <div className="bg-[#ffffff] hover:bg-[white] transition-all duration-700 rounded-xl col-span-1 row-span-2 flex justify-center items-center">
                <img
                  className="object-cover transition-transform duration-300 hover:scale-75"
                  src="https://phukienbaominh.com/wp-content/uploads/2018/12/lenovo-mobile-logo-png-4.png"
                  alt=""
                />
              </div>
              <div className="bg-[#ffffff] hover:bg-[white] transition-all duration-700 rounded-xl col-span-1 row-span-2 flex justify-center items-center">
                <img
                  className="object-cover transition-transform duration-300 hover:scale-75"
                  src="https://thanhnien.mediacdn.vn/Uploaded/minhnguyet/2022_01_30/logo-xiaomi-3035.jpg"
                  alt=""
                />
              </div>
              <div className="bg-[#ffffff] hover:bg-[white] transition-all duration-700 rounded-xl col-span-1 row-span-2 flex justify-center items-center">
                <img
                  className="w-full h-full transition-transform duration-300 hover:scale-75"
                  src="https://i.pinimg.com/736x/9f/c2/60/9fc2604b5e46b15575f807ffacf7c95c.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduce;
