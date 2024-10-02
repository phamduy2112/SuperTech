import sequelize from "../models/connect.js";
import mediapost from "../models/media_post.js";
import { responseSend } from "../config/response.js";
mediapost.init(sequelize);

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
    try {
        // Removed discount existence check
        let newmediapost = await mediapost.create(req.body);
        responseSend(res, newmediapost, "Thêm Thành công!", 201);
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

const updatemediapost = async (req, res) => {
    try {
        // Removed discount existence check
        let updated = await mediapost.update(req.body, {
            where: { id: req.params.id }
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
            where: { id: req.params.id }
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