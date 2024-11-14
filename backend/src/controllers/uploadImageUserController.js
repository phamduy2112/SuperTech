import cloudinary from '../config/cloudinaryConfig.js';
import multer from 'multer';
import ImageModel from '../models/user.js';
import path from 'path';
import { responseSend } from "../config/response.js";
const storage = multer.memoryStorage();
const upload = multer({ storage }).single('user_image');

const uploadimagesUser = async (req, res) => {
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
            folder: 'User',
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
      const userId = req.id;
      if (!userId) {
        responseSend(res, "", "User ID is undefined. Authentication may have failed.", 404);
      }
      await ImageModel.update({ user_image: imageName }, { where: { user_id: userId } });
      responseSend(res, imageName, "Đăng Tải Hình Ảnh Thành Công!", 200);
    } catch (error) {
      console.error('Lỗi Đăng Tải Hình Ảnh - Mã Lỗi:', error);
      responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
  });
};

export { uploadimagesUser };