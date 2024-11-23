import sequelize from "../models/connect.js";
import { responseSend } from "../config/response.js";
import initModels from "../models/init-models.js";

let models = initModels(sequelize); 
let Products_color = models.product_colors; 

const getProduct_colors= async (req, res) => {
    try {
        let data = await Products_color.findAll();
        responseSend(res, data, "Thành công!", 200);
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

const getProduct_colorsById = async (req, res) => {
    try {
        let data = await Products_color.findByPk(req.params.id);
        if (data) {
            responseSend(res, data, "Thành công!", 200);
        } else {
            responseSend(res, "", "không tồn tại !", 404);
        }
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

const createProduct_colors = async (req, res) => {
    try {
        const {
            color,
            quality,
            image_id,
            product_id
        } = req.body;

        const newProduct = await Products_color.create({
            color,
            quality,
            image_id,
            product_id
        });
        responseSend(res, newProduct, "Thêm Thành công!", 201);
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

const updateProduct_colors = async (req, res) => {
    try {
        const color_id = req.params.id;
        const {
            color,
            quality,

        } = req.body;
         const image_id = req.id;
         const product_id = req.id;
        const product_color = await Products_color.findByPk(color_id);
        if (!product_color) {
            return res.status(404).json({
                message: "Color not found",
                success: false
            });
        }
        product_color.color = color;
        product_color.quality = quality;
        product_color.image_id = image_id;
        product_color.product_id = product_id;

        await product_color.save();

        responseSend(res, product_color, "Đã Cập Nhật Thành Công!", 200);
    } catch (error) {
        console.error("Error updating product color:", error);
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

const deleteProduct_colors = async (req, res) => {
    try {
        let deleted = await Products_color.destroy({
            where: { color_id: req.params.id }
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
    getProduct_colors,
    getProduct_colorsById,
    createProduct_colors,
    updateProduct_colors,
    deleteProduct_colors
};