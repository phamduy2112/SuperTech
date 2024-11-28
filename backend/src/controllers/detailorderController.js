import sequelize from "../models/connect.js";
import { responseSend } from "../config/response.js";
import initModels from "../models/init-models.js";
import { col, fn, literal, Op } from "sequelize";
import { io } from "../socker/socker.js";
import { sendMail } from "../config/mail.js";

let models = initModels(sequelize); 
let detailorder = models.detail_order; 

const getdetailorder = async (req, res) => {
    try {
        let data = await detailorder.findAll();
        responseSend(res, data, "Thành công!", 200);
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

const getWeeklySales = async (req, res) => {
  try {
    const { startDate, endDate, periodType } = req.body; // Nhận ngày bắt đầu, ngày kết thúc và loại khoảng thời gian (week, month, day)

    // Kiểm tra nếu thiếu tham số
    if (!periodType) {
      return res.status(400).json({ success: false, message: 'Missing period type (week, month, day)' });
    }

    // Điều kiện dựa trên loại khoảng thời gian
    let groupBy;
    let periodField;

    switch (periodType) {
      case 'day':
        groupBy = sequelize.literal('DATE(order_date)');
        periodField = 'day';
        break;
      case 'month':
        groupBy = sequelize.literal('DATE_FORMAT(order_date, "%Y-%m")');
        periodField = 'month';
        break;
      case 'week':
        // Tính số tuần trong tháng
        groupBy = sequelize.literal(`
          CONCAT(
            YEAR(order_date), '-',
            MONTH(order_date), '-',
            FLOOR((DAY(order_date) - 1) / 7) + 1
          )
        `);
        periodField = 'week';
        break;
      default:
        return res.status(400).json({ success: false, message: 'Invalid period type' });
    }

    // Truy vấn dữ liệu doanh thu theo khoảng thời gian
    const results = await models.order.findAll({
      attributes: [
        [groupBy, periodField], // Nhóm theo ngày, tháng hoặc tuần
        [fn('SUM', col('order_total')), 'total_sales'], // Tổng doanh thu
      ],
      where: {
        order_date: {
          [Op.between]: [startDate, endDate], // Lọc theo khoảng thời gian
        },
      },
      group: [groupBy],
      order: [[groupBy, 'ASC']],
    });

    res.status(200).json({
      success: true,
      data: results,
    });
  } catch (error) {
    console.error('Error fetching sales:', error);
    res.status(500).json({
      success: false,
      message: 'Có lỗi xảy ra khi lấy dữ liệu doanh thu.',
    });
  }
};
  const getUserOrderCounts = async (req, res) => {
    try {
      const results = await models.user.findAll({
        attributes: [
          'user_id', // ID của người dùng
          'user_name', // Tên của người dùng
          [fn('COUNT', col('orders.order_id')), 'total_orders'], // Đếm số lượng đơn hàng
        ],
        include: [
          {
            model: models.order, // Kết nối với bảng Order
            as: 'orders', // Alias phải khớp với alias trong mối quan hệ
            attributes: [] // Không lấy thông tin từ bảng Order, chỉ cần đếm
          },
        ],
        group: ['user.user_id', 'user.user_name'], // Nhóm theo user_id và user_name
        order: [[literal('total_orders'), 'DESC']], // Sắp xếp theo số đơn hàng giảm dần
        
    });
  


      responseSend(res, results, "", 200); // Trả về kết quả
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: 'Internal Server Error' });
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
  const getTop5BestSellingProducts = async (req, res) => {
    try {
      const results = await models.products.findAll({
        attributes: [
          'product_id', // ID của sản phẩm
          'product_name', // Tên sản phẩm
          [fn('SUM', col('detail_orders.detail_order_quality')), 'total_quantity'], // Tổng số lượng bán ra của sản phẩm
        ],
        include: [
          {
            model: models.detail_order, // Bảng OrderItem chứa thông tin sản phẩm trong đơn hàng
            as: 'detail_orders', // Alias phải khớp với alias trong mối quan hệ
            attributes: [], // Không lấy thông tin từ bảng OrderItem, chỉ cần đếm số lượng
          },
        ],
        group: ['products.product_id', 'products.product_name'], // Nhóm theo sản phẩm
        order: [[literal('detail_order_quality'), 'DESC']], // Sắp xếp theo số lượng bán ra giảm dần
      });
  
      responseSend(res, results, '', 200); // Trả về kết quả
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: 'Internal Server Error' });
    }
  };

