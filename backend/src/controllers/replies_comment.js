import sequelize from "../models/connect.js";
import { responseSend } from "../config/response.js";
import initModels from "../models/init-models.js";

let models = initModels(sequelize); 
let repliesCommentProduct = models.replies_comment_product; 

const getcommentpost = async (req, res) => {
    try {
        let data = await repliesCommentProduct.findAll();
        responseSend(res, data, "Thành công!", 200);
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

const getcommentpostById = async (req, res) => {
    try {
        let data = await repliesCommentProduct.findByPk(req.params.id);
        if (data) {
            responseSend(res, data, "Thành công!", 200);
        } else {
            responseSend(res, "", "không tồn tại !", 404);
        }
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

const createRepliesComment = async (req, res) => {
    try {
        const user_id = req.id;
        const { comment,comment_id   } = req.body;

        console.log({
          user_id,
          comment,
          comment_id,

        });

        // Tạo comment mới
        const newComment = await repliesCommentProduct.create({
          user_id,
          comment_id,
          comment,
        });
        responseSend(res, newComment, "Thêm thành công!", 201);
      } catch (error) {
        console.error("Error creating comment:", error); // Log chi tiết lỗi
        responseSend(res, "", "Có lỗi xảy ra!", 500);
      }
};

const updatecommentpost = async (req, res) => {
    try {
        const { comment   } = req.body;
        const newRepliesComment={
            comment
        }
        let updated = await repliesCommentProduct.update(newRepliesComment, {
            where: { comment_post_id: req.params.id }
        });
        if (updated[0] > 0) {
            let updatedItem = await repliesCommentProduct.findByPk(req.params.id);
            responseSend(res, updatedItem, "Đã Cập Nhật Thành Công!", 200);
        } else {
            responseSend(res, "", "không tồn tại !", 404);
        }
    } catch (error) {
        console.error("Error updating comment:", error);
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

const deletecommentpost = async (req, res) => {
    try {
        let deleted = await repliesCommentProduct.destroy({
            where: { comment_post_id: req.params.id }
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
    getcommentpost,
    getcommentpostById,
    createRepliesComment,
    updatecommentpost,
    deletecommentpost
};