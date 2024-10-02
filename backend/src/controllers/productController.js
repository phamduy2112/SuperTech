import sequelize from "../models/connect.js";
import Products from "../models/products.js";
import { responseSend } from "../config/response.js";
Products.init(sequelize);

const getProducts = async (req, res) => {
    try {
        let data = await Products.findAll();
        responseSend(res, data, "Thành công!", 200);
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

const getProductById = async (req, res) => {
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

const createProduct = async (req, res) => {
    try {
        let newProduct = await Products.create(req.body);
        responseSend(res, newProduct, "Thêm Thành công!", 201);
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

const updateProduct = async (req, res) => {
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

const deleteProduct = async (req, res) => {
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
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};