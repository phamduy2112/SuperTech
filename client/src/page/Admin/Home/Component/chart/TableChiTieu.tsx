import { Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { getUserOrderCount } from '../../../../../service/data/data.service';

function TableChiTieu() {
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getUserOrderCount();
      const transformedData = response.data.content.map((item) => ({
        key: item.user_id, // Đặt key cho từng dòng
        user_name: item.user.user_name,
        money: parseInt(item.totalSpent, 10), // Chuyển đổi sang số
        total_orders: item.totalOrders,
        address: "N/A", // Thêm giá trị mặc định nếu cần
      }));
      setDataTable(transformedData);
    };
    fetchApi();
  }, []);

  const columns = [
    {
      title: 'Tên',
      dataIndex: 'user_name',
      key: 'name',
    },
    {
      title: 'Số Tiền Mua Hàng',
      dataIndex: 'money',
      key: 'money',
      sorter: (a, b) => a.money - b.money,
      render: (money) => money.toLocaleString('vi-VN') + ' VNĐ', // Định dạng tiền tệ
    },
    {
      title: 'Số Đơn Hàng',
      dataIndex: 'total_orders',
      key: 'total_orders',
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  const onChange = (pagination, filters, sorter) => {
    console.log('Pagination:', pagination);
    console.log('Filters:', filters);
    console.log('Sorter:', sorter);
  };

  return (
    <Table
      columns={columns}
      dataSource={dataTable}
      pagination={{ pageSize: 5 }}
      size="large"
      onChange={onChange}
    />
  );
}

export default TableChiTieu;