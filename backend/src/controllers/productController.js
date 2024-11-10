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
                include: [
                {
                    model: models.product_colors,
                    as: 'product_colors',
                    include: [
                        {
                            model: models.product_storage,
                            as: 'product_storages'
                        }
                    ]
                },
                {
                    model: models.product_storage,
                    as: 'product_storages'
                }
            ]
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
                model: models.comment_product,
                    as:'comment_products',
                    include: [
                        {
                            model: models.user,
                            as: 'user'
                        }
                    ]
            },
                {
                model: models.infor_product,
                    as:'infor_product_infor_product'
            },
                {
                model: models.product_colors,
                    as:'product_colors',
                    include:[
                        {
                            model: models.image_product,
                                as:'image'
                        },
                        {
                            model: models.product_storage,
                                as:'product_storages',
                                required: false
                        },
                    ]
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
    const { category_dad, category } = req.query;

    try {
        const whereClause = {};

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
        const {
            product_name,
            product_price,
            product_star,
            product_discount,
            product_hot,
            product_quantity,
            image_id,
            infor_product,
            category_id
        } = req.body;

        let date = new Date();
        const newProduct = await Products.create({
            product_name,
            product_price,
            product_star,
            product_discount,
            product_hot,
            product_date: date,
            product_quantity,
            image_id,
            infor_product,
            category_id,
        });
        responseSend(res, newProduct, "Thêm Thành công!", 201);
    } catch (error) {
        console.log(error);
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

const updateProduct = async (req, res) => {
    try {
        const product_id = req.params.id;
        const {
            product_name,
            product_price,
            product_star,
            product_discount,
            product_hot,
            product_quantity,
        } = req.body;
        const image_id = req.id;
        const infor_product = req.id;
        const category_id = req.id;
        const product_date = new Date();
        const product = await Products.findByPk(product_id);
        if (!product) {
            return res.status(404).json({
                message: "Product not found",
                success: false
            });
        }
        product.product_name = product_name;
        product.product_price = product_price;
        product.product_star = product_star;
        product.product_discount = product_discount;
        product.product_hot = product_hot;
        product.product_date = product_date;
        product.product_quantity = product_quantity;
        product.image_id = image_id;
        product.infor_product = infor_product;
        product.category_id = category_id;

        await product.save();

        responseSend(res, product, "Đã Cập Nhật Thành Công!", 200);
    } catch (error) {
        console.error("Error updating product:", error);
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

const deleteProduct = async (req, res) => {
    try {
        const deleted = await Products.destroy({
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