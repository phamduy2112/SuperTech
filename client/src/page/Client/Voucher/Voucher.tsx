import React, { useState } from 'react';

// Data for demo purposes
const categories = [
  { id: 1, name: "Freeship", icon: "🚚" },
  { id: 2, name: "Giảm Giá", icon: "💸" },
  { id: 3, name: "Shopee Pay", icon: "💰" },
  { id: 4, name: "Điện Tử", icon: "📱" },
];

const vouchers = [
  { id: 1, label: "Freeship", discount: "Giảm tối đa 300k", minOrder: "₫0", expiration: "30/11" },
  { id: 2, label: "Shopee", discount: "Giảm 50k", minOrder: "₫200k", expiration: "30/11" },
  { id: 3, label: "Điện Tử", discount: "Giảm 15%", minOrder: "₫3.000k", expiration: "30/11" },
];

const VoucherPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);

  return (
    <div className="p-4 bg-gray-100">
      {/* Tabs Section */}
      <div className="flex space-x-4 overflow-x-auto border-b mb-4">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`px-4 py-2 rounded-t-md font-semibold ${selectedCategory === category.id ? 'border-b-2 border-orange-500 text-orange-500' : 'text-gray-600'}`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.icon} {category.name}
          </button>
        ))}
      </div>

      {/* Voucher List Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {vouchers.map((voucher) => (
          <VoucherCard key={voucher.id} {...voucher} />
        ))}
      </div>
    </div>
  );
};

// Single Voucher Card Component
const VoucherCard = ({ label, discount, minOrder, expiration }) => {
  return (
    <div className="flex border border-gray-300 rounded-lg overflow-hidden shadow-sm">
      {/* Left Section */}
      <div className="w-1/3 bg-green-500 text-white flex flex-col justify-center items-center p-4">
        <h2 className="text-lg font-bold">{label}</h2>
        <p className="text-sm">{discount}</p>
      </div>
      
      {/* Right Section */}
      <div className="flex-grow bg-white p-4">
        <div className="flex items-center mb-2">
          <span className="bg-yellow-400 text-xs font-bold px-2 py-1 rounded-md mr-2">Số lượng có hạn</span>
          <span className="text-lg font-semibold">Giảm {discount}</span>
        </div>
        <p className="text-sm text-gray-700">Đơn tối thiểu: {minOrder}</p>
        <p className="text-xs text-gray-500">HSD: {expiration}</p>
        
        <div className="mt-2">
          <button className="bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-md w-full">
            Lưu
          </button>
        </div>
      </div>
    </div>
  );
};

export default VoucherPage;
