import sequelize from "../models/connect.js";
import { responseSend } from "../config/response.js";
import initModels from "../models/init-models.js";
import order from "../models/order.js";

let models = initModels(sequelize); 
let orders = models.order; 

const getorder = async (req, res) => {
    try {
        let data = await order.findAll();
        responseSend(res, data, "Thành công!", 200);
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra!", 500);
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



const changeStatusOrder = async (req, res) => {
    try {
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
  
      // Trả về phản hồi thành công với dữ liệu đã tạo
      return res.status(201).json({
        message: 'Đã tạo mới trạng thái đơn hàng thành công!',
        data: newOrderStatus,
      });
    } catch (error) {
      // Nếu có lỗi, trả về lỗi cho người dùng
      console.error('Error creating order status:', error);
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
            // discount,
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

export {
    getorder,
    getOrderById,
    createorder,
    updateorder,
    deleteorder,
    changeStatusOrder
};