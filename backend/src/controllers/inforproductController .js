import sequelize from "../models/connect.js";
import inforproduct from "../models/infor_product.js";
import { responseSend } from "../config/response.js";
inforproduct.init(sequelize);

const getinforproduct = async (req, res) => {
    try {
        let data = await inforproduct.findAll();
        responseSend(res, data, "Thành công!", 200);
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

const getinforproductById = async (req, res) => {
    try {
        let data = await inforproduct.findByPk(req.params.id);
        if (data) {
            responseSend(res, data, "Thành công!", 200);
        } else {
            responseSend(res, "", "không tồn tại !", 404);
        }
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

const createinforproduct = async (req, res) => {
    try {
        let newinforproduct = await inforproduct.create(req.body);
        responseSend(res, newinforproduct, "Thêm Thành công!", 201);
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

const updateinforproduct = async (req, res) => {
    try {
        let updated = await inforproduct.update(req.body, {
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

const deleteinforproduct = async (req, res) => {
    try {
        let deleted = await inforproduct.destroy({
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
    getinforproduct,
    getinforproductById,
    createinforproduct,
    updateinforproduct,
    deleteinforproduct
};