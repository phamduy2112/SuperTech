



function AdminOrder() {
  return (
    <div className="flex gap-[2rem] p-12 text-[2rem] bg-gray-100 h-[100vh]">

<main className="flex-1 bg-white p-6">
  <div className="flex justify-between items-center">
    <h1 className="text-xl font-bold">Thông tin đơn hàng</h1>
  </div>
  <div className="flex justify-center items-center w-full h-[calc(100vh-80px)]"> 
    {/* H: chiếm toàn bộ chiều cao trừ header */}
    <h5 className="text-center text-gray-500 text-[2rem] font-semibold">
      Đơn hàng chưa được mở
    </h5>
  </div>
</main>
      <div className="w-[40%] rounded-sm">

  <div className="">
    {/* Order list */}
    <div className="p-3 rounded-lg">
      <div className="flex text-[1.7rem] text-center justify-between bg-customColor py-[2rem] px-[2rem] text-white">
        <span className="flex-1 text-center">Mã ĐH</span>
        <span className="flex-1 text-center">Trạng thái</span>
        <span className="flex-1 text-center">Tổng tiền</span>
        <span className="flex-1 text-center">Thời gian</span>
      </div>
      {/* Example Order */}
      <div className="mt-2 bg-white text-center text-[1.6rem] px-[2rem] py-[2rem] rounded-lg shadow hover:bg-gray-100">
        <div className="flex justify-between items-center">
          <span className="flex-1 text-center">#924</span>
          <span className="flex-1 text-green-500 text-center">Đang giao</span>
          <span className="flex-1 text-green-500 text-center">3.000.000đ</span>
          <span className="flex-1 text-gray-500 text-center">2 ngày trước</span>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}

export default AdminOrder;
