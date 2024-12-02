import { Table } from 'antd';
import React, { useEffect, useState } from 'react'
import { getUserOrderCount } from '../../../../../service/data/data.service';

function TableChiTieu() {
    const [dataTable,setDataTable]=useState();
    useEffect(()=>{
       const fetchApi=async()=>{
        const responsive=await getUserOrderCount()
        setDataTable(responsive.data.content.slice(0, 5))
    }
    fetchApi();
    },[])
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
    
          sorter: {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            compare: (a: any, b: any) => a.money - b.money,
            multiple: 1, // Cột này có độ ưu tiên cao nhất
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        //   render: (text: any) => {
        //     return text.toLocaleString('vi-VN') + ' VNĐ';
        //   },
    
        },
        {
          title: 'Số Đơn Hàng',
          dataIndex: 'total_orders',
          
         
        },
        {
          title: 'Địa chỉ',
          dataIndex: 'address',
          key: 'address',
        },
      ];
      const onChange = (pagination: any, filters: any, sorter: any) => {
        // Ghi lại thông tin phân trang
        console.log('Pagination:', pagination);
    
        // Ghi lại các bộ lọc đã áp dụng
        console.log('Filters:', filters);
    
        // Ghi lại thông tin sắp xếp
        console.log('Sorter:', sorter);
    
      };
      const data = [
        {
          key: '1',
          name: 'John Doe',
          money: 32000,
          address: '10 Downing Street',
          order: 100
        },
        {
          key: '2',
          name: 'Jane Smith',
          money: 28000,
          address: '20 Queen Street',
          order: 10
    
        },
        {
          key: '3',
          name: 'Jane Smith',
          money: 280000,
          address: '20 Queen Street',
          order: 10
    
        },
        {
          key: '4',
          name: 'Jane Smith',
          money: 20008,
          address: '20 Queen Street',
          order: 200
    
        },
        {
          key: '5',
          name: 'Jane Smith',
          money: 100000,
          address: '20 Queen Street',
          order: 120
        },
      ]
    
  return (
    <Table
    columns={columns}
    dataSource={dataTable}
    pagination={{ pageSize: 5 }}
    size="large"
    onChange={onChange}
  />
  )
}

export default TableChiTieu