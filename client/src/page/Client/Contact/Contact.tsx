import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Row, Col, message } from 'antd';
import Skeleton from 'react-loading-skeleton';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './css/ContactPage.css';

function Contact() {
  const [loading, setLoading] = useState(true);
  const [formLoading, setFormLoading] = useState(false);

  const onFinish = (values) => {
    setFormLoading(true);
    setTimeout(() => {
      message.success('Cảm ơn bạn đã liên hệ với chúng tôi!');
      setFormLoading(false);
    }, 2000);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="contact-page">
      <div className="contact-header">
        {loading ? (
          <Skeleton width={300} height={40} />
        ) : (
          <>
            <h2 className="text-center text-3xl font-semibold">Liên Hệ Với Chúng Tôi</h2>
            <p className="text-center">Nếu bạn có bất kỳ câu hỏi nào, vui lòng điền vào biểu mẫu dưới đây.</p>
          </>
        )}
      </div>

      {/* Bố cục 2 cột cho thông tin liên hệ và form */}
      <Row gutter={32} justify="center">
        {/* Thông tin liên hệ */}
        <Col xs={24} sm={24} md={12} lg={8}>
          <div className="contact-info">
            {loading ? (
              <>
                <Skeleton height={30} width={150} />
                <Skeleton height={30} width={150} />
                <Skeleton height={30} width={150} />
              </>
            ) : (
              <>
                <div className="contact-info-item">
                  <FaMapMarkerAlt size={24} className="contact-icon" />
                  <p>123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh</p>
                </div>
                <div className="contact-info-item">
                  <FaPhoneAlt size={24} className="contact-icon" />
                  <p>+84 123 456 789</p>
                </div>
                <div className="contact-info-item">
                  <FaEnvelope size={24} className="contact-icon" />
                  <p>contact@yourcompany.com</p>
                </div>
              </>
            )}
          </div>
        </Col>

        {/* Form liên hệ */}
        <Col xs={24} sm={24} md={12} lg={8}>
          <div className="contact-form">
            {loading ? (
              <Skeleton height={40} count={4} />
            ) : (
              <Form
                name="contact"
                onFinish={onFinish}
                layout="vertical"
                initialValues={{ remember: true }}
              >
                <Form.Item
                  name="name"
                  label="Họ và Tên"
                  rules={[{ required: true, message: 'Vui lòng nhập họ và tên của bạn!' }]}
                >
                  <Input placeholder="Nhập họ và tên" />
                </Form.Item>

                <Form.Item
                  name="email"
                  label="Email"
                  rules={[{ required: true, type: 'email', message: 'Vui lòng nhập email hợp lệ!' }]}
                >
                  <Input placeholder="Nhập email của bạn" />
                </Form.Item>

                <Form.Item
                  name="message"
                  label="Tin nhắn"
                  rules={[{ required: true, message: 'Vui lòng nhập tin nhắn của bạn!' }]}
                >
                  <Input.TextArea rows={4} placeholder="Nhập tin nhắn của bạn" />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    block
                    loading={formLoading}
                  >
                    Gửi Tin Nhắn
                  </Button>
                </Form.Item>
              </Form>
            )}
          </div>
        </Col>
      </Row>

      {/* Bản đồ Google Maps (tuỳ chọn) */}
      <div className="google-map">
        <Skeleton height={400} />
      </div>
    </div>
  );
}

export default Contact;
