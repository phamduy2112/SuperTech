import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { getOrderWeekSales } from '../../../../../service/data/data.service';

function PieChart() {
  const Doughnut = {
    responsive: true,
    cutout: '85%', // Tỉ lệ cắt bỏ để làm kiểu doughnut
    maintainAspectRatio: true,
  };

  const [data, setData] = useState(null); // State để lưu trữ dữ liệu từ API

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const resp = await getOrderWeekSales(); // Gọi API để lấy dữ liệu
        const salesData = resp.data.content;

        // Chuyển đổi dữ liệu API thành định dạng biểu đồ
        const labels = salesData.map((item) => `Tuần ${item.week_start}`); // Tạo nhãn từ week_start
        const sales = salesData.map((item) => parseInt(item.total_sales)); // Chuyển total_sales thành số

        setData({
          labels, // Nhãn (labels)
          datasets: [
            {
              label: 'Doanh Thu', // Tên dataset
              data: sales, // Dữ liệu (sales)
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(76, 175, 80)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
              ],
              hoverOffset: 4, // Hiệu ứng khi hover
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchApi(); // Gọi hàm fetch dữ liệu khi component mount
  }, []);

  // Hiển thị trạng thái loading nếu chưa có dữ liệu
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <Pie
      className="absolute"
      data={data} // Truyền dữ liệu từ state
      options={Doughnut} // Truyền cấu hình biểu đồ
    />
  );
}

export default PieChart;
