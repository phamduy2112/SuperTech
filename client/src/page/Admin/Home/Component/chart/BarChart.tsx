import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { getTopFiveProduct } from '../../../../../service/data/data.service';

function BarChart() {
  const [data, setData] = useState(null); // State để lưu trữ dữ liệu
  const [period, setPeriod] = useState('day'); // State để lưu lựa chọn thời gian

  // Hàm fetch dữ liệu từ API
  const fetchApi = async (selectedPeriod) => {
    try {
      const resp = await getTopFiveProduct({ period: selectedPeriod }); // Gọi API lấy dữ liệu
      const productData = resp.data.content; // Dữ liệu lấy từ API

      // Chuyển đổi dữ liệu thành định dạng phù hợp với biểu đồ
      const labels = productData.map(item => 
        item.product.product_name.length > 20 
          ? item.product.product_name.substring(0, 20) + '...' 
          : item.product.product_name
      ); // Tên sản phẩm, rút gọn nếu tên dài hơn 20 ký tự

      const totalQuantity = productData.map(item => parseInt(item.total_quantity)); // Tổng số lượng bán

      setData({
        labels,
        datasets: [
          {
            label: 'Số lượng bán',
            data: totalQuantity, // Dữ liệu tổng số lượng bán
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Fetch dữ liệu khi component mount hoặc khi period thay đổi
  useEffect(() => {
    fetchApi(period); // Gọi lại API khi period thay đổi
  }, [period]);

  // Nếu chưa có dữ liệu, hiển thị loading
  if (!data) {
    return <div>Loading...</div>;
  }

  const BarOptions = {
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
    tooltips: {
      callbacks: {
        // This will display the full product name when hovering over the bar
        label: function (tooltipItem) {
          const productData = data.labels[tooltipItem.index]; // Get the product name
          const productNameFull = data.content[tooltipItem.index].product.product_name; // Get the full name from the API response
          return `${productNameFull}: ${tooltipItem.raw}`;
        },
      },
    },
  };

  return (
    <div className="flex-1 box-border h-[300px]">
      {/* Select dropdown để chọn thời gian */}
      <div className="mb-4">
        <label htmlFor="period" className="mr-2">Chọn thời gian: </label>
        <select 
          id="period" 
          value={period} 
          onChange={(e) => setPeriod(e.target.value)} 
          className="p-2 border rounded"
        >
          <option value="day">Ngày</option>
          <option value="week">Tuần</option>
          <option value="month">Tháng</option>
        </select>
      </div>

      {/* Biểu đồ Bar */}
      <Bar data={data} options={BarOptions} />
    </div>
  );
}

export default BarChart;
