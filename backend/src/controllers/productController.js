import sequelize from "../models/connect.js";
import { responseSend } from "../config/response.js";
import initModels from "../models/init-models.js";
import categories from "../models/categories.js";
import { Op } from "sequelize";

let models = initModels(sequelize); 
let Products = models.products; 

const getProducts = async (req, res) => {
    try {
        let data = await Products.findAll( 
            {
                include: [{
                    model: models.product_colors,
                    as: 'colors'
                }]
            }
        );
        responseSend(res, data, "Thành công!", 200);
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

const getProductById = async (req, res) => {
    try {
        let data = await Products.findByPk(req.params.id, {
            include: [{
                model: models.product_colors,
                as: 'colors'
            }]
        });
        if (data) {
            responseSend(res, data, "Thành công!", 200);
        } else {
            responseSend(res, "", "không tồn tại !", 404);
        }
    } catch (error) {
        console.log(error);
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};
// const getProductByIdCate
const getProductByIdCatelogryDad=async(req,res)=>{
    const categoriesDad = ['Điện thoại', 'Laptop', 'Tablet']; // Các danh mục cha cần lấy

 
    const products = await Products.findAll({
        include: [
            {
                model: categories,
                as: 'category', // Thêm alias vào đây
                attributes: ['category_id'],
                where: {
                    category_dad: {
                        [Op.in]: categoriesDad // Lọc theo danh mục cha đã chỉ định
                    }
                }
            }
        ]
    });

    responseSend(res, products, "Thêm Thành công!", 201);

}
    
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
            where: { product_id: req.params.id }
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
            where: { product_id: req.params.id }
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
    deleteProduct,
    getProductByIdCatelogryDad
};