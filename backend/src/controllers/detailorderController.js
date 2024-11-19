import sequelize from "../models/connect.js";
import { responseSend } from "../config/response.js";
import initModels from "../models/init-models.js";
import { col, fn, literal } from "sequelize";

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
    const results = await models.order.findAll({
      attributes: [
        [literal(`DATE(DATE_SUB(order_date, INTERVAL WEEKDAY(order_date) DAY))`), 'week_start'],
        [fn('SUM', col('order_total')), 'total_sales'],
      ],
      group: [literal(`DATE(DATE_SUB(order_date, INTERVAL WEEKDAY(order_date) DAY))`)],
      order: [literal(`week_start ASC`)],
      logging: console.log, // Ghi log SQL
    });
  
    responseSend(res, results, "", 200);
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
        order: [[literal('total_quantity'), 'DESC']], // Sắp xếp theo số lượng bán ra giảm dần
        limit: 5, // Giới hạn chỉ lấy 5 sản phẩm bán chạy nhất
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
      

        const newOrders = await Promise.all(detailOrders.map(async (order) => {
            // Kiểm tra số lượng tồn kho trước khi tạo detailOrder
            const productRecord = await models.products.findOne({ where: { product_id: order.product_id } });
            // if (!productRecord) {
            //     throw new Error(`Sản phẩm với ID: ${order.product_id} không tồn tại`);
            // }

            // if (productRecord.product_quantity < order.detail_order_quality) {
            //     throw new Error(`Số lượng trong kho không đủ cho sản phẩm với ID: ${order.product_id}`);
            // }

            // Tạo detailOrder
            const createdOrder = await detailorder.create(order);

            // Cập nhật số lượng sản phẩm sau khi tạo đơn hàng thành công

            // await models.products.update(
            //     {
            //         product_quantity: sequelize.literal(`product_quantity - ${order.detail_order_quality}`)
            //     },
            //     {
            //         where: {
            //             product_id: order.product_id
            //         }
            //     }
            // );

            return createdOrder;
        }));

        responseSend(res, newOrders, "Thêm thành công!", 201);
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