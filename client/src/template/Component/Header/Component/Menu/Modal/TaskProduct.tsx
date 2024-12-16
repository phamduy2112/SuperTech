import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom';

interface Category {
  category_id: number;
  category_name: string | null;
  category_image: string | null;
  category_dad: number | null;
  category_date_task: string;
  category_task: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function TaskProduct(props: any) {
  const [catelogries, setcatelogries] = useState<Category[]>()
  useEffect(() => {
    setcatelogries(props.props)
  }, [props.props])

  const categoryDadNames: { [key: number]: string } = {
    1: "Điện thoại",
    2: "Laptop",
    3: "Sạc dự phòng",
    4: "Sạc/Cáp sạc",
    5: "Ốp Lưng",
    6: "Tai Nghe",
    7: "Cáp Chuyển Đổi",


  };

  const groupedCategories = catelogries?.reduce<{ [key: number]: Category[] }>((acc, item) => {
    const categoryDad = item?.category_dad;
    if (categoryDad !== null) {
      if (!acc[categoryDad]) {
        acc[categoryDad] = [];
      }
      acc[categoryDad].push(item);
    }
    return acc;
  }, {});

  const SetProduct = (props: any) => {
    return (
      < Link
        to={`list-sản-phẩm?category_dad=${props.props?.category_dad}&category=${props.props?.category_id}`
        }
        className="block"
      >
        {props.props.category_name}
      </ Link>
    )

  }


  return (
    <div className="absolute z-50 left-0 top-full mt-2 bg-white p-4 shadow-lg rounded-lg">
      <div className="w-auto py-[1.5rem] px-[1.6rem]">
        <ul className="space-y-6">
          {groupedCategories && Object.keys(groupedCategories).length > 0 ? (
            Object.keys(groupedCategories).map((categoryDadId) => {
              const categoryItems = groupedCategories[parseInt(categoryDadId)];
              const categoryName = categoryDadNames[parseInt(categoryDadId)] || "Mục cha khác";

              return (
                <div key={categoryDadId}>
                  <h3 className="text-[1.6rem] text-[#7500CF] mb-[1rem] font-semibold border-b-2 border-[#7500CF] pb-2">
                    {categoryName}
                  </h3>
                  <ul className="grid grid-cols-[repeat(5,150px)] gap-4">
                    {categoryItems.map((item) => (
                      <li key={item.category_id} className="text-[13.5px] font-bold text-gray-700">
                        <SetProduct props={item} />

                      </li>
                    ))}
                  </ul>
                </div>
              );
            })
          ) : (
            <p className="text-center text-gray-500">Không có danh mục nào</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default TaskProduct;