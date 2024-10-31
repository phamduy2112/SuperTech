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

const getorderById = async (req, res) => {
    try {
        let data = await order.findByPk(req.params.id);
        if (data) {
            responseSend(res, data, "Thành công!", 200);
        } else {
            responseSend(res, "", "không tồn tại !", 404);
        }
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

const createorder = async (req, res) => {
    try {
        const {
            order_id,
            order_total,
            order_total_quantity,
            order_status,
        } = req.body;

        const user_id = req.id;
        const pay_id = req.id;
        const discount = req.id;

        let date = new Date();

        const neworder = await order.create({
            order_id,
            order_date: date,
            order_total,
            order_total_quantity,
            order_status,
            pay_id,
            user_id,
            discount
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
            order_total_quantity,
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
        order.order_total_quantity = order_total_quantity;
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
    getorderById,
    createorder,
    updateorder,
    deleteorder
};