import sequelize from "../models/connect.js";
import { responseSend } from "../config/response.js";
import initModels from "../models/init-models.js";

let models = initModels(sequelize); 
let commentProductModel = models.comment_product; 

const getcommentproduct = async (req, res) => {
    try {
        let data = await commentProductModel.findAll();
        responseSend(res, data, "Thành công!", 200);
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

const getcommentproductById = async (req, res) => {
    try {
        let data = await commentProductModel.findByPk(req.params.id);
        if (data) {
            responseSend(res, data, "Thành công!", 200);
        } else {
            responseSend(res, "", "không tồn tại !", 404);
        }
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

const createcommentproduct = async (req, res) => {
    try {
        let newmediapost = await commentProductModel.create(req.body);
        responseSend(res, newmediapost, "Thêm Thành công!", 201);
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

const updatecommentproduct = async (req, res) => {
    try {
        let updated = await commentProductModel.update(req.body, {
            where: { comment_id: req.params.id }
        });
        if (updated[0] > 0) {
            let updatedItem = await commentProductModel.findByPk(req.params.id);
            responseSend(res, updatedItem, "Đã Cập Nhật Thành Công!", 200);
        } else {
            responseSend(res, "", "không tồn tại !", 404);
        }
    } catch (error) {
        console.error("Error updating comment:", error);
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

const deletecommentproduct = async (req, res) => {
    try {
        let deleted = await commentProductModel.destroy({
            where: { comment_id: req.params.id }
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
    getcommentproduct,
    getcommentproductById,
    createcommentproduct,
    updatecommentproduct,
    deletecommentproduct
};