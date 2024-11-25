import React from 'react'
import { Container } from '../../../../components/Style/Container'

function ListBlog() {
  return (
    <Container className="flex overflow-hidden flex-col pt-14 pr-8 pb-48 pl-20 bg-white max-md:px-5 max-md:pb-24">
    <div className="w-full max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[22%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col w-full max-md:mt-10">
            <div className="flex gap-0.5 self-start text-sm text-black">
              <div className="basis-auto">
                <span className="text-zinc-400">Trang chủ</span> / Blog
              </div>
            </div>
            <div className="flex mt-9 text-lg text-black text-opacity-50">
              <div className="grow px-7 py-2.5 rounded-md bg-neutral-200 w-fit max-md:px-5">
                Tìm kiếm
              </div>
              <div className="flex shrink-0 w-20 h-10 bg-purple-700 rounded-none max-sm:h-[45px]" />
            </div>
            <div className="self-start mt-7 text-2xl tracking-widest leading-none text-slate-800">
              Bài viết mới
            </div>
            <div className="flex shrink-0 mt-3.5 max-w-full h-px bg-purple-700 w-[329px] max-md:mr-2.5" />
            <div className="flex flex-col items-start pl-2 mt-5 w-full">
              <div className="flex gap-7 items-start pt-2 pr-9 pb-4 pl-1.5 max-md:pr-5">
                <img
                  loading="lazy"
                  srcSet="anh.png"  
                  className="object-contain shrink-0 aspect-square w-[76px]"
                />
                <div className="flex flex-col items-start mt-2">
                  <div className="text-sm font-medium text-zinc-800">
                    Iphone 14 pro max ...
                  </div>
                  <div className="flex gap-1.5 mt-3">
                    <div className="mt-0.5 text-sm font-black leading-none text-neutral-500">
                      <p>📅</p>
                    </div>
                    <div className="text-sm font-medium leading-snug basis-auto text-neutral-500">
                      3 Tháng Mười, 2023
                    </div>
                  </div>
                  <div className="flex gap-3.5 self-stretch mt-2.5 text-xs text-neutral-500">
                    <div className="flex flex-1 gap-1.5">
                      <div className="leading-none">
                        <p>💬</p>
                      </div>
                      <div className="box-border relative pt-0 font-medium leading-loose">
                        {" "}
                        3 Bình luận
                      </div>
                    </div>
                    <div className="flex flex-1 gap-2 self-start">
                      <div className="font-black leading-none">
                        <p>✆</p>
                      </div>
                      <div className="box-border relative pt-0 -mt-0.5 font-medium leading-loose">
                        Điện thoại
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-7 items-start pt-2 pr-9 pb-4 pl-1.5 mt-3 max-md:pr-5">
                <img
                  loading="lazy"
                  srcSet="anh.png"
                  className="object-contain shrink-0 aspect-square w-[76px]"
                />
                <div className="flex flex-col items-start mt-2">
                  <div className="text-sm font-medium text-zinc-800">
                    Iphone 14 pro max ...
                  </div>
                  <div className="flex gap-1.5 mt-3">
                    <div className="text-sm font-black leading-none text-neutral-500">
                      <p>📅</p>
                    </div>
                    <div className="text-sm font-medium leading-snug basis-auto text-neutral-500">
                      3 Tháng Mười, 2023
                    </div>
                  </div>
                  <div className="flex gap-3.5 self-stretch mt-2.5 text-xs text-neutral-500">
                    <div className="flex flex-1 gap-1.5">
                      <div className="leading-none">
                        <p>💬</p>
                      </div>
                      <div className="box-border relative font-medium leading-loose">
                        {" "}
                        3 Bình luận
                      </div>
                    </div>
                    <div className="flex flex-1 gap-2 self-start">
                      <div className="mt-1 font-black leading-none">
                        <p>✆</p>
                      </div>
                      <div className="font-medium leading-loose">
                        Điện thoại
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-14 text-2xl tracking-widest leading-none text-slate-800 max-md:mt-10">
                Danh mục phổ biến
              </div>
              <div className="flex shrink-0 self-stretch mt-4 w-full h-px bg-purple-700" />
            </div>
          </div>
          <div className="flex gap-5 justify-between items-start mt-8 ml-3 max-w-full leading-snug text-slate-800 w-[307px] max-md:ml-2.5">
            <div className="flex flex-col items-start text-lg">
              <div className="self-stretch">điện thoại</div>
              <div className="mt-4">laptop</div>
              <div className="mt-4">phụ kiện</div>
            </div>
            <div className="flex flex-col text-base">
              <div>(3 )</div>
              <div className="mt-4">(6 )</div>
              <div className="mt-4">(2 )</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[78%] max-md:ml-0 max-md:w-full">
          <div className="grow mt-32 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col px-8 pt-4 pb-8 w-full border-4 border-solid border-slate-200 text-neutral-500 max-md:px-5 max-md:mt-7">
                  <img
                    loading="lazy"
                    srcSet="anh.png"
                    className="object-contain w-full aspect-[2.11] max-md:mr-1.5"
                  />
                  <div className="flex gap-6 items-start mt-6">
                    <div className="flex flex-1 gap-2.5 self-stretch">
                      <div className="text-base font-black leading-none">
                        <p>🏷️</p>
                      </div>
                      <div className="box-border relative text-sm font-medium leading-loose">
                        Điện thoại
                      </div>
                    </div>
                    <div className="flex flex-1 gap-1.5">
                      <div className="mt-px text-base leading-none">
                        <p>💬</p>
                      </div>
                      <div className="box-border relative text-sm font-medium leading-loose">
                        {" "}
                        3 Bình luận
                      </div>
                    </div>
                    <div className="flex flex-1">
                      <div className="mt-px text-base leading-none">
                        <p>🕒</p>
                      </div>
                      <div className="box-border relative pl-1 text-sm font-medium leading-loose">
                        {" "}
                        3 giờ trước
                      </div>
                    </div>
                  </div>
                  <div className="self-start mt-3.5 text-2xl leading-loose text-neutral-900">
                    Iphone 14 pro max đã ra mắt{" "}
                  </div>
                  <div className="mt-3 text-lg leading-6 max-md:mr-2.5">
                    IPad 11 đang mở rộng thị trường liệu có thực sự bùng nổ
                    ?.....
                  </div>
                  <div className="flex gap-2 self-start mt-5 text-lg leading-none">
                    <div>Đọc ngay</div>

                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col px-8 pt-4 pb-8 w-full border-4 border-solid border-slate-200 text-neutral-500 max-md:px-5 max-md:mt-7">
                  <img
                    loading="lazy"
                    srcSet="anh.png"
                    className="object-contain w-full aspect-[2.11] max-md:mr-1.5"
                  />
                  <div className="flex gap-6 items-start mt-6">
                    <div className="flex flex-1 gap-2.5 self-stretch">
                      <div className="mt-0.5 text-base font-black leading-none">
                        <p>🏷️</p>
                      </div>
                      <div className="box-border relative text-sm font-medium leading-loose max-sm:pl-0">
                        Điện thoại
                      </div>
                    </div>
                    <div className="flex flex-1 gap-1.5">
                      <div className="mt-1 ml-0 text-base leading-none">
                        <p>💬</p>
                      </div>
                      <div className="box-border relative text-sm font-medium leading-loose">
                        {" "}
                        3 Bình luận
                      </div>
                    </div>
                    <div className="flex flex-1">
                      <div className="mt-0.5 text-base leading-none">
                        <p>🕒</p>
                      </div>
                      <div className="box-border relative pl-1.5 text-sm font-medium leading-loose">
                        {" "}
                        3 giờ trước
                      </div>
                    </div>
                  </div>
                  <div className="self-start mt-3.5 text-2xl leading-loose text-neutral-900">
                    Iphone 14 pro max đã ra mắt{" "}
                  </div>
                  <div className="mt-3 text-lg leading-6 max-md:mr-2.5">
                    IPad 11 đang mở rộng thị trường liệu có thực sự bùng nổ
                    ?.....
                  </div>
                  <div className="flex gap-2 self-start mt-5 text-lg leading-none">
                    <div>Đọc ngay</div>
              
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col px-8 pt-4 pb-8 w-full border-4 border-solid border-slate-200 text-neutral-500 max-md:px-5 max-md:mt-7">
                  <img
                    loading="lazy"
                    srcSet="anh.png"
                    className="object-contain w-full aspect-[2.11] max-md:mr-1.5"
                  />
                  <div className="flex gap-6 items-start mt-6">
                    <div className="flex flex-1 gap-2.5 self-stretch -mt-px">
                      <div className="mt-1 text-base font-black leading-none">
                        <p>🏷️</p>
                      </div>
                      <div className="box-border relative pt-px pl-0 text-sm font-medium leading-loose max-sm:pl-0">
                        Điện thoại
                      </div>
                    </div>
                    <div className="flex flex-1 gap-1.5">
                      <div className="mt-1 ml-0 text-base leading-none">
                        <p>💬</p>
                      </div>
                      <div className="box-border relative pl-px text-sm font-medium leading-loose">
                        {" "}
                        3 Bình luận
                      </div>
                    </div>
                    <div className="flex flex-1">
                      <div className="mt-0.5 text-base leading-none">
                        <p>🕒</p>
                      </div>
                      <div className="box-border relative pl-1.5 text-sm font-medium leading-loose">
                        {" "}
                        3 giờ trước
                      </div>
                    </div>
                  </div>
                  <div className="self-start mt-3.5 text-2xl leading-loose text-neutral-900">
                    Iphone 14 pro max đã ra mắt{" "}
                  </div>
                  <div className="mt-3 text-lg leading-6 max-md:mr-2.5">
                    IPad 11 đang mở rộng thị trường liệu có thực sự bùng nổ
                    ?.....
                  </div>
                  <div className="flex gap-2 self-start mt-5 text-lg leading-none">
                    <div>Đọc ngay</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex gap-1 self-center mt-5 ml-52 max-w-full text-base text-purple-700 whitespace-nowrap w-[157px]">
      <div className="flex shrink-0 bg-white rounded-sm border border-purple-700 border-solid h-[29px] w-[29px]" />
      <div className="px-2.5 text-white bg-purple-700 rounded-sm border border-solid border-stone-400 h-[29px] w-[29px]">
        1
      </div>
      <div className="px-2.5 bg-white rounded-sm border border-purple-700 border-solid h-[29px] w-[29px]">
        2
      </div>
      <div className="px-2 bg-white rounded-sm border border-purple-700 border-solid h-[29px] w-[29px]">
        ...
      </div>
      <div className="flex shrink-0 bg-white rounded-sm border border-purple-700 border-solid h-[29px] w-[29px]" />
    </div>
  </Container>
    )
}

export default ListBlog