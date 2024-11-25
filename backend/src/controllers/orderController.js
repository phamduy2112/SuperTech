import sequelize from "../models/connect.js";
import { responseSend } from "../config/response.js";
import initModels from "../models/init-models.js";
import order from "../models/order.js";
import { startOfWeek,endOfWeek } from "date-fns";
import { fn } from "sequelize";

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
            ],
        });
        responseSend(res, data, "Thành công!", 200);
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};



const getOrdersForToday = async (res) => {
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
    if (!totalRevenue || totalRevenue.length === 0 || totalRevenue[0].total_revenue === null) {
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
const getMonthlyRevenue = async (req, res) => {
    try {
      // Lấy ngày đầu tháng và cuối tháng hiện tại
      const today = new Date();
      const startDate = startOfMonth(today);
      const endDate = endOfMonth(today);
  
      // Query dữ liệu doanh thu
      const results = await models.order.findAll({
        attributes: [
          [fn('SUM', col('total_price')), 'total_revenue'], // Tính tổng doanh thu
        ],
        where: {
          createdAt: {
            [Op.between]: [startDate, endDate], // Lọc đơn hàng trong tháng hiện tại
          },
        },
      });
  
      // Trả về kết quả
      res.status(200).json({
        success: true,
        data: results,
      });
    } catch (error) {
      console.error('Error fetching monthly revenue:', error);
      res.status(500).json({
        success: false,
        message: 'Có lỗi xảy ra khi lấy tổng doanh thu hàng tháng.',
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

      const newOrderStatus = await models.order_status.create({
        order_id: order_id, 
        order_status: order_status, 
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
            phone_number
        } = req.body;

        const user_id = req.id;
        // const pay_id = req.id;
        // const discount = req.id;
        let date = new Date();
        const neworder = await order.create({
            order_date: date,
            order_total,
            order_total_quatity,
            order_status,
            pay_id:null,
            discount,
            user_id,
            address,
            phone_number
            // discount
        });
        // order_statis
        const newOrderStatus=await models.order_status.create({
            order_id:neworder.order_id,
            order_status,
            created_at:date
        })
        
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


const autoUpdateOrderStatus = async (req, res) => {
    try {
        // Lấy tất cả các giao dịch chưa được xử lý (user_id = null)
        const transactions = await bankAuto.findAll({
            where: { user_id: null },
        });

        const updatedOrders = [];

        for (const txn of transactions) {
            const { id, description, amount } = txn;

            // Giả sử nội dung giao dịch chứa mã đơn hàng dạng "ORDER123"
            const orderIdMatch = description.match(/ORDER(\d+)/);
            if (orderIdMatch) {
                const orderId = orderIdMatch[1];

                // Tìm đơn hàng
                const order = await orders.findByPk(orderId);
                if (order && order.order_total === amount && order.order_status === 'PENDING') {
                    // Cập nhật trạng thái đơn hàng
                    order.order_status = 'PAID';
                    await order.save();

                    // Gán user_id cho giao dịch
                    txn.user_id = order.user_id;
                    await txn.save();

                    // (Tùy chọn) Ghi trạng thái vào bảng `order_status`
                    if (orderStatus) {
                        await orderStatus.create({
                            order_id: orderId,
                            status: 'Đã thanh toán',
                            updated_at: new Date(),
                        });
                    }

                    updatedOrders.push(order);
                }
            }
        }

        if (updatedOrders.length > 0) {
            responseSend(res, updatedOrders, "Cập nhật trạng thái đơn hàng thành công!", 200);
        } else {
            responseSend(res, [], "Không có giao dịch nào khớp với đơn hàng.", 200);
        }
    } catch (error) {
        console.error("Error in autoUpdateOrderStatus:", error);
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

export {
    getorder,
    getOrderById,
    createorder,
    updateorder,
    deleteorder,
    changeStatusOrder,
    getOrdersForToday
};