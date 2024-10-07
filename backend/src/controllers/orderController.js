import sequelize from "../models/connect.js";
import order from "../models/order.js";
import { responseSend } from "../config/response.js";
order.init(sequelize);

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
        // Removed discount existence check
        let neworder = await order.create(req.body);
        responseSend(res, neworder, "Thêm Thành công!", 201);
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

const updateorder = async (req, res) => {
    try {
        // Removed discount existence check
        let updated = await order.update(req.body, {
            where: { id: req.params.id }
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

const deleteorder = async (req, res) => {
    try {
        let deleted = await order.destroy({
            where: { id: req.params.id }
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
    getorder,
    getorderById,
    createorder,
    updateorder,
    deleteorder
};