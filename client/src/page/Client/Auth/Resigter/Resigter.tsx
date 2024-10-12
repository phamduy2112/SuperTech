import * as React from "react";

function Resigter() {
  return (
    <div className="overflow-hidden pl-16 bg-white max-md:pl-5">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-24 max-md:mt-10">
            <div className="self-center text-4xl font-extrabold text-black">
              Đăng Kí
            </div>
            <div className="self-center mt-1.5 text-xs text-neutral-500">
              Bạn có thể đăng kí
            </div>
            <div className="flex flex-col px-3.5 mt-4 w-full max-md:pr-5">
              <div className="flex z-10 gap-6 text-lg font-medium text-neutral-700">
                <div className="flex flex-1 gap-2.5 px-4 py-2.5 bg-white rounded-md border border-solid border-neutral-300">
                  <img
                    loading="lazy"
                    src="../facebook.svg"
                    className="object-contain shrink-0 w-6 aspect-square"
                  />
                  <div className="my-auto"> Facebook</div>
                </div>
                <div className="flex flex-1 gap-5 px-4 py-2.5 whitespace-nowrap bg-white rounded-md border border-solid border-neutral-300">
                  <img
                    loading="lazy"
                    src="../google.svg"
                    className="object-contain shrink-0 w-6 aspect-[0.96]"
                  />
                  <div>Google</div>
                </div>
              </div>
              <div className="self-start mt-0 ml-16 text-xs text-white max-md:ml-2.5">
                Facebook
              </div>
            </div>
            <div className="self-start mt-5 text-xs font-medium text-black">
              Họ và tên
            </div>
            <div className="px-3 py-3 mt-2 max-w-full text-sm bg-white rounded-md border border-solid border-purple-700 border-opacity-50 text-stone-300 w-[360px] max-md:pr-5 max-md:mr-0.5 max-sm:w-[337px]">
              Nguyễn Thị Văn A
            </div>
            <div className="self-start mt-5 text-xs font-medium text-black max-md:ml-0.5">
              Email
            </div>
            <div className="px-3 py-3 max-w-full text-sm whitespace-nowrap bg-white rounded-md border border-solid border-purple-700 border-opacity-50 text-stone-300 w-[360px] max-md:pr-5 max-sm:w-[335px]">
              username@gmail.com
            </div>
            <div className="self-start mt-5 text-xs font-medium text-black max-md:ml-0.5">
              Mật khẩu
            </div>
            <div className="px-3.5 py-3.5 max-w-full text-sm whitespace-nowrap bg-white rounded-md border border-solid border-purple-700 border-opacity-50 text-stone-300 w-[360px] max-md:pr-5 max-sm:w-[338px]">
              Password
            </div>
            <div className="self-start mt-5 text-xs font-medium text-black max-md:ml-0.5">
              Xác nhận mật khẩu
            </div>
            <div className="px-3.5 py-2.5 max-w-full text-sm whitespace-nowrap bg-white rounded-md border border-purple-700 border-solid text-stone-300 w-[360px] max-md:pr-5 max-md:ml-0.5 max-sm:w-[339px]">
              Password
            </div>
            <div className="px-16 py-3 mt-5 max-w-full text-base font-semibold text-white bg-purple-700 rounded w-[360px] max-md:px-5 max-md:mr-0.5 max-sm:w-[345px]">
              Đăng ký
            </div>
            <div className="self-center mt-1.5 text-xs text-black">
              Bạn đã có tài khoản ?
              <span className="text-purple-700"> Đăng Nhập ngay</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[70%] max-md:ml-0 max-md:w-full">
          <div className="grow px-px pt-20 pb-44 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet=""
                  className="object-contain grow w-full aspect-[0.67] max-md:mt-10 max-sm:hidden"
                />
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col mt-64 text-base leading-7 text-neutral-100 max-md:mt-10 max-md:max-w-full">
                  <div className="self-start text-8xl leading-none text-pink-50 max-md:text-4xl">
                    SuperTech
                  </div>
                  <div className="mt-9 ml-4 max-md:max-w-full">
                    Supertech là trang website mua sắm trực tuyến với nhiều ưu
                    đãi và khuyến mãi hãy đăng nhập để có trải nghiệm tốt nhất
                    và đồng hành cùng chúng tôi.
                  </div>
                  <div className="max-md:mr-2.5 max-md:max-w-full">
                    Supertech là trang website mua sắm trực tuyến với nhiều ưu
                    đãi và khuyến mãi hãy đăng nhập để có trải nghiệm tốt nhất
                    và đồng hành cùng chúng tôi.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Resigter;
