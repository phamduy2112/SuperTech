import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
import { getAutoBank } from '../../../../service/order/order.service';
import CountdownTimer from './CountimePay';

function ModalPay(props:any) {
  const [data, setData] = useState(null); // Initialize with null to represent loading state.

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await getAutoBank(); // Ensure this API returns valid data.
        if (response?.data?.content) {
          setData(response.data.content); // Set the data if it's valid.
        } else {
          console.error("No content found in response.");
        }
      } catch (error) {
        console.error("Error fetching data:", error); // Handle error if API fails.
      }
    };

    fetchApi();
  }, []);

  const totalOrder = 3000;
  const textOrder = 'supertech' + props?.data?.order_id;

  // Ensure that data is not null and is an array with at least one element before rendering the image
  const isDataReady = Array.isArray(data) && data.length > 0;

  return (
    <>
    
      <Modal title="Basic Modal" open={props.isModalOpen} onOk={props.handleOk} onCancel={props.handleCancel}>
        <div>
          {/* Check if data is available and render the image */}
          {isDataReady ? (
            <div> <img
              src={`https://img.vietqr.io/image/${data[0]?.short_name}-${data[0]?.accountNumber}-compact.jpg?amount=${totalOrder}&addInfo=${textOrder}&accountName=${data[0]?.accountName}`}
              alt="QR Code"
            />
            <CountdownTimer/>
              </div>
           
            
          ) : (
            <p>Loading...</p> // Show loading or fallback content while data is being fetched
          )}
        </div>
      </Modal>
    </>
  );
}

export default ModalPay;
