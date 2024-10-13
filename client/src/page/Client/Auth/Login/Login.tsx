import React from "react";
import dienThoai from '../asset/dienthoaisign.png'
import bgdienThoai from '../asset/dienthoai.png'
function Login() {
  return (
<div className="">
  <div className="flex overflow-hidden relative h-[100vh]">
    {/* Left Section: Registration Form */}

 <div className="w-[60%] relative  overflow-hidden">
      {/* Diagonal Purple Background */}
   
      <div className="absolute inset-0 bg-purple-700 clip-diagonal-left" />
   <div className="absolute bottom-[-40%] left-0 opacity-30">
        <img src={bgdienThoai} className="w-[1000px]" alt="" />
      </div>
      <div className="relative top-[40%] left-[55%] translate-x-[-50%] translate-y-[-50%] z-10 text-white text-center p-8 flex flex-col justify-center items-center">
        <h1 className="text-[5rem] font-bold mb-2">SuperTech</h1>
        <p className="max-w-sm mx-auto">
          SuperTech là trang website mua sắm trực tuyến với nhiều ưu đãi và khuyến mãi. Hãy đăng nhập để có trải nghiệm tốt nhất và đồng hành cùng chúng tôi.
        </p>
      </div>
      {/* Image of iPhone */}
      <div className="absolute right-[-10%] top-[20%] z-10">
        <img src={dienThoai} alt="iPhone" className="w-[500px] object-contain" />
      </div>
    </div>
    {/* Right Section: Advertisement */}
   
    <div className="w-[40%] m-auto">
    <div className="w-[80%] m-auto p-8 flex flex-col justify-center z-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Đăng nhập</h2>
      <p className="mb-4 text-gray-600 text-center">Bạn có thể đăng nhập</p>
      {/* Social Buttons */}
      <div className="flex gap-4 mb-6">
        <button className="w-1/2 py-2 px-4 border border-[#7500CF] flex items-center justify-center rounded-lg text-gray-700">
          <img src="https://www.svgrepo.com/show/355037/facebook-icon.svg" alt="Facebook" className="w-6 h-6 mr-2" />
          Facebook
        </button>
        <button className="w-1/2 py-2 px-4 border border-[#7500CF] flex items-center justify-center rounded-lg text-gray-700">
          <img src="https://www.svgrepo.com/show/355037/google-icon.svg" alt="Google" className="w-6 h-6 mr-2" />
          Google
        </button>
      </div>
      {/* Form */}
      <form className="space-y-4">
      
        <div>
          <label className="block text-gray-700">Email</label>
          <input type="email" placeholder="username@gmail.com" className="w-full border border-[#7500CF] rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-300 focus:outline-none" />
        </div>
        <div>
          <label className="block text-gray-700">Mật khẩu</label>
          <input type="password" placeholder="Password" className="w-full border border-[#7500CF] rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-300 focus:outline-none" />
        </div>
      
        {/* Submit Button */}
        <button className="w-full py-3 bg-[#7500CF] text-white rounded-lg font-bold hover:bg-purple-700 transition duration-300">
          Đăng nhập
        </button>
      </form>
      {/* Link to Sign In */}
      <p className="mt-4 text-gray-600 text-center">
        Bạn chưa có tài khoản? <a href="#" className="text-purple-600">Đăng kí ngay</a>
      </p>
    </div>

    </div>
  </div>
</div>
  );
}

export default Login;
