import sequelize from "../models/connect.js";
import { responseSend } from "../config/response.js";
import initModels from "../models/init-models.js";
import { col, fn, Op } from "sequelize";

let models = initModels(sequelize); 
let categoriesModel = models.categories; 

const getcategories = async (req, res) => {
    try {
        let data = await categoriesModel.findAll();
        responseSend(res, data, "Thành công!", 200);
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};
const getcategory_dad = async (req, res) => {
try {
    let data = await categoriesModel.findAll({
        attributes: ['category_dad'],
        group: ['category_dad']
    });
    responseSend(res, data, "Thành công!", 200);
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};
const getcategory_dadId = async (req, res) => {
    try {
        const categoryDadId = req.params.id; 
        let data = await categoriesModel.findAll({
            where: { category_dad: categoryDadId }, 
            attributes: ['category_name'] 
        });
        if (data.length === 0) {
            responseSend(res, "", "Không tìm thấy !", 404);
        } else {
            responseSend(res, data, "Thành công!", 200);
        }
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};
const getcategoriesById = async (req, res) => {
    try {
        let data = await categoriesModel.findByPk(req.params.id);
        if (data) {
            responseSend(res, data, "Thành công!", 200);
        } else {
            responseSend(res, "", "không tồn tại !", 404);
        }
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

const createcategories = async (req, res) => {
    try {
        let newmediapost = await categoriesModel.create(req.body);
        responseSend(res, newmediapost, "Thêm Thành công!", 201);
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

const updatecategories = async (req, res) => {
    try {
        let updated = await categoriesModel.update(req.body, {
            where: { category_id: req.params.id }
        });
        if (updated[0] > 0) {
            let updatedItem = await categoriesModel.findByPk(req.params.id);
            responseSend(res, updatedItem, "Đã Cập Nhật Thành Công!", 200);
        } else {
            responseSend(res, "", "không tồn tại !", 404);
        }
    } catch (error) {
        console.error("Error updating comment:", error);
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

const deletecategories = async (req, res) => {
    try {
        let deleted = await categoriesModel.destroy({
            where: { category_id: req.params.id }
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
    getcategories,
    getcategoriesById,
    createcategories,
    updatecategories,
    deletecategories,
    getcategory_dadId,
    getcategory_dad
};