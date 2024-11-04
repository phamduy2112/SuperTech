import sequelize from "../models/connect.js";
import { responseSend } from "../config/response.js";
import initModels from "../models/init-models.js";
let models = initModels(sequelize); 
let discount = models.discount; 

const getdiscount = async (req, res) => {
    try {
        let data = await discount.findAll();
        responseSend(res, data, "Thành công!", 200);
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

const getdiscountById = async (req, res) => {
    try {
        let data = await discount.findByPk(req.params.id);
        if (data) {
            responseSend(res, data, "Thành công!", 200);
        } else {
            responseSend(res, "", "không tồn tại !", 404);
        }
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

const creatediscount = async (req, res) => {
    try {
        const discountExists = await sequelize.models.discount.findByPk(req.body.discount);
        if (!discountExists) {
            return res.status(404).send("Discount ID not found");
        }

        let newdiscount = await discount.create(req.body);
        responseSend(res, newdiscount, "Thêm Thành công!", 201);
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

const updatediscount = async (req, res) => {
    try {
        const discountExists = await sequelize.models.discount.findByPk(req.body.discount);
        if (!discountExists) {
            return res.status(404).send("Discount ID not found");
        }

        let updated = await discount.update(req.body, {
            where: { discount_id: req.params.id }
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

const deletediscount = async (req, res) => {
    try {
        let deleted = await discount.destroy({
            where: { discount_id: req.params.id }
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
    getdiscount,
    getdiscountById,
    creatediscount,
    updatediscount,
    deletediscount
};