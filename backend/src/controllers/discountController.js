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

        // Kiểm tra nếu ngày bắt đầu hoặc ngày kết thúc không có
        if (!discount_date_start || !discount_date_end) {
            return res.status(400).json({ message: 'Vui lòng cung cấp đầy đủ ngày bắt đầu và ngày kết thúc.' });
        }

        // Chuyển ngày bắt đầu và ngày kết thúc thành đối tượng Date
        const startDate = new Date(discount_date_start);
        const endDate = new Date(discount_date_end);

        // Kiểm tra xem ngày kết thúc có lớn hơn ngày bắt đầu không
        if (endDate <= startDate) {
            return res.status(400).json({ message: 'Ngày kết thúc phải lớn hơn ngày bắt đầu.' });
        }

        // Tạo mã giảm giá mới
        const newDiscount = await sequelize.models.discount.create({
            discount_name,
            discount_percent,
            discount_date_start: startDate,
            discount_date_end: endDate,
            condition,
        });

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

        // Áp dụng mã giảm giá cho đơn hàng của người dùng (giả sử bạn có bảng orders)
        const newOrder = await sequelize.models.orders.create({
            user_id,
            discount_code: discount.id,
            total_amount: 100, // Giả sử tổng tiền là 100, bạn sẽ tính lại với discount
        });

        // Lưu thông tin sử dụng mã giảm giá của người dùng
        await sequelize.models.user_discounts.create({
            user_id,
            discount_code: discount.id,
            used_at: new Date(),
        });

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
    deletediscount
};