import sequelize from "../models/connect.js";
import { responseSend } from "../config/response.js";
import initModels from "../models/init-models.js";
import order from "../models/order.js";
import { startOfWeek,endOfWeek } from "date-fns";
import { fn } from "sequelize";
import { sendMail } from "../config/mail.js";

let models = initModels(sequelize); 
let orders = models.order; 

const getorder = async (req, res) => {
    try {
        let data = await order.findAll({
            include: [
                {
                    model: models.order_status,
                    as: "order_statuses",
                    where: {
                        order_status_id: sequelize.literal(`(
                          SELECT MAX(order_status_id) FROM order_status os WHERE os.order_id = order.order_id
                        )`),
                      },
                },
                {
                    model: models.discount,
                    as: "discount_discount",
                },
                {
                  model:models.detail_order,
                  as:"detail_orders"
                }
            ],
        });
        responseSend(res, data, "Thành công!", 200);
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};
const getSuccessEmailOrder = async (req, res) => {
  try {
    const { email, orderDetails } = req.body; // Giả sử thông tin đơn hàng được gửi qua body

  //   ${orderDetails
  //     .map(
  //       (item) => `
  //     <li>
  //       <b>Sản phẩm:</b> ${item.name} <br>
  //       <b>Số lượng:</b> ${item.quantity} <br>
  //       <b>Giá:</b> ${item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
  //     </li>
  //   `
  //     )
  //     .join('')}
  // 
  // <p>Tổng thanh toán: <b>${orderDetails
  //   .reduce((total, item) => total + item.quantity * item.price, 0)
  //   .toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</b></p>
    // Tạo nội dung HTML cho email
    const htmlContent = `
      <h1 style="color: green;">Đơn hàng của bạn đã được đặt thành công!</h1>
      <p>Cảm ơn bạn đã mua sắm tại cửa hàng của chúng tôi.</p>
      <h3>Chi tiết đơn hàng:</h3>
      <ul>
      <li>HEHE</li>
       </ul>
      <p>Chúng tôi sẽ sớm xử lý và giao hàng đến bạn.</p>
      <br>
      <p>Trân trọng,<br>Đội ngũ hỗ trợ</p>
    `;

    // Gửi email
    const emailResult = await sendMail(
      email, // Địa chỉ email người nhận
      'Xác nhận đơn hàng thành công', // Tiêu đề email
      htmlContent // Nội dung email
    );

    if (emailResult) {
      return res.status(200).json({ message: 'Email xác nhận đơn hàng đã được gửi thành công.' });
    } else {
      return res.status(500).json({ message: 'Không thể gửi email xác nhận đơn hàng.' });
    }
  } catch (e) {
    console.error('Lỗi khi gửi email xác nhận:', e);
    console.log(e);
    
    return res.status(500).json({ message: 'Đã xảy ra lỗi khi gửi email.' });
  }
};

const getOrdersForToday = async (req, res) => {
    try {
      const today = new Date();
      const startOfToday = new Date(today.setHours(0, 0, 0, 0)); // 00:00:00 hôm nay
      const endOfToday = new Date(today.setHours(23, 59, 59, 999)); // 23:59:59 hôm nay
  
      // Truy vấn tổng số tiền đơn hàng trong ngày hôm nay
      const totalRevenue = await order.findAll({
        attributes: [
          [fn('SUM', col('order_amount')), 'total_revenue'], // Tính tổng doanh thu của ngày
        ],
        where: {
          order_date: {
            [Op.between]: [startOfToday, endOfToday], // Lọc đơn hàng trong ngày hôm nay
          },
        },
      });
  
      // Kiểm tra nếu không có dữ liệu
      if (!totalRevenue || totalRevenue.length === 0) {
        return res.status(404).json({ message: 'No orders found for today' });
      }
  
      // Trả về tổng doanh thu
      return res.status(200).json({
        total_revenue: totalRevenue[0].total_revenue, // Trả giá trị tổng doanh thu
      });
    } catch (error) {
      console.error('Error fetching orders for today:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };
const getOrderById = async (req, res) => {
    
    try {
    const user_id=req.id;
    
        let data = await order.findAll({
            where:{
                user_id,

            },
            include:[
                {
                    model:models.order_status,
                    as:"order_statuses",
                    where: {
                        order_status_id: sequelize.literal(`(
                          SELECT MAX(order_status_id) FROM order_status os WHERE os.order_id = order.order_id
                        )`),
                      },
                     
                     
                }
            ]
        });
        
        if (data) {
            responseSend(res, data, "Thành công!", 200);
        } else {
            responseSend(res, "", "không tồn tại !", 404);
        }
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};


const getRevenueBetweenDates = async (req, res) => {
  try {
    // Lấy ngày bắt đầu và ngày kết thúc từ query string hoặc body của request
    const { startDate, endDate } = req.query; // Hoặc req.body nếu bạn truyền qua body

    if (!startDate || !endDate) {
      return res.status(400).json({
        success: false,
        message: 'Cần truyền đủ ngày bắt đầu và ngày kết thúc.',
      });
    }

    // Chuyển đổi ngày bắt đầu và ngày kết thúc thành định dạng Date
    const start = new Date(startDate);
    const end = new Date(endDate);

    // Đảm bảo ngày kết thúc là 23:59:59 của ngày đó để bao gồm cả ngày kết thúc
    end.setHours(23, 59, 59, 999);

    // Query dữ liệu doanh thu trong khoảng thời gian từ startDate đến endDate
    const results = await models.order.findAll({
      attributes: [
        [fn('SUM', col('total_price')), 'total_revenue'], // Tính tổng doanh thu
      ],
      where: {
        createdAt: {
          [Op.between]: [start, end], // Lọc đơn hàng trong khoảng thời gian
        },
      },
    });

    // Trả về kết quả
    res.status(200).json({
      success: true,
      data: results,
    });
  } catch (error) {
    console.error('Error fetching revenue between dates:', error);
    res.status(500).json({
      success: false,
      message: 'Có lỗi xảy ra khi lấy tổng doanh thu trong khoảng thời gian.',
    });
  }
};


const changeStatusOrder = async (req, res) => {
    try {
        const idUser=req.id;
      const order_id = req.params.id;  // Lấy ID đơn hàng từ params
      const { order_status, order_status_text_cancel } = req.body;  // Lấy trạng thái và lý do hủy (nếu có)
      const order = await orders.findByPk(order_id);
        console.log(order_id);
        
    
      

      order.order_status = order_status;
      await order.save();


      // Tạo một bản ghi mới trong bảng order_status
      const newOrderStatus = await models.order_status.create({
        order_id: order_id,  // Liên kết với order_id
        order_status: order_status,  // Trạng thái của đơn hàng
        order_status_text_cancel: order_status_text_cancel || null,  // Lý do hủy nếu có
        created_at: new Date(),  // Thời gian tạo
      });
      if (order_status ==6) {
        // Lấy danh sách sản phẩm liên quan đến đơn hàng
        const orderItems = await models.detail_order.findAll({
          where: { order_id },
          attributes: ['product_id'], // Chỉ lấy product_id
        });
  
        const productIds = orderItems.map((item) => item.product_id);
        
        console.log(productIds);
        
        // Cập nhật cờ isPurchase = true cho các bình luận liên quan đến các sản phẩm trong đơn hàng
        await models.comment_product.update(
          { isPurchase: true },
          { where: { product_id: productIds, user_id:idUser }, }
        );
      }
      // Trả về phản hồi thành công với dữ liệu đã tạo
      return res.status(201).json({
        message: 'Đã tạo mới trạng thái đơn hàng thành công!',
        data: newOrderStatus,
      });
    } catch (error) {
      // Nếu có lỗi, trả về lỗi cho người dùng
      console.error('Error creating order status:', error);
      console.log(error);
      
      return res.status(500).json({ message: 'Lỗi hệ thống, vui lòng thử lại sau.' });
    }
  };


  const createorder = async (req, res) => {
    try {
        const {
            order_total,
            order_total_quatity,
            order_status,
            pay_id,
            discount,
            address,
            phone_number,
            email
        } = req.body;

        const user_id = req.id;
        let date = new Date();

        // Tạo đơn hàng
        const neworder = await order.create({
            order_date: date,
            order_total,
            order_total_quatity,
            order_status,
            pay_id: null,
            discount,
            user_id,
            address,
            email_user:email,
            phone_number
        });

        // Tạo trạng thái đơn hàng
        const newOrderStatus = await models.order_status.create({
            order_id: neworder.order_id,
            order_status,
            created_at: date
        });

        
               responseSend(res, neworder, "Thêm Thành công!", 201);
 
    } catch (error) {
        console.log(error);
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

const updateorder = async (req, res) => {
    try {
        const order_id = req.params.id;
        const {
            order_date,
            order_total,
            order_total_quatity,
            order_status,
        } = req.body;
        const pay_id =  req.id;
        const user_id = req.id;
        const discount = req.id;
        const order = await orders.findByPk(order_id);
        if (!order) {
            responseSend(res, "", "Đơn hàng không tồn tại!", 404);
            return;
        }
        order.order_date = order_date;
        order.order_total = order_total;
        order.order_total_quatity = order_total_quatity;
        order.order_status = order_status;
        order.pay_id = pay_id;
        order.user_id = user_id;
        order.discount = discount;
        await order.save();
        responseSend(res, order, "Đã Cập Nhật Thành Công!", 200);
    } catch (error) {
        console.error("Error updating order:", error);
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

const deleteorder = async (req, res) => {
    try {
        const deleted = await order.destroy({
            where: { order_id: req.params.id }
        });
        if (deleted) {
            responseSend(res, deleted, "Đã Xóa Thành Công!", 200);
        } else {
            responseSend(res, "", "Không tìm thấy đơn hàng!", 404);
        }
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra khi xóa đơn hàng!", 500);
    }
};

export {
    getorder,
    getOrderById,
    createorder,
    updateorder,
    deleteorder,
    changeStatusOrder,
    getRevenueBetweenDates,
    getSuccessEmailOrder,
    getOrdersForToday

  };