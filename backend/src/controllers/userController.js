import sequelize from "../models/connect.js";
import { responseSend } from "../config/response.js";
import initModels from "../models/init-models.js";

let models = initModels(sequelize); 
let User = models.user; 


const getUser = async (req, res) => {
    let data = await User.findAll();
    responseSend(res, data, "Thành công!", 200);
};

const createUser = async (req, res) => {
    try {
        let newuser = await User.create(req.body);
        responseSend(res, newuser, "Thêm Thành công!", 201);
    } catch (error) {
        console.error("Error creating user:", error);
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

const updateUser = async (req, res) => {
    try {
        let updated = await User.update(req.body, {
            where: { user_id: req.params.id }
        });
        if (updated[0] > 0) {
            let updatedItem = await User.findByPk(req.params.id);
            responseSend(res, updatedItem, "Đã Cập Nhật Thành Công!", 200);
        } else {
            responseSend(res, "", "không tồn tại !", 404);
        }
    } catch (error) {
        console.error("Error updating user:", error);
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

export {
    getUser,
    createUser,
    updateUser
};
