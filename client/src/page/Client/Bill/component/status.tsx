// src/components/Bill/component/Status.jsx

import React from 'react';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

function Status({ items }) {
  return (
    <div className="flex flex-col space-y-6">
      {items.map((item, index) => (
        <div key={item.id} className="flex items-center">
          {/* Step Indicator */}
          <div className="relative flex flex-col items-center">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
              item.st ? 'bg-green-500 border-green-500' : 'bg-gray-300 border-gray-300'
            }`}>
              {item.st ? <IoMdCheckmarkCircleOutline className="text-white text-xl" /> : item.number}
            </div>
            {index < items.length - 1 && (
              <div className={`w-1 h-16 bg-${
                items[index + 1].st ? 'green-500' : 'gray-300'
              } mt-2`}></div>
            )}
          </div>
          {/* Label */}
          <span className={`ml-4 text-lg ${
            item.st ? 'text-green-700 font-semibold' : 'text-gray-500'
          }`}>{item.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Status;