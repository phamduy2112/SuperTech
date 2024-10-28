import sequelize from "../models/connect.js";
import { responseSend } from "../config/response.js";
import initModels from "../models/init-models.js";

let models = initModels(sequelize); 
let order = models.order; 

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
        let neworder = await order.create(req.body, {
            attributes:
            [
                'order_id',
                'order_date',
                'order_total',
                'order_total_quantity',
                'order_status',
                'pay_id',
                'user_id',
                'discount'
            ]
        });
        responseSend(res, neworder, "Thêm Thành công!", 201);
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

const updateorder = async (req, res) => {
    try {
        let updated = await order.update(req.body, {
            where: { order_id: req.params.id },
            returning: true,
            plain: true
        });
        if (updated && updated[1]) {
            responseSend(res, updated[1], "Đã Cập Nhật Thành Công!", 200);
        } else {
            responseSend(res, "", "Không tồn tại!", 404);
        }
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

const deleteorder = async (req, res) => {
    try {
        let deleted = await order.destroy({
            where: { order_id: req.params.id }
        });
        if (deleted > 0) {
            responseSend(res, { message: "Đã Xóa Thành Công!" }, 200);
        } else {
            responseSend(res, "", "Không tìm thấy!", 404);
        }
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

export {
    getorder,
    getorderById,
    createorder,
    updateorder,
    deleteorder
};