const getDetailOrderById = async (req, res) => {
    try {
        
        // const user_id=req.id;

        const order_id = req.params.id;
        let data = await detailorder.findAll({
            where:{
                order_id,

            },
            include: [
                {
                    model: models.products,
                    as: 'product' // Bao gồm replies cho mỗi comment
                },
                {
                model: models.order,
                    as:'order',
                    include: [
                        {
                            model: models.user,
                            as: 'user' // Bao gồm replies cho mỗi comment
                        },
                        {
                            model:models.order_status,
                            as:"order_statuses",
                           
                        },
                        {
                            model:models.discount,
                            as:"discount_discount",
                        }
                    ]
            },
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

const createdetailorder = async (req, res) => {
  try {
    const detailOrders = req.body; // Giả định body chứa một mảng đối tượng
    // Xử lý từng đơn hàng chi tiết
    const newOrders = await Promise.all(
      detailOrders.map(async (order) => {
        // Kiểm tra sản phẩm trong `product_storage`
        const storageRecord = await models.product_storage.findOne({
          where: { product_id: order.product_id },
        });

        if (storageRecord) {
          // Nếu tồn tại trong `product_storage`, kiểm tra số lượng
          if (storageRecord.product_quantity < order.detail_order_quality) {
            throw new Error(
              `Sản phẩm với ID: ${order.product_id} không đủ số lượng (Còn ${storageRecord.product_quantity}, cần ${order.detail_order_quality})`
            );
          }

          // Trừ số lượng từ `product_storage`
          await models.product_storage.update(
            {
              product_quantity: sequelize.literal(
                `product_quantity - ${order.detail_order_quality}`
              ),
            },
            {
              where: { product_id: order.product_id },
            }
          );

          // Kiểm tra nếu số lượng sau khi trừ nhỏ hơn 10
          const updatedStorage = await models.product_storage.findOne({
            where: { product_id: order.product_id },
          });

          if (updatedStorage.product_quantity < 10) {
            io.emit(
              "low_stock_warning",
              `Sản phẩm với ID: ${order.product_id} sắp hết hàng (Chỉ còn ${updatedStorage.product_quantity})`
            );
          }
        } else {
          // Nếu không tồn tại trong `product_storage`, kiểm tra `product_colors`
          const colorRecord = await models.product_colors.findOne({
            where: { product_id: order.product_id },
          });

          if (!colorRecord) {
            throw new Error(
              `Sản phẩm với ID: ${order.product_id} không tồn tại trong kho`
            );
          }

          if (colorRecord.product_quantity < order.detail_order_quality) {
            throw new Error(
              `Sản phẩm với ID: ${order.product_id} không đủ số lượng (Còn ${colorRecord.product_quantity}, cần ${order.detail_order_quality})`
            );
          }

          // Trừ số lượng từ `product_colors`
          await models.product_colors.update(
            {
              product_quantity: sequelize.literal(
                `product_quantity - ${order.detail_order_quality}`
              ),
            },
            {
              where: { product_id: order.product_id },
            }
          );

          // Kiểm tra nếu số lượng sau khi trừ nhỏ hơn 10
          const updatedColor = await models.product_colors.findOne({
            where: { product_id: order.product_id },
          });

          if (updatedColor.product_quantity < 10) {
            io.emit(
              "low_stock_warning",
              `Sản phẩm với ID: ${order.product_id} sắp hết hàng (Chỉ còn ${updatedColor.product_quantity})`
            );
          }
        }

        // Tạo chi tiết đơn hàng
        return await models.detail_order.create(order);
      })
    );

    // Lấy thông tin chi tiết đơn hàng
    const orderId = detailOrders[0]?.order_id;
    const data = await models.order.findOne({
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
          model: models.detail_order,
          as: "detail_orders",
        },
      ],
      where: { order_id: orderId },
    });

    // Tạo nội dung chi tiết sản phẩm cho email
    const orderDetails = data.detail_orders
      .map(
        (item) => `
        <li>
          <b>Sản phẩm:</b> ${item.product_name} <br>
          <b>Số lượng:</b> ${item.detail_order_quality} <br>
          <b>Giá:</b> ${item.detail_order_price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
        </li>`
      )
      .join("");

    // Nội dung email
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h1 style="color: green;">Đơn hàng của bạn đã được đặt thành công!</h1>
        <p>Cảm ơn bạn đã mua sắm tại cửa hàng của chúng tôi.</p>
        <h3>Chi tiết đơn hàng:</h3>
        <ul>${orderDetails}</ul>
        <p><b>Tổng thanh toán:</b> ${data.order_total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
        <p style="font-size: 14px; color: #555;">Nếu có thắc mắc, vui lòng liên hệ với chúng tôi qua số điện thoại ${data.phone_number} hoặc email ${data.email}.</p>
        <br>
        <p>Trân trọng,<br>Đội ngũ hỗ trợ</p>
      </div>
    `;

    // Gửi email
    const emailResult = await sendMail(
      "duyp7454@gmail.com", // Địa chỉ email
      "Xác nhận đơn hàng thành công", // Tiêu đề email
      htmlContent // Nội dung email
    );

    // Phản hồi kết quả
    io.emit("list_order", newOrders); // Emit dữ liệu mới
    responseSend(
      res,
      data,
      emailResult
        ? "Thêm thành công và email đã được gửi."
        : "Thêm thành công nhưng không thể gửi email.",
      201
    );
  } catch (error) {
    responseSend(res, "", `Có lỗi xảy ra: ${error.message}`, 500);
    console.error(error);
  }
};


const updatedetailorder = async (req, res) => {
    try {
        let updated = await detailorder.update(req.body, {
            where: { detail_order_id: req.params.id }
        });
     

      // Emit dữ liệu gộp lên tất cả các client
      io.emit("order_updates", updated);

        if (updated[0] > 0) {
            responseSend(res, updated, "Đã Cập Nhật Thành Công!", 200);
        } else {
            responseSend(res, "", "không tồn tại !", 404);
        }
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

const deletedetailorder = async (req, res) => {
    try {
        let deleted = await detailorder.destroy({
            where: { detail_order_id: req.params.id }
        });
        if (deleted) {
            responseSend(res, deleted, "Đã Xóa Thành Công!", 200);
        } else {
            responseSend(res, "", "không tìm thấy !", 404);
        }
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

export {
    getdetailorder,
    getDetailOrderById,
    createdetailorder,
    updatedetailorder,
    deletedetailorder,
    getWeeklySales,
    getUserOrderCounts,
    getTop5BestSellingProducts
};