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
        group: ['category_dad'],
        include:[
            {
                model:models.products,
                as:"products"
            }
        ]
        
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
            // attributes: ['category_name'] 
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
        // Lấy danh sách categoryId từ query string
        const categoryIds = req.query.ids ? JSON.parse(req.query.ids) : [];

        if (!categoryIds.length) {
            return responseSend(res, "", "Không có ID nào để xóa!", 400);
        }

        // Kiểm tra sản phẩm có liên kết với danh mục không
        const products = await models.products.findAll({
            where: {
                category_id: categoryIds
            }
        });

        if (products.length > 0) {
            // Nếu có sản phẩm, không cho phép xóa danh mục
            return responseSend(res, "", "Bạn cần xóa sản phẩm trước khi xóa danh mục!", 201);
        }

        // Nếu không có sản phẩm liên quan, tiến hành xóa danh mục
        const deleted = await models.categories.destroy({
            where: {
                category_id: categoryIds
            }
        });

        if (deleted) {
            return responseSend(res, deleted, "Đã Xóa Thành Công!", 200);
        } else {
            return responseSend(res, "", "Không tìm thấy danh mục nào để xóa!", 404);
        }
    } catch (error) {
        console.error(error);
        return responseSend(res, "", "Có lỗi xảy ra!", 500);
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