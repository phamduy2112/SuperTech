import sequelize from "../models/connect.js";
import { responseSend } from "../config/response.js";
import initModels from "../models/init-models.js";

let models = initModels(sequelize); 
let favoriteproduct = models.favorite_product; 

const getfavoriteproduct = async (req, res) => {
    try {
        let data = await favoriteproduct.findAll();
        responseSend(res, data, "Thành công!", 200);
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

const getfavoriteproductById = async (req, res) => {
    try {
        let data = await favoriteproduct.findByPk(req.params.id);
        if (data) {
            responseSend(res, data, "Thành công!", 200);
        } else {
            responseSend(res, "", "không tồn tại !", 404);
        }
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

const createfavoriteproduct = async (req, res) => {
    try {
        let newfavoriteproduct = await favoriteproduct.create(req.body);
        responseSend(res, newfavoriteproduct, "Thêm Thành công!", 201);
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

const updatefavoriteproduct = async (req, res) => {
    try {
        let updated = await favoriteproduct.update(req.body, {
            where: { favorite_product_id: req.params.id }
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

const deletefavoriteproduct = async (req, res) => {
    try {
        let deleted = await favoriteproduct.destroy({
            where: { favorite_product_id: req.params.id }
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
    getfavoriteproduct,
    getfavoriteproductById,
    createfavoriteproduct,
    updatefavoriteproduct,
    deletefavoriteproduct
};