import sequelize from "../models/connect.js";
import { responseSend } from "../config/response.js";
import initModels from "../models/init-models.js";

let models = initModels(sequelize); 
let detailorder = models.detail_order; 

const getdetailorder = async (req, res) => {
    try {
        let data = await detailorder.findAll();
        responseSend(res, data, "Thành công!", 200);
    } catch (error) {
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};


const getDetailOrderById = async (req, res) => {
    try {
        
        // const user_id=req.id;

        const order_id = req.params.id;
        let data = await detailorder.findAll({
            where:{
                order_id,

            },
            include: [
                {
                    model: models.products,
                    as: 'product' // Bao gồm replies cho mỗi comment
                },
                {
                model: models.order,
                    as:'order',
                    include: [
                        {
                            model: models.user,
                            as: 'user' // Bao gồm replies cho mỗi comment
                        }
                    ]
            },
            
      
            
         
        
        ]
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

const createdetailorder = async (req, res) => {
    try {
        const detailOrders = req.body; // Giả định body chứa một mảng đối tượng
        console.log(detailOrders);

        const newOrders = await Promise.all(detailOrders.map(async (order) => {
            // Kiểm tra số lượng tồn kho trước khi tạo detailOrder
            const productRecord = await models.products.findOne({ where: { product_id: order.product_id } });
            if (!productRecord) {
                throw new Error(`Sản phẩm với ID: ${order.product_id} không tồn tại`);
            }

            if (productRecord.product_quantity < order.detail_order_quality) {
                throw new Error(`Số lượng trong kho không đủ cho sản phẩm với ID: ${order.product_id}`);
            }

            // Tạo detailOrder
            const createdOrder = await detailorder.create(order);

            // Cập nhật số lượng sản phẩm sau khi tạo đơn hàng thành công
            await models.products.update(
                {
                    product_quantity: sequelize.literal(`product_quantity - ${order.detail_order_quality}`)
                },
                {
                    where: {
                        product_id: order.product_id
                    }
                }
            );

            return createdOrder;
        }));

        responseSend(res, newOrders, "Thêm thành công!", 201);
    } catch (error) {
        responseSend(res, "", `Có lỗi xảy ra: ${error.message}`, 500);
        console.error(error);
    }
};

const updatedetailorder = async (req, res) => {
    try {
        let updated = await detailorder.update(req.body, {
            where: { detail_order_id: req.params.id }
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

const deletedetailorder = async (req, res) => {
    try {
        let deleted = await detailorder.destroy({
            where: { detail_order_id: req.params.id }
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
    getdetailorder,
    getDetailOrderById,
    createdetailorder,
    updatedetailorder,
    deletedetailorder
};