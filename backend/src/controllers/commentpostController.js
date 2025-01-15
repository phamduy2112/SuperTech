import sequelize from "../models/connect.js";
import { responseSend } from "../config/response.js";
import initModels from "../models/init-models.js";

let models = initModels(sequelize); 
let commentpostModel = models.comment_posts; 

const getcommentpost = async (req, res) => {
    try {
        let data = await commentpostModel.findAll();
        responseSend(res, data, "Thành công!", 200);
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

const getcommentpostById = async (req, res) => {
    try {
        let data = await commentpostModel.findByPk(req.params.id,{
            model: models.user,
            as: 'user' // Bao gồm replies cho mỗi comment
        });
        if (data) {
            responseSend(res, data, "Thành công!", 200);
        } else {
            responseSend(res, "", "không tồn tại !", 404);
        }
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

const createcommentpost = async (req, res) => {
    try {

        const user_id = req.id; // Lấy user_id từ middleware xác thực
      const { comment_content, post_id } = req.body;
  
     
  
      // Tạo comment mới
      const newComment = await commentpostModel.create({
        user_id,
        post_id,
        comment_content,
        comment_date: new Date(),
      });
        responseSend(res, newComment, "Thêm Thành công!", 201);
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

const updatecommentpost = async (req, res) => {
    try {
           const user_id = req.id;
              const { comment_content } = req.body;
            
              
              const comment_post_id = +req.params.id;
      
              if (!comment_content) {
                  return responseSend(res, "", "Nội dung bình luận không được để trống!", 400);
              }
      
              const newComment = {
                  comment_content,
                  comment_date: new Date()
              };
      
              const [updatedCount] = await commentpostModel.update(newComment, {
                  where: { comment_post_id, user_id }
              });
      
              if (updatedCount > 0) {
                  const updatedItem = await commentpostModel.findByPk(comment_post_id);
                  responseSend(res, updatedItem, "Đã Cập Nhật Thành Công!", 200);
              } else {
                  responseSend(res, "", "Bình luận không tồn tại hoặc không thuộc về người dùng này!", 404);
              }
    } catch (error) {
        console.error("Error updating comment:", error);
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

const deletecommentpost = async (req, res) => {
    try {
         const id=req.params.id;
          
              
              let deleted = await commentpostModel.destroy({
                  where: { comment_post_id:id}
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
    createcommentpost,
    updatecommentpost,
    deletecommentpost
};