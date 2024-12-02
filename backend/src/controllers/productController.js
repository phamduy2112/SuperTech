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
            //     {
            //     model: models.comment_product,
            //         as:'comment_products',
            //         include: [
            //             {
            //                 model: models.user,
            //                 as: 'user'
            //             }
            //         ]
            // },
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
            product_quantity,
            image_id,
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
            product_discount,
            product_hot,
            product_quantity,
            category_id,
            infor_screen,
            infor_system,
            infor_cpu,
            infor_ram,
            infor_more,
            listProductColor = [], // Default to empty array if undefined
        } = req.body;

        // Tìm sản phẩm
        const product = await Products.findByPk(product_id, {
            include: [
                {
                    model: models.infor_product,
                    as: 'infor_product_infor_product', // Alias được định nghĩa trong quan hệ
                },
                {
                    model: models.product_colors,
                    as: 'product_colors',
                },
            ],
        });

        if (!product) {
            return res.status(404).json({
                message: "Product not found",
                success: false,
            });
        }

        // Cập nhật thông tin cơ bản của sản phẩm
        product.product_name = product_name || product.product_name;
        product.product_price = product_price || product.product_price;
        product.product_discount = product_discount || product.product_discount;
        product.product_hot = product_hot || product.product_hot;
        product.product_quantity = product_quantity || product.product_quantity;
        product.category_id = category_id || product.category_id;
        product.product_date = new Date();

        // Cập nhật thông tin sản phẩm (infor_product)
        if (product.infor_product_infor_product) {
            const inforProduct = product.infor_product_infor_product;
            inforProduct.infor_screen = infor_screen || inforProduct.infor_screen;
            inforProduct.infor_system = infor_system || inforProduct.infor_system;
            inforProduct.infor_cpu = infor_cpu || inforProduct.infor_cpu;
            inforProduct.infor_ram = infor_ram || inforProduct.infor_ram;
            inforProduct.infor_more = infor_more || inforProduct.infor_more;
            await inforProduct.save();
        }

        // Xử lý màu sắc và dung lượng (product_colors, product_storage)
        if (listProductColor.length > 0) {
            // Xóa các màu sắc cũ và liên kết dung lượng (nếu cần)
            await Promise.all(
                product.product_colors.map(async (color) => {
                    await models.product_storage.destroy({ where: { color_id: color.color_id } });
                    await color.destroy();
                })
            );

            // Thêm các màu sắc mới
            await Promise.all(
                listProductColor.map(async (color) => {
                    const newColor = await models.product_colors.create({
                        color: color.color,
                        quality: color.quality,
                        product_id: product_id,
                        image_id: color.image_id,
                    });

                    // Thêm các dung lượng mới nếu có
                    if (color.productStorage && color.productStorage.length > 0) {
                        await Promise.all(
                            color.productStorage.map(async (storage) => {
                                await models.product_storage.create({
                                    color_id: newColor.color_id,
                                    storage: storage.storage,
                                    storage_quality: storage.quality,
                                    storage_price: storage.storage_price,
                                    product_id: product_id,
                                });
                            })
                        );
                    }
                })
            );
        }

        // Lưu thay đổi của sản phẩm
        await product.save();

        responseSend(res, product, "Đã Cập Nhật Thành Công!", 200);
    } catch (error) {
        console.error("Error updating product:", error);
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};


const deleteProduct = async (req, res) => {
    try {
        // Tìm sản phẩm với ID từ tham số URL và bao gồm thông tin chi tiết liên quan
        const product = await Products.findOne({
            where: {
                product_id: req.params.id
            },
            include: [
                {
                    model: models.infor_product, // Quan hệ với infor_product
                    as: 'infor_product_infor_product' // Alias của quan hệ trong mô hình Sequelize
                },
                {
                    model: models.product_colors, // Quan hệ với product_colors
                    as: 'product_colors' // Alias của quan hệ với bảng product_colors
                }
            ]
        });

        if (product) {
            // Xóa các bản ghi `product_storage` liên quan đến các màu sắc của sản phẩm
            if (product.product_colors && product.product_colors.length > 0) {
                await Promise.all(
                    product.product_colors.map(async (color) => {
                        // Xóa các bản ghi `product_storage` liên quan đến `product_colors`
                        await models.product_storage.destroy({
                            where: {
                                color_id: color.color_id,
                                product_id: product.product_id
                            }
                        });
                    })
                );
                
                // Xóa các bản ghi `product_colors`
                await models.product_colors.destroy({
                    where: {
                        product_id: product.product_id
                    }
                });
            }

            // Xóa bản ghi `infor_product` nếu có
            if (product.infor_product) {
                await models.infor_product.destroy({
                    where: {
                        infor_product: product.infor_product
                    }
                });
            }

            // Xóa bản ghi `product` (sản phẩm)
            const deleted = await Products.destroy({
                where: { product_id: req.params.id }
            });

            responseSend(res, deleted, "Đã Xóa Thành Công!", 200);
        } else {
            responseSend(res, "", "Không tìm thấy sản phẩm hoặc thông tin sản phẩm!", 404);
        }
    } catch (error) {
        console.error("Lỗi Khi Xóa Sản Phẩm - KIỂU LỖI:", error);
        console.log(error);
        
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