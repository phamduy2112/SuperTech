import sequelize from "../models/connect.js";
import { responseSend } from "../config/response.js";
import initModels from "../models/init-models.js";

let models = initModels(sequelize); 
let imageproduct = models.image_product; 

const getimageproduct = async (req, res) => {
    try {
        let data = await imageproduct.findAll();
        responseSend(res, data, "Thành công!", 200);
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

const getimageproductById = async (req, res) => {
    try {
        let data = await imageproduct.findByPk(req.params.id);
        if (data) {
            responseSend(res, data, "Thành công!", 200);
        } else {
            responseSend(res, "", "không tồn tại !", 404);
        }
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

const createimageproduct = async (req, res) => {
    try {
        let newimageproduct = await imageproduct.create(req.body);
        responseSend(res, newimageproduct, "Thêm Thành công!", 201);
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

const updateimageproduct = async (req, res) => {
    try {
        let updated = await imageproduct.update(req.body, {
            where: { image_product_id: req.params.id }
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

const deleteimageproduct = async (req, res) => {
    try {
        let deleted = await imageproduct.destroy({
            where: { image_product_id: req.params.id }
        });
        if (deleted) {
            responseSend(res, deleted, "Đã Xóa Thành Công!", 200);
        } else {
            responseSend(res, "", "không tìm thấy !", 404);
        }
    } catch (error) {
        console.log(error);
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

export {
    getimageproduct,
    getimageproductById,
    createimageproduct,
    updateimageproduct,
    deleteimageproduct
};