
import sequelize from "../models/connect.js";
import { responseSend } from "../config/response.js";  
import initModels from "../models/init-models.js";
let models = initModels(sequelize); 

let setting = models.setting;

const getSetting  = async (req, res) => {
    try {
        let data = await setting.findAll();
        responseSend(res, data, "Thành Công !", 200);
    } catch (err) { 
        console.error(err);
        responseSend(res, "","Có lỗi xảy ra", 500);
    }

}
const getSettingById = async (req, res) => {
    try {
        const settingId = req.params.id; // Lấy ID từ tham số đường dẫn
        const data = await setting.findByPk(settingId); // Tìm setting bằng primary key

        if (data) {
            responseSend(res, data, "Thành công!", 200); // Trả về dữ liệu nếu tìm thấy
        } else {
            responseSend(res, "", "Không tồn tại!", 404); // Trả về lỗi nếu không tìm thấy
        }
    } catch (error) {
        console.error("Error fetching setting by ID:", error); // Ghi log lỗi
        responseSend(res, "", "Có lỗi xảy ra!", 500); // Trả về lỗi server
    }
}
const updateSetting = async (req, res) => {
    try {
        const settingId = req.params.id;
        const { value } = req.body;

        const settingToUpdate = await setting.findByPk(settingId);
        if (!settingToUpdate) {
            return res.status(404).json({
                message: "Setting not found",
                success: false
            });
        }
        settingToUpdate.value = value;
        await settingToUpdate.save();

        responseSend(res, settingToUpdate, "Đã Cập Nhật Thành Công!", 200);
    } catch (error) {
        console.error("Error updating setting:", error);
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

export {
    getSetting,
    getSettingById,
    updateSetting

}