import React from "react";
function Login() {
  return (
    <div className="flex flex-col">
      <div className="flex gap-5 max-md:flex-col">
        {/* Left Section */}
        <div className="flex flex-col w-[67%] max-md:w-full">
          <div className="flex relative flex-col grow justify-center items-start px-20 py-80 mr-auto w-full max-w-[929px] min-h-[822px] max-md:px-5 max-md:py-24 max-md:mt-10 max-md:max-w-full max-sm:hidden">
            <img
              loading="lazy"
              src=""
              className="object-contain object-top absolute inset-0 size-full"
            />
            <div className="flex flex-col max-w-full w-[441px]">
              <div className="text-8xl leading-none text-pink-50 max-md:text-4xl">
                SuperTech
              </div>
              <div className="mt-12 text-base leading-7 text-neutral-100 max-md:mt-10">
                Supertech là trang mua sắm trực tuyến với nhiều ưu đãi và khuyến mãi, hãy đăng nhập để có trải nghiệm tốt nhất.
              </div>
            </div>
          </div>
        </div>

        {/* Right Section (Login Form) */}
        <div className="flex flex-col w-[33%] max-md:w-full">
          <div className="flex flex-col self-stretch my-auto max-md:mt-10">
            <div className="mx-auto text-4xl font-extrabold text-black">
              <p>SuperTech Xin Chào</p>
            </div>
            <div className="self-center mt-3 text-xs text-neutral-500">
              Vui lòng đăng nhập
            </div>

            {/* Social Login */}
            <div className="flex gap-7 self-center mt-3.5 w-[325px] max-w-full">
              <div className="flex flex-1 gap-2.5 px-4 py-2.5 bg-white rounded-md border border-neutral-300">
                <img
                  loading="lazy"
                  src="../facebook.svg"
                  className="object-contain w-6 aspect-square"
                />
                <div>Facebook</div>
              </div>
              <div className="flex flex-1 gap-2.5 px-4 py-2.5 bg-white rounded-md border border-neutral-300">
                <img
                  loading="lazy"
                  src="../google.svg"
                  className="object-contain w-6 aspect-square"
                />
                <div>Google</div>
              </div>
            </div>

            <div className="self-center mt-2.5 text-xs text-neutral-500">
              Hoặc đăng nhập với
            </div>

            {/* Login Fields */}
            <div className="self-start mt-1.5 text-xs font-medium text-black max-md:ml-1.5">
              Email
            </div>
            <input
              type="email"
              placeholder="username@gmail.com"
              className="py-2.5 px-3 w-full text-sm bg-white rounded-md border border-purple-700"
            />

            <div className="self-start mt-5 text-xs font-medium text-black max-md:ml-1.5">
              Mật khẩu
            </div>
            <input
              type="password"
              placeholder="Password"
              className="py-2.5 px-3 w-full text-sm bg-white rounded-md border border-purple-700"
            />

            <div className="flex justify-between mt-4 w-full">
              <label className="flex gap-0.5 text-xs text-black">
                <input type="checkbox" className="h-3 w-3" />
                Lưu thông tin đăng nhập
              </label>
              <a href="#" className="text-xs text-purple-700">Quên mật khẩu?</a>
            </div>

            {/* Submit Button */}
            <button className="px-16 py-2.5 mt-1.5 w-full text-base font-semibold text-white bg-purple-700 rounded max-md:px-5">
              Đăng nhập
            </button>

            <div className="self-center mt-3.5 text-xs text-black">
              Bạn không có tài khoản? <a href="#" className="text-purple-700">Đăng ký ngay</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
