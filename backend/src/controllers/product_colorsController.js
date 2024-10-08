import sequelize from "../models/connect.js";
import Products from "../models/product_colors.js";
import { responseSend } from "../config/response.js";
Products.init(sequelize);

const getProduct_colors= async (req, res) => {
    try {
        let data = await Products.findAll();
        responseSend(res, data, "Thành công!", 200);
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

const getProduct_colorsById = async (req, res) => {
    try {
        let data = await Products.findByPk(req.params.id);
        if (data) {
            responseSend(res, data, "Thành công!", 200);
        } else {
            responseSend(res, "", "không tồn tại !", 404);
        }
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

const createProduct_colors = async (req, res) => {
    try {
        let newProduct = await Products.create(req.body);
        responseSend(res, newProduct, "Thêm Thành công!", 201);
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

const updateProduct_colors = async (req, res) => {
    try {
        let updated = await Products.update(req.body, {
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

const deleteProduct_colors = async (req, res) => {
    try {
        let deleted = await Products.destroy({
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
    getProduct_colors,
    getProduct_colorsById,
    createProduct_colors,
    updateProduct_colors,
    deleteProduct_colors
};