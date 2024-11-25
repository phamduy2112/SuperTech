import sequelize from "../models/connect.js";
import { responseSend } from "../config/response.js";
import initModels from "../models/init-models.js";
import { Op } from "sequelize";
import e from "express";
import { uploadFields, uploadImages } from "./uploadController.js";
import cloudinary from '../config/cloudinaryConfig.js';
let models = initModels(sequelize); 
let Products = models.products; 

const getProducts = async (req, res) => {
    try {
        let data = await Products.findAll( 
        {
            include: [
            {
                model: models.comment_product,
                as:'comment_products',
                include: [
                        {
                            model: models.user,
                            as: 'user',
                            attributes: { exclude: ['user_password', 'user_phone'] }
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
            },
            include:[
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
        if (products.length > 0) {
            responseSend(res, products, "Thành công!", 200);
        }else{
            responseSend(res, "", "không tồn tại !", 404);

        }
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra khi truy vấn sản phẩm", 500);
        console.log(error);
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
            whereClause.category_id = category;
        }

        const products = await Products.findAll({
            include: [{
                model: models.categories,
                as: "category",
                where: whereClause,
                attributes: []
            },
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
            product_discount,
            product_hot,
            category_id,
            infor_screen,
            infor_system,
            infor_cpu,
            infor_ram,
            infor_more,
            listProductColor = [],
        } = req.body;

        let date = new Date();
        
        let newinforproduct = await models.infor_product.create({
            infor_screen,
            infor_system,
            infor_cpu,
            infor_ram,
            infor_more
        });

        // Create `products` entry
        const newProduct = await Products.create({
            product_name,
            product_price,
            product_star: 0,
            product_discount,
            product_hot,
            product_date: date,
            infor_product: newinforproduct.infor_product,
            category_id,
        });
        // uploadFields();
        // const rep=uploadImages()

        // Create entries in `product_colors` and `product_storage`
        if (listProductColor.length > 0) {
            await Promise.all(listProductColor.map(async (order) => {
                // Create `product_colors` entry
                const createColors = await models.product_colors.create({
                    color: order.color,
                    quality: order.quality,
                    product_id: newProduct.product_id,
                });

                // Check if `productStorage` exists within `order` and create `product_storage` entries
                if (order.productStorage && order.productStorage.length > 0) {
                    await Promise.all(order.productStorage.map(async (storage) => {
                        return await models.product_storage.create({
                            color_id: createColors.color_id, 
                            storage: storage.storage,       // Link to `product_colors` entry
                            storage_quality: storage.quality, // Replace with actual storage quality field
                            storage_price: storage.storage_price,      // Replace with actual storage price field
                            product_id: newProduct.product_id,

                        });
                    }));
                }
            }));
        }

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
        } = req.body;
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
        const product = await Products.findOne({
            where: {
                product_id: req.params.id
            },
            include: {
                model: models.infor_product, // Giả sử bạn đã thiết lập quan hệ 1-1 giữa `Products` và `InforProduct`
                as: 'infor_product_infor_product' // Tên alias phải khớp với tên alias trong mối quan hệ đã định nghĩa
            }
        });

        if (product && product.infor_product) {
            // Xóa bản ghi `infor_product` liên quan
            await models.infor_product.destroy({
                where: {
                    infor_product: product.infor_product
                }
            });

            // Xóa sản phẩm
            const deleted = await Products.destroy({
                where: { product_id: req.params.id }
            });

            if (deleted) {
                responseSend(res, deleted, "Đã Xóa Thành Công!", 200);
            } else {
                responseSend(res, "", "Không tìm thấy sản phẩm!", 404);
            }
        } else {
            responseSend(res, "", "Không tìm thấy sản phẩm hoặc thông tin sản phẩm!", 404);
        }
    } catch (error) {
        console.error("Lỗi Khi Xóa Sản Phẩm - KIỂU LỖI:", error);
        responseSend(res, "", "Có lỗi xảy ra!", 500);
        console.log(error);
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