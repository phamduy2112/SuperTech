import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { getOrderWeekSales } from '../../../../../service/data/data.service';

function LineChart() {
  const [data, setData] = useState(null); // State để lưu trữ dữ liệu

  useEffect(() => {
    // Hàm fetch dữ liệu từ API
    const fetchApi = async () => {
      try {
        const resp = await getOrderWeekSales(); // Lấy dữ liệu từ API
        const salesData = resp.data.content;

        // Chuyển đổi dữ liệu thành định dạng phù hợp với biểu đồ
        const labels = salesData.map(item => `Tuần ${item.week_start}`); // Tạo nhãn từ week_start
        const sales = salesData.map(item => parseInt(item.total_sales)); // Chuyển total_sales thành số

        setData({ labels, sales }); // Lưu dữ liệu vào state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchApi(); // Gọi hàm fetch dữ liệu khi component mount
  }, []);

  // Nếu chưa có dữ liệu, hiển thị loading
  if (!data) {
    return <div>Loading...</div>;
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="flex-1 box-border h-[300px]">
      <Line
        data={{
          labels: data.labels, // Nhãn tuần được lấy từ API
          datasets: [
            {
              label: 'Doanh Thu',
              data: data.sales, // Dữ liệu doanh thu lấy từ API
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
              tension: 0.4,
            },
          ],
        }}
        options={options}
      />
    </div>
  );
}

export default LineChart;