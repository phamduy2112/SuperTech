import sequelize from "../models/connect.js";
import { responseSend } from "../config/response.js";
import initModels from "../models/init-models.js";
let models = initModels(sequelize); 
let discount = models.discount; 

const getdiscount = async (req, res) => {
    try {
        let data = await discount.findAll();
        responseSend(res, data, "Thành công!", 200);
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};
const createUserDiscount = async (req, res) => {
    try {
        const {user_id,discount_id}=req.body;
        const user_at=new Date();
          const newDiscount = await models.user_discounts.create({
            user_id,discount_id,user_at
        });

        responseSend(res, newDiscount, "Thành công!", 200);
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

const getdiscountById = async (req, res) => {
    try {
        let data = await discount.findByPk(req.params.id);
        if (data) {
            responseSend(res, data, "Thành công!", 200);
        } else {
            responseSend(res, "", "không tồn tại !", 404);
        }
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};

const creatediscount = async (req, res) => {
    try {
      const { discount_name, discount_percent, discount_date_start, discount_date_end, condition } = req.body;
  
      if (!discount_date_start || !discount_date_end) {
        return res.status(400).json({ message: 'Vui lòng cung cấp đầy đủ ngày bắt đầu và ngày kết thúc.' });
      }
  
      const startDate = new Date(discount_date_start);
      const endDate = new Date(discount_date_end);
  
      if (endDate <= startDate) {
        return res.status(400).json({ message: 'Ngày kết thúc phải lớn hơn ngày bắt đầu.' });
      }
  
      const newDiscount = await sequelize.models.discount.create({
        discount_name,
        discount_percent,
        discount_date_start: startDate,
        discount_date_end: endDate,
        condition,
      });
  
      // Tính thời gian hết hạn và lên lịch xóa
      const expirationDate = new Date(endDate);
      expirationDate.setDate(expirationDate.getDate() + 1); // Thêm 1 ngày sau ngày kết thúc
      const timeUntilDeletion = expirationDate.getTime() - Date.now();
  
      setTimeout(async () => {
        await sequelize.models.discount.destroy({
          where: { id: newDiscount.id },
        });
        console.log(`Đã tự động xóa mã giảm giá "${discount_name}" do đã hết hạn.`);
      }, timeUntilDeletion);
  
      res.status(201).json({ message: 'Thêm mã giảm giá thành công!', data: newDiscount });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Có lỗi xảy ra khi thêm mã giảm giá.' });
    }
  };
  

const applyDiscount = async (req, res) => {
    try {
        const { user_id, discount_code } = req.body;

        // Kiểm tra xem người dùng đã từng sử dụng mã giảm giá chưa
        const usedDiscount = await sequelize.models.user_discounts.findOne({
            where: {
                user_id,
                discount_code,
            },
        });

        if (usedDiscount) {
            return res.status(400).json({ message: 'Mã giảm giá chỉ có thể sử dụng một lần.' });
        }

        // Kiểm tra xem mã giảm giá có hợp lệ không
        const discount = await sequelize.models.discount.findOne({
            where: {
                id: discount_code,
                discount_date_start: { [sequelize.Op.lte]: new Date() },
                discount_date_end: { [sequelize.Op.gte]: new Date() },
            },
        });

        if (!discount) {
            return res.status(400).json({ message: 'Mã giảm giá không hợp lệ hoặc đã hết hạn.' });
        }

      

     
        res.status(201).json({ message: 'Đơn hàng đã được tạo và mã giảm giá đã được áp dụng.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Có lỗi xảy ra khi áp dụng mã giảm giá.' });
    }
};
const deletediscount = async (req, res) => {
    try {
        let deleted = await discount.destroy({
            where: { discount_id: req.params.id }
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
    getdiscount,
    getdiscountById,
    creatediscount,
    applyDiscount,
    createUserDiscount,
    deletediscount
};