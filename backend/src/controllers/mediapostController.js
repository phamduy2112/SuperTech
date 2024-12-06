import sequelize from "../models/connect.js";
import { responseSend } from "../config/response.js";
import initModels from "../models/init-models.js";
import cloudinary from '../config/cloudinaryConfig.js';
import ImageModel from '../models/media_post.js';
import path from 'path';
import multer from 'multer';
let models = initModels(sequelize); 
let mediapost = models.media_post; 

const storage = multer.memoryStorage();
const upload = multer({ storage }).single('media_url');
const getmediapost = async (req, res) => {
    try {
        let data = await mediapost.findAll();
        responseSend(res, data, "Thành công!", 200);
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

const getmediapostById = async (req, res) => {
    try {
        let data = await mediapost.findByPk(req.params.id);
        if (data) {
            responseSend(res, data, "Thành công!", 200);
        } else {
            responseSend(res, "", "không tồn tại !", 404);
        }
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

const createmediapost = async (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            console.error("Upload error:", err);
            return res.status(500).json({ error: 'Error handling the file upload.' });
        }
        if (!req.file) {
            return res.status(400).json({ error: 'No files were uploaded.' });
        }
        try {
            const file = req.file;
            const originalName = path.parse(file.originalname).name;
            const result = await new Promise((resolve, reject) => {
                cloudinary.uploader.upload_stream(
                    {
                        folder: 'Blog',
                        resource_type: 'image',
                        public_id: originalName
                    },
                    (error, result) => {
                        if (error) reject(error);
                        else resolve(result);
                    }
                ).end(file.buffer);
            });
            const imageName = result.public_id.split('/').pop();
            let postId = req.body.post_id;
            let newMediaPost = await mediapost.create({
                media_url: imageName,
                post_id: postId,
            });
            responseSend(res, newMediaPost, "Đăng Tải Hình Ảnh Thành Công!", 201);
        } catch (error) {
            console.error('Error creating media post:', error);
            responseSend(res, "", "Có lỗi xảy ra!", 500);
        }
    });
};

const updatemediapost = async (req, res) => {
    try {
        let updated = await mediapost.update(req.body, {
            where: { media_id: req.params.id }
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

const deletemediapost = async (req, res) => {
    try {
        let deleted = await mediapost.destroy({
            where: { media_id: req.params.id }
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
    getmediapost,
    getmediapostById,
    createmediapost,
    updatemediapost,
    deletemediapost
};