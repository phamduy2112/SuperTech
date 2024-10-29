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
                    as: 'product_colors'
                }]
            }
        );
        responseSend(res, data, "Thành công!", 200);
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra!", 500);
        console.log(error);
    }
};
const getProductsByCategoryId = async (req, res) => {
    try {
        const categoryId = req.params.categoryId;
        const products = await Products.findAll({
            where: {
                category_id: categoryId
            }
        });
        if (products.length > 0) {
            responseSend(res, products, "Thành công!", 200);
        }else{
            responseSend(res, "", "không tồn tại !", 404);
        }
       
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra khi truy vấn sản phẩm", 500);
    }
};

const getProductById = async (req, res) => {
    try {
        let data = await Products.findByPk(req.params.id, {
            include: [
                {
                model: models.product_colors,
                as: 'colors'
            },
                {
                model: models.comment_product,
                    as:'comment_products'
            },
            
                {
                model: models.image_product,
                    as:'image'
            },
            
            
                {
                model: models.infor_product,
                    as:'infor_product_infor_product'
            },
            
        
        ]
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
const getProductByIdCatelogryDad = async (req, res) => {
    const { category_dad, category } = req.query;  // Get the category_dad and category from the URL

    try {
        const whereClause = {};

        // Add `category_dad` to the where clause if it exists
        if (category_dad) {
            whereClause.category_dad = category_dad;
        }

        // Add `category` to the where clause if it exists
        if (category) {
            whereClause.category_name = category;
        }

        const products = await Products.findAll({
            include: [{
                model: models.categories,
                as: "category",
                where: whereClause,
                attributes: []
            }]
        });

        responseSend(res, products, "Products retrieved successfully!", 200);
    } catch (error) {
        responseSend(res, null, "Error retrieving products", 500);
    }
};
const createProduct = async (req, res) => {
    try {
        
        let newProduct = await Products.create(req.body);
        responseSend(res, newProduct, "Thêm Thành công!", 201);
    } catch (error) {
        console.log(error);
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
    getProductsByCategoryId,
    getProductByIdCatelogryDad
};