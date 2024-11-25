import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { getTopFiveProduct } from '../../../../../service/data/data.service';

function BarChart() {
  const [data, setData] = useState(null); // State để lưu trữ dữ liệu

  useEffect(() => {
    // Hàm fetch dữ liệu từ API
    const fetchApi = async () => {
      try {
        const resp = await getTopFiveProduct(); // Gọi API lấy dữ liệu
        const productData = resp.data.content.slice(0, 5); // Lấy 5 sản phẩm đầu tiên

        // Chuyển đổi dữ liệu thành định dạng phù hợp với biểu đồ
        const labels = productData.map(item => item.product_name); // Tên sản phẩm
        const importData = productData.map(item => parseInt(item.import_count)); // Số lượng nhập
        const sellData = productData.map(item => parseInt(item.sell_count)); // Số lượng bán

        setData({
          labels,
          datasets: [
            {
              label: 'Nhập',
              data: sellData,
              backgroundColor: 'rgba(75, 112, 192, 0.2)',
              borderColor: 'rgba(75, 112, 192, 1)',
              borderWidth: 1,
            },
        
          ],
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchApi(); // Gọi hàm fetch dữ liệu khi component mount
  }, []);

  // Nếu chưa có dữ liệu, hiển thị loading
  if (!data) {
    return <div>Loading...</div>;
  }

  const BarDouble = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="flex-1 box-border h-[300px]">
      <Bar data={data} options={BarDouble} />
    </div>
  );
}

export default BarChart;